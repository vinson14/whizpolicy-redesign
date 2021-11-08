/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { checkSchema, validationResult } = require("express-validator");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var express = require("express");
const clientSchema = require("./validation-schema");
const { calculateAge } = require("./utils");

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
const dependantsPath = "/dependants";
const policiesPath = "/policies";
const policyIdKeyName = "policyId";
const policyIdKeyType = "S";
const policyIdKeyPath = `/:${policyIdKeyName}`;
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
  console.log(req.apiGateway.event.requestContext);
  console.log(res);
  var condition = {};
  condition[partitionKeyName] = {
    ComparisonOperator: "EQ",
  };

  condition[partitionKeyName]["AttributeValueList"] = [
    convertUrlType(
      req.apiGateway.event.requestContext.authorizer.claims.sub,
      partitionKeyType
    ),
  ];

  let queryParams = {
    TableName: tableName,
    KeyConditions: condition,
  };

  dynamodb.query(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err });
    } else {
      data.Items.forEach((item) => (item.age = calculateAge(item.birthday)));
      console.log(data.Items);
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

app.put(path + sortKeyPath, function (req, res) {
  req.body.agentId = convertUrlType(
    req.apiGateway.event.requestContext.authorizer.claims.sub,
    partitionKeyType
  );

  req.body.clientId = convertUrlType(req.params[sortKeyName], sortKeyType);

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

app.post(path, checkSchema(clientSchema), function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.statusCode = 400;
    res.json({ errors: errors.array() });
    return;
  }
  // Populating primary and secondary key
  req.body.agentId = convertUrlType(
    req.apiGateway.event.requestContext.authorizer.claims.sub,
    partitionKeyType
  );
  req.body.clientId = convertUrlType(generateUuid(), sortKeyType);
  // Adding empty policies and dependants array
  req.body.dependants = [];
  req.body.policies = [];

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

app.delete(path + sortKeyPath, function (req, res) {
  var params = {};
  params[partitionKeyName] = convertUrlType(
    req.apiGateway.event.requestContext.authorizer.claims.sub,
    partitionKeyType
  );

  try {
    params[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType);
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: "Wrong column type " + err });
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

/**************************************
 * HTTP POST method to add dependant *
 ***************************************/
app.post(path + sortKeyPath + dependantsPath, function (req, res) {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   res.statusCode = 400;
  //   res.json({ errors: errors.array() });
  //   return;
  // }

  keyParams = {};
  keyParams[partitionKeyName] = convertUrlType(
    req.apiGateway.event.requestContext.authorizer.claims.sub,
    partitionKeyType
  );
  keyParams[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType);

  const getItemParams = {
    TableName: tableName,
    Key: keyParams,
  };

  dynamodb.get(getItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url, body: req.body });
    } else {
      const client = data.Item;

      const dependants = client.dependants;
      dependants.push(req.body);

      let updateItemParms = {
        TableName: tableName,
        Key: keyParams,
        AttributeUpdates: {
          dependants: {
            Action: "PUT",
            Value: dependants,
          },
        },
      };

      dynamodb.update(updateItemParms, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.json({ error: err, url: req.url, body: req.body });
        } else {
          res.json({ success: "post call succeed!", url: req.url, data: data });
        }
      });
    }
  });
});

/**************************************
 * HTTP POST method to add policy *
 ***************************************/
app.post(path + sortKeyPath + policiesPath, function (req, res) {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   res.statusCode = 400;
  //   res.json({ errors: errors.array() });
  //   return;
  // }

  keyParams = {};
  keyParams[partitionKeyName] = convertUrlType(
    req.apiGateway.event.requestContext.authorizer.claims.sub,
    partitionKeyType
  );
  keyParams[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType);

  const getItemParams = {
    TableName: tableName,
    Key: keyParams,
  };

  dynamodb.get(getItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url, body: req.body });
    } else {
      const client = data.Item;

      const policies = client.policies;
      req.body[policyIdKeyName] = generateUuid();
      policies.push(req.body);

      let updateItemParms = {
        TableName: tableName,
        Key: keyParams,
        AttributeUpdates: {
          policies: {
            Action: "PUT",
            Value: policies,
          },
        },
      };

      dynamodb.update(updateItemParms, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.json({ error: err, url: req.url, body: req.body });
        } else {
          res.json({ success: "post call succeed!", url: req.url, data: data });
        }
      });
    }
  });
});

/**************************************
 * HTTP PUT method to edit policy *
 ***************************************/
app.put(
  path + sortKeyPath + policiesPath + policyIdKeyPath,
  function (req, res) {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   res.statusCode = 400;
    //   res.json({ errors: errors.array() });
    //   return;
    // }

    keyParams = {};
    keyParams[partitionKeyName] = convertUrlType(
      req.apiGateway.event.requestContext.authorizer.claims.sub,
      partitionKeyType
    );
    keyParams[sortKeyName] = convertUrlType(
      req.params[sortKeyName],
      sortKeyType
    );
    const policyId = convertUrlType(
      req.params[policyIdKeyName],
      policyIdKeyType
    );
    const getItemParams = {
      TableName: tableName,
      Key: keyParams,
    };

    dynamodb.get(getItemParams, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: err, url: req.url, body: req.body });
      } else {
        const client = data.Item;

        const policies = client.policies;
        const index = policies.findIndex(
          (p) => p[policyIdKeyName] === policyId
        );
        policies[index] = req.body;

        let updateItemParms = {
          TableName: tableName,
          Key: keyParams,
          AttributeUpdates: {
            policies: {
              Action: "PUT",
              Value: policies,
            },
          },
        };

        dynamodb.update(updateItemParms, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.json({ error: err, url: req.url, body: req.body });
          } else {
            res.json({
              success: "put call succeed!",
              url: req.url,
              data: data,
            });
          }
        });
      }
    });
  }
);

/**************************************
 * HTTP DELETE method to edit policy *
 ***************************************/
app.delete(
  path + sortKeyPath + policiesPath + policyIdKeyPath,
  function (req, res) {
    keyParams = {};
    keyParams[partitionKeyName] = convertUrlType(
      req.apiGateway.event.requestContext.authorizer.claims.sub,
      partitionKeyType
    );
    keyParams[sortKeyName] = convertUrlType(
      req.params[sortKeyName],
      sortKeyType
    );
    const policyId = convertUrlType(
      req.params[policyIdKeyName],
      policyIdKeyType
    );
    const getItemParams = {
      TableName: tableName,
      Key: keyParams,
    };

    dynamodb.get(getItemParams, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.json({ error: err, url: req.url, body: req.body });
      } else {
        const client = data.Item;

        const policies = client.policies.filter(
          (policy) => policy[policyIdKeyName] != policyId
        );

        let updateItemParms = {
          TableName: tableName,
          Key: keyParams,
          AttributeUpdates: {
            policies: {
              Action: "PUT",
              Value: policies,
            },
          },
        };

        dynamodb.update(updateItemParms, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.json({ error: err, url: req.url, body: req.body });
          } else {
            res.json({
              success: "delete call succeed!",
              url: req.url,
              data: data,
            });
          }
        });
      }
    });
  }
);

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
