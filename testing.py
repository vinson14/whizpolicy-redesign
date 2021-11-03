import boto3
import simplejson as json
from boto3.dynamodb.types import TypeDeserializer, TypeSerializer
serializer = TypeSerializer()

json_test = "{\"occupation\":\"Full Stack Developer\",\"annualIncome\":100000,\"dependants\":[{\"relationship\":\"spouse\",\"name\":\"Chio Bu\"},{\"relationship\":\"son\",\"name\":\"Boy Boy\"},{\"relationship\":\"daughter\",\"name\":\"Girl girl\"}],\"policies\":[{\"deathBenefit\":1000000,\"policyCategory\":\"wholeLife\",\"earlyCiBenefit\":50000,\"policyName\":\"Guaranteed Protect Plus\",\"policyTerm\":99,\"premiumMode\":\"annually\",\"policyNumber\":\"L54678912\",\"majorCiBenefit\":200000,\"tpdBenefit\":1000000,\"lifeAssured\":\"self\",\"premium\":3000,\"insurer\":\"aia\",\"inceptionDate\":\"1 Apr 2021\",\"id\":1,\"premiumTerm\":20},{\"deathBenefit\":500000,\"policyCategory\":\"termLife\",\"earlyCiBenefit\":0,\"policyName\":\"Flexi Term 20\",\"policyTerm\":20,\"premiumMode\":\"monthly\",\"policyNumber\":\"L54678953\",\"majorCiBenefit\":0,\"tpdBenefit\":500000,\"lifeAssured\":\"self\",\"premium\":30,\"insurer\":\"aia\",\"inceptionDate\":\"1 Apr 2021\",\"id\":2,\"premiumTerm\":20}],\"email\":\"vinson1493@gmail.com\",\"name\":\"Vinson Ong\",\"gender\":\"male\",\"mobile\":\"9431 8747\",\"smoker\":\"no\",\"maritalStatus\":\"single\",\"image\":\"vinson.jpg\",\"financialOverview\":{\"majorCi\":{\"currentCoverage\":200000,\"idealCoverage\":500000},\"tpd\":{\"currentCoverage\":1000000,\"idealCoverage\":1000000},\"death\":{\"currentCoverage\":1000000,\"idealCoverage\":1000000},\"earlyCi\":{\"currentCoverage\":50000,\"idealCoverage\":200000},\"accidentalMedical\":{\"currentCoverage\":3000,\"idealCoverage\":3000},\"accidentalDeath\":{\"currentCoverage\":1000000,\"idealCoverage\":1000000}},\"id\":\"1\",\"birthday\":\"1 Apr 1993\",\"age\":28,\"salutation\":\"mr\",\"nationality\":\"Singapore\"}"

print(serializer.serialize("hello"))
serialized_json = json.loads(json_test)
print(serialized_json)
print(type(serialized_json))