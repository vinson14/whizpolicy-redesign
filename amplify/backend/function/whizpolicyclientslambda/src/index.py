import simplejson
import json
import boto3
import uuid
from jose import jwt
from boto3.dynamodb.types import TypeDeserializer, TypeSerializer
from boto3.dynamodb.conditions import Key

table_name = 'whizpolicy_clients'
dynamo_client = boto3.client('dynamodb')
deserializer = TypeDeserializer()
serializer = TypeSerializer()

def serialize_client(client):
  return {key: serializer.serialize(client[key]) for key in client}

def deserialize_client(client):
  return {key: deserializer.deserialize(client[key]) for key in client}

def get_token_claims(event):
  jwtToken = event["headers"].get("Authorization", None)
  return jwt.get_unverified_claims(jwtToken)

def get_clients(event):
  claims = get_token_claims(event)
  clients = dynamo_client.query(TableName=table_name,
   KeyConditionExpression='agent_sub = :agent_sub', 
   ExpressionAttributeValues={':agent_sub': serializer.serialize(claims['sub'])})['Items']
  print(clients)
  return [deserialize_client(client) for client in clients]

def get_uuid():
  return str(uuid.uuid4())

def response(body):
  return {
    "statusCode": 200,
    "body": simplejson.dumps(body),
    "headers": {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    },
  }

def create_client(event):
  jwtToken = event["headers"].get("Authorization", None)
  claims = jwt.get_unverified_claims(jwtToken)
  client = json.loads(event["body"])
  client["agent_sub"] = claims["sub"]
  client["client_id"] = get_uuid()
  print(client)
  client = serialize_client(client)
  dynamo_client.put_item(TableName=table_name, Item=client)
  
  return "client added"



def handler(event, context):

  methods = {
    'GET': get_clients,
    'POST': create_client
  }

  method = event["httpMethod"]
  if method in methods:
    body = methods[method](event)
    return response(body)
