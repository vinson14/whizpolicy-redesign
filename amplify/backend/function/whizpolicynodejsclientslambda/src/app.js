/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var express = require("express");

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "whizpolicy_nodejs_clients";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const userIdPresent = true; // TODO: update in case is required to use that definition
const partitionKeyName = "agentId";
const partitionKeyType = "S";
const sortKeyName = "clientId";
const sortKeyType = "S";
const hasSortKey = sortKeyName !== "";
const path = "/clients";
const UNAUTH = "UNAUTH";
const hashKeyPath = "/:" + partitionKeyName;
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : "";
// declare a new express app
var app = express();
app.use(express.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
};

const generateUuid = () => {
  return uuidv4();
};

/********************************
 * HTTP Get method for list objects *
 ********************************/

app.get(path, function (req, res) {
  var condition = {};
  condition[partitionKeyName] = {
    ComparisonOperator: "EQ",
  };

  condition[partitionKeyName]["AttributeValueList"] = [
    convertUrlType(req.requestContext.claims.sub, partitionKeyType),
  ];

  // if (userIdPresent && req.apiGateway) {
  //   condition[partitionKeyName]["AttributeValueList"] = [
  //     req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH,
  //   ];
  // } else {
  //   try {
  //     condition[partitionKeyName]["AttributeValueList"] = [
  //       convertUrlType(req.params[partitionKeyName], partitionKeyType),
  //     ];
  //   } catch (err) {
  //     res.statusCode = 500;
  //     res.json({ error: "Wrong column type " + err });
  //   }
  // }

  let queryParams = {
    TableName: tableName,
    KeyConditions: condition,
  };

  dynamodb.query(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err });
    } else {
      res.json(data.Items);
    }
  });
});

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + "/object" + hashKeyPath + sortKeyPath, function (req, res) {
  var params = {};
  if (userIdPresent && req.apiGateway) {
    params[partitionKeyName] =
      req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  } else {
    params[partitionKeyName] = req.params[partitionKeyName];
    try {
      params[partitionKeyName] = convertUrlType(
        req.params[partitionKeyName],
        partitionKeyType
      );
    } catch (err) {
      res.statusCode = 500;
      res.json({ error: "Wrong column type " + err });
    }
  }
  if (hasSortKey) {
    try {
      params[sortKeyName] = convertUrlType(
        req.params[sortKeyName],
        sortKeyType
      );
    } catch (err) {
      res.statusCode = 500;
      res.json({ error: "Wrong column type " + err });
    }
  }

  let getItemParams = {
    TableName: tableName,
    Key: params,
  };

  dynamodb.get(getItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err.message });
    } else {
      if (data.Item) {
        res.json(data.Item);
      } else {
        res.json(data);
      }
    }
  });
});

/************************************
 * HTTP put method for insert object *
 *************************************/

app.put(path, function (req, res) {
  // if (userIdPresent) {
  //   req.body["userId"] =
  //     req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  // }

  req.body.agentId = convertUrlType(
    req.requestContext.claims.sub,
    partitionKeyType
  );

  let putItemParams = {
    TableName: tableName,
    Item: req.body,
  };
  dynamodb.put(putItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url, body: req.body });
    } else {
      res.json({ success: "put call succeed!", url: req.url, data: data });
    }
  });
});

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path, function (req, res) {
  // if (userIdPresent) {
  //   req.body["userId"] =
  //     req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  // }

  req.body.agentId = convertUrlType(
    req.requestContext.claims.sub,
    partitionKeyType
  );

  req.body.clientId = convertUrlType(generateUuid(), sortKeyType);

  let putItemParams = {
    TableName: tableName,
    Item: req.body,
  };
  dynamodb.put(putItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url, body: req.body });
    } else {
      res.json({ success: "post call succeed!", url: req.url, data: data });
    }
  });
});

/**************************************
 * HTTP remove method to delete object *
 ***************************************/

app.delete(path + "/object" + hashKeyPath + sortKeyPath, function (req, res) {
  var params = {};
  if (userIdPresent && req.apiGateway) {
    params[partitionKeyName] =
      req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  } else {
    params[partitionKeyName] = req.params[partitionKeyName];
    try {
      params[partitionKeyName] = convertUrlType(
        req.params[partitionKeyName],
        partitionKeyType
      );
    } catch (err) {
      res.statusCode = 500;
      res.json({ error: "Wrong column type " + err });
    }
  }
  if (hasSortKey) {
    try {
      params[sortKeyName] = convertUrlType(
        req.params[sortKeyName],
        sortKeyType
      );
    } catch (err) {
      res.statusCode = 500;
      res.json({ error: "Wrong column type " + err });
    }
  }

  let removeItemParams = {
    TableName: tableName,
    Key: params,
  };
  dynamodb.delete(removeItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url });
    } else {
      res.json({ url: req.url, data: data });
    }
  });
});
app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
