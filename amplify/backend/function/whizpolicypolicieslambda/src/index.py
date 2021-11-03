import json

def handler(event, context):
  print('received event:')
  print(event)

  sample_policies = [{
          "id": 1,
          "policyNumber": "L54678912",
          "policyCategory": "wholeLife",
          "policyName": "Guaranteed Protect Plus",
          "lifeAssured": "self",
          "insurer": "aia",
          "premiumMode": "annually",
          "premium": 3000,
          "deathBenefit": 1000000,
          "tpdBenefit": 1000000,
          "majorCiBenefit": 200000,
          "earlyCiBenefit": 50000,
          "policyTerm": 99,
          "premiumTerm": 20,
          "inceptionDate": "1 Apr 2021"
        },
        {
          "id": 2,
          "policyNumber": "L54678953",
          "policyCategory": "termLife",
          "policyName": "Flexi Term 20",
          "lifeAssured": "self",
          "insurer": "aia",
          "premiumMode": "monthly",
          "premium": 30,
          "deathBenefit": 500000,
          "tpdBenefit": 500000,
          "majorCiBenefit": 0,
          "earlyCiBenefit": 0,
          "policyTerm": 20,
          "premiumTerm": 20,
          "inceptionDate": "1 Apr 2021"
        }]
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(sample_policies)
  }