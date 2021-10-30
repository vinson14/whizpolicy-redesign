import json

def handler(event, context):
  print('received event:')
  print(event)

  sample_clients = [
    {
      "id": 1,
      "name": "Vinson Ong",
      "occupation": "Full Stack Developer",
      "image": "vinson.jpg",
      "annualIncome": 100000,
      "age": 28,
      "mobile": "9431 8747",
      "email": "vinson1493@gmail.com",
      "gender": "male",
      "birthday": "1 Apr 1993",
      "maritalStatus": "single",
      "smoker": "no",
      "dependants": [
        {
          "relationship": "spouse",
          "name": "Chio Bu"
        },
        {
          "relationship": "son",
          "name": "Boy Boy"
        },
        {
          "relationship": "daughter",
          "name": "Girl girl"
        }
      ],
      "financialOverview": {
        "death": {
          "currentCoverage": 1000000,
          "idealCoverage": 1000000
        },
        "tpd": {
          "currentCoverage": 1000000,
          "idealCoverage": 1000000
        },
        "majorCi": {
          "currentCoverage": 200000,
          "idealCoverage": 500000
        },
        "earlyCi": {
          "currentCoverage": 50000,
          "idealCoverage": 200000
        },
        "accidentalDeath": {
          "currentCoverage": 1000000,
          "idealCoverage": 1000000
        },
        "accidentalMedical": {
          "currentCoverage": 3000,
          "idealCoverage": 3000
        }
      },
      "policies": [
        {
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
        }
      ]
    },
    {
      "id": 2,
      "name": "Alex Teng",
      "occupation": "Certis Cisco Officer",
      "image": "vinson.jpg",
      "annualIncome": 100000,
      "age": 33,
      "mobile": "9431 8747",
      "email": "alexteng@gmail.com",
      "gender": "male",
      "birthday": "1 Apr 1983",
      "maritalStatus": "married",
      "smoker": "no",
      "dependants": [
        {
          "relationship": "spouse",
          "name": "Chio Bu"
        },
        {
          "relationship": "son",
          "name": "Boy Boy"
        },
        {
          "relationship": "daughter",
          "name": "Girl girl"
        }
      ],
      "financialOverview": {
        "death": {
          "currentCoverage": 1000000,
          "idealCoverage": 1000000
        },
        "tpd": {
          "currentCoverage": 1000000,
          "idealCoverage": 1000000
        },
        "majorCi": {
          "currentCoverage": 200000,
          "idealCoverage": 500000
        },
        "earlyCi": {
          "currentCoverage": 50000,
          "idealCoverage": 200000
        },
        "accidentalDeath": {
          "currentCoverage": 1000000,
          "idealCoverage": 1000000
        },
        "accidentalMedical": {
          "currentCoverage": 3000,
          "idealCoverage": 3000
        }
      },
      "policies": [
        {
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
        }
      ]
    }
  ]
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(sample_clients)
  }