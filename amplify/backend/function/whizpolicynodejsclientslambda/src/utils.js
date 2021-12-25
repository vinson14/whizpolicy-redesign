const POLICY_DEATH_BENEFIT_KEY = "deathBenefit";
const POLICY_TPD_BENEFIT_KEY = "tpdBenefit";
const POLICY_MAJOR_CI_BENEFIT_KEY = "majorCiBenefit";
const POLICY_EARLY_CI_BENEFIT_KEY = "earlyCiBenefit";
const POLICY_ACC_DEATH_BENEFIT_KEY = "accidentalDeath";
const POLICY_ACC_TPD_BENEFIT_KEY = "accidentalTpd";
const POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_KEY = "accidentalPartialDisability";
const POLICY_ACC_MEDICAL_KEY = "accidentalMedical";
const POLICY_ACC_ALT_MEDICAL_KEY = "accidentalTCM";
const POLICY_ACC_DAILY_HOSP_KEY = "accidentalDailyHospitalIncome";
const POLICY_ACC_WEEKLY_DIS_KEY = "accidentalWeeklyDisabilityIncome";
const POLICY_DISABILITY_INCOME_KEY = "disabilityIncome";
const FINANCIAL_OVERVIEW_KEY = "financialOverview";
const FINANCIAL_OVERVIEW_CURRENT_COVERAGE_KEY = "currentCoverage";
const FINANCIAL_OVERVIEW_IDEAL_COVERAGE_KEY = "idealCoverage";
const CLIENT_ANNUAL_INCOME_KEY = "annualIncome";
const { differenceInYears } = require("date-fns");

const calculateAge = (birthday) => {
  return differenceInYears(new Date(), new Date(birthday));
};

const benefitTypeKeys = [
  POLICY_DEATH_BENEFIT_KEY,
  POLICY_TPD_BENEFIT_KEY,
  POLICY_MAJOR_CI_BENEFIT_KEY,
  POLICY_EARLY_CI_BENEFIT_KEY,
  POLICY_ACC_DEATH_BENEFIT_KEY,
  POLICY_ACC_TPD_BENEFIT_KEY,
  POLICY_DISABILITY_INCOME_KEY,
];

const incomeMultiplier = {
  [POLICY_DEATH_BENEFIT_KEY]: 10,
  [POLICY_TPD_BENEFIT_KEY]: 10,
  [POLICY_MAJOR_CI_BENEFIT_KEY]: 10,
  [POLICY_EARLY_CI_BENEFIT_KEY]: 10,
  [POLICY_ACC_DEATH_BENEFIT_KEY]: 1,
  [POLICY_ACC_TPD_BENEFIT_KEY]: 1,
  [POLICY_DISABILITY_INCOME_KEY]: 0.0583,
};

const calculateCurrentCoverage = (client) => {
  const overview = {};
  benefitTypeKeys.forEach((benefitType) => {
    overview[benefitType] = {};
    overview[benefitType][FINANCIAL_OVERVIEW_CURRENT_COVERAGE_KEY] = client.policies.reduce(
      (sum, policy) => sum + policy[benefitType],
      0
    );
  });
  return overview;
};

const calculateIdealCoverage = (client) => {
  benefitTypeKeys.forEach((benefitType) => {
    client[FINANCIAL_OVERVIEW_KEY][benefitType][FINANCIAL_OVERVIEW_IDEAL_COVERAGE_KEY] =
      client[CLIENT_ANNUAL_INCOME_KEY] * incomeMultiplier[benefitType];
  });
};

const modifyClient = (client) => {
  client.age = calculateAge(client.birthday);
  client[FINANCIAL_OVERVIEW_KEY] = calculateCurrentCoverage(client);
  calculateIdealCoverage(client);
};

module.exports.calculateAge = calculateAge;
module.exports.modifyClient = modifyClient;
