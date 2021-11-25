import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

import countryList from "react-select-country-list";
import RadioInput from "../components/stateless/interface/form/radio-input";
import TextInput from "../components/stateless/interface/form/text-input";
import AutocompleteInput from "../components/stateless/interface/form/autocomplete-input";
import SelectInput from "../components/stateless/interface/form/select-input";
import DateInput from "../components/stateless/interface/form/date-input";
import CurrencyInput from "../components/stateless/interface/form/currency-input";
import YearInput from "../components/stateless/interface/form/year-input";
import ContactCard from "../components/dashboard/client-details/contact-card";
import NameCard from "../components/dashboard/client-details/name-card";
import AboutCard from "../components/dashboard/client-details/about-card";
import DependantsCard from "../components/dashboard/client-details/dependants-card";
import CoverageCard from "../components/dashboard/client-details/coverage-card";
import CheckboxInput from "../components/stateless/interface/form/checkbox-input";
import { Divider } from "@mui/material";
import PolicyCards from "../components/dashboard/client-details/policy-cards";
import AccidentIcon from "../components/stateless/interface/icons/accident-icon";
import PhoneInput from "../components/stateless/interface/form/phone-input";
import { isAfter } from "date-fns";

// Dimensions
export const FLOATING_ACTION_BUTTON_WIDTH = 160;

// Sidebar Constants
export const SIDEBAR_CLIENTS_VALUE = "clients";
export const SIDEBAR_CLIENTS_LABEL = "Clients";
export const SIDEBAR_PORTFOLIO_LABEL = "Portfolio";
export const SIDEBAR_PORTFOLIO_VALUE = "portfolio";
export const SIDEBAR_SETTINGS_LABEL = "Settings";
export const SIDEBAR_SETTINGS_VALUE = "settings";
export const SIDEBAR_PROFILE_LABEL = "Profile";
export const SIDEBAR_PROFILE_VALUE = "profile";

// Client Object files

// Input Types
export const INPUT_TYPE_TEXT = "text";
export const INPUT_TYPE_RADIO = "radio";
export const INPUT_TYPE_SELECT = "select";
export const INPUT_TYPE_AUTOCOMPLETE = "autocomplete";
export const INPUT_TYPE_DATEPICKER = "datepicker";
export const INPUT_TYPE_CURRENCY = "currencyInput";
export const INPUT_TYPE_YEAR = "yearInput";
export const INPUT_TYPE_CHECKBOX = "checkboxInput";
export const INPUT_TYPE_PHONE = "phoneInput";

// Field Types
export const FIELD_TYPE_TEXT = "text";
export const FIELD_TYPE_TEXT_CAMELCASE = "textCamel";
export const FIELD_TYPE_TEXT_UPPERCASE = "textUpper";
export const FIELD_TYPE_CURRENCY = "currency";
export const FIELD_TYPE_INTEGER = "integer";
export const FIELD_TYPE_DATE = "date";

// Policy Categories
export const POLICY_CATEGORY_WHOLE_LIFE_KEY = "wholeLife";
export const POLICY_CATEGORY_TERM_LIFE_KEY = "termLife";
export const POLICY_CATEGORY_ENDOWMENT_KEY = "endowment";
export const POLICY_CATEGORY_ILP_KEY = "ilp";
export const POLICY_CATEGORY_ACCIDENT_KEY = "accident";
export const POLICY_CATEGORY_ISP_KEY = "integratedShieldPlan";

// Policy Categories Labels
export const POLICY_CATEGORY_WHOLE_LIFE_LABEL = "Whole Life";
export const POLICY_CATEGORY_TERM_LIFE_LABEL = "Term Life";
export const POLICY_CATEGORY_ENDOWMENT_LABEL = "Endowment";
export const POLICY_CATEGORY_ILP_LABEL = "Investment Linked";
export const POLICY_CATEGORY_ACCIDENT_LABEL = "Accident";
export const POLICY_CATEGORY_ISP_LABEL = "Integrated Shield Plan";

// Policy Object Keys
export const POLICY_NUMBER_KEY = "policyNumber";
export const POLICY_NAME_KEY = "policyName";
export const POLICY_INSURER_KEY = "insurer";
export const POLICY_LIFE_ASSURED_KEY = "lifeAssured";
export const POLICY_CATEGORY_KEY = "policyCategory";
export const POLICY_PREMIUM_KEY = "premium";
export const POLICY_PREMIUM_MODE_KEY = "premiumMode";
export const POLICY_DEATH_BENEFIT_KEY = "deathBenefit";
export const POLICY_TPD_BENEFIT_KEY = "tpdBenefit";
export const POLICY_MAJOR_CI_BENEFIT_KEY = "majorCiBenefit";
export const POLICY_EARLY_CI_BENEFIT_KEY = "earlyCiBenefit";
export const POLICY_MATURITY_DATE_KEY = "maturityDate";
export const POLICY_TERM_KEY = "policyTerm";
export const POLICY_PREMIUM_TERM_KEY = "premiumTerm";
export const POLICY_GUARANTEED_MATURITY_BENEFIT_KEY =
  "guaranteedMaturityBenefit";
export const POLICY_INCEPTION_DATE_KEY = "inceptionDate";
export const POLICY_ACC_DEATH_BENEFIT_KEY = "accidentalDeath";
export const POLICY_ACC_TPD_BENEFIT_KEY = "accidentalTpd";
export const POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_KEY =
  "accidentalPartialDisability";
export const POLICY_ACC_MEDICAL_KEY = "accidentalMedical";
export const POLICY_ACC_ALT_MEDICAL_KEY = "accidentalTCM";
export const POLICY_ACC_DAILY_HOSP_KEY = "accidentalDailyHospitalIncome";
export const POLICY_ACC_WEEKLY_DIS_KEY = "accidentalWeeklyDisabilityIncome";
export const POLICY_ACC_MOBILITY_AID_KEY = "accidentalMobilityAids";
export const POLICY_ACC_HOME_MOD_KEY = "accidentalHomeModification";
export const POLICY_ILP_FUND_RISK_KEY = "ilpFundRisk";
export const POLICY_HOSP_WARD_TYPE_KEY = "hospitalWardType";
export const POLICY_HOSP_RIDER_TYPE_KEY = "hospitalRiderType";

// Policy Object Labels
export const POLICY_NUMBER_LABEL = "Policy Number";
export const POLICY_NAME_LABEL = "Policy Name";
export const POLICY_INSURER_LABEL = "Insurer";
export const POLICY_LIFE_ASSURED_LABEL = "Life Assured";
export const POLICY_CATEGORY_LABEL = "Category";
export const POLICY_PREMIUM_LABEL = "Premium";
export const POLICY_PREMIUM_MODE_LABEL = "Premium Mode";
export const POLICY_DEATH_BENEFIT_LABEL = "Death Benefit";
export const POLICY_TPD_BENEFIT_LABEL = "Total Permanent Disability";
export const POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_LABEL =
  "Partial Permanent Disability";
export const POLICY_MAJOR_CI_BENEFIT_LABEL = "Major Critical Illness";
export const POLICY_EARLY_CI_BENEFIT_LABEL = "Early Critical Illness";
export const POLICY_MATURITY_DATE_LABEL = "Maturity Date";
export const POLICY_TERM_LABEL = "Policy Term";
export const POLICY_PREMIUM_TERM_LABEL = "Premium Term";
export const POLICY_GUARANTEED_MATURITY_BENEFIT_LABEL =
  "Guaranteed Maturity Benefit";
export const POLICY_INCEPTION_DATE_LABEL = "Inception Date";
export const POLICY_ACC_DEATH_BENEFIT_LABEL = "Death Benefit";
export const POLICY_ACC_TPD_BENEFIT_LABEL =
  "Total Permanent Disability Benefit";
export const POLICY_ACC_MEDICAL_LABEL = "Medical Reimbursement Benefit";
export const POLICY_ACC_ALT_MEDICAL_LABEL = "TCM / Chiropractic Benefit";
export const POLICY_ACC_DAILY_HOSP_LABEL = "Daily Hospital Benefit";
export const POLICY_ACC_WEEKLY_DIS_LABEL = "Weekly Disability Income";
export const POLICY_ACC_MOBILITY_AID_LABEL = "Mobility & Prosthesis Aids";
export const POLICY_ACC_HOME_MOD_LABEL = "Home Modifications Allowance";
export const POLICY_ILP_FUND_RISK_LABEL = "Fund Risk Level";
export const POLICY_HOSP_WARD_TYPE_LABEL = "Ward Type";
export const POLICY_HOSP_RIDER_TYPE_LABEL = "Rider Type";

// Client Object Keys
export const CLIENT_NAME_KEY = "name";
export const CLIENT_OCCUPATION_KEY = "occupation";
export const CLIENT_AGE_KEY = "age";
export const CLIENT_MOBILE_KEY = "mobile";
export const CLIENT_EMAIL_KEY = "email";
export const CLIENT_GENDER_KEY = "gender";
export const CLIENT_BIRTHDAY_KEY = "birthday";
export const CLIENT_MARITAL_STATUS_KEY = "maritalStatus";
export const CLIENT_SMOKER_KEY = "smoker";
export const CLIENT_SALUTATION_KEY = "salutation";
export const CLIENT_NATIONALITY_KEY = "nationality";
export const CLIENT_ANNUAL_INCOME_KEY = "annualIncome";
export const CLIENT_ADDRESS_KEY = "address";
export const CLIENT_REMARKS_KEY = "remarks";
export const CLIENT_AGREED_KEY = "clientAgreed";

// Client Object Labels
export const CLIENT_NAME_LABEL = "Name";
export const CLIENT_OCCUPATION_LABEL = "Occupation";
export const CLIENT_AGE_LABEL = "Age";
export const CLIENT_MOBILE_LABEL = "Mobile";
export const CLIENT_EMAIL_LABEL = "Email";
export const CLIENT_GENDER_LABEL = "Gender";
export const CLIENT_BIRTHDAY_LABEL = "Birthday";
export const CLIENT_MARITAL_STATUS_LABEL = "Marital Status";
export const CLIENT_SMOKER_LABEL = "Smoker";
export const CLIENT_SALUTATION_LABEL = "Salutation";
export const CLIENT_NATIONALITY_LABEL = "Nationality";
export const CLIENT_ANNUAL_INCOME_LABEL = "Annual Income";
export const CLIENT_ADDRESS_LABEL = "Address";
export const CLIENT_REMARKS_LABEL = "Remarks";
export const CLIENT_AGREED_LABEL =
  "I confirm that I have obtained consent from my client to upload his/her personal data on this website.";

// Client financial overview keys and labels
export const CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY = "deathBenefit";
export const CLIENT_FINANCIAL_OVERVIEW_TPD_KEY = "tpdBenefit";
export const CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY = "majorCiBenefit";
export const CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY = "earlyCiBenefit";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY = "accidentalDeath";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_MED_KEY = "accidentalMedicalBenefit";
export const CLIENT_FINANCIAL_OVERVIEW_DEATH_LABEL = "Death";
export const CLIENT_FINANCIAL_OVERVIEW_TPD_LABEL = "Total Permanent Disability";
export const CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_LABEL =
  "Major Critical Illness";
export const CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_LABEL =
  "Early Critical Illness";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_LABEL = "Accidental Death";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_MED_LABEL =
  "Accidental Medical Reimbursement";

// Client Dependant Field key and value
export const CLIENT_DEPENDANT_NAME_KEY = "name";
export const CLIENT_DEPENDANT_RELATIONSHIP_KEY = "relationship";
export const CLIENT_DEPENDANT_NAME_LABEL = "Name";
export const CLIENT_DEPENDANT_RELATIONSHIP_LABEL = "Relationship";

// Client Dependant Relationship Values and Label
export const CLIENT_DEPENDANT_SON_VALUE = "son";
export const CLIENT_DEPENDANT_SON_LABEL = "Son";
export const CLIENT_DEPENDANT_DAUGHTER_VALUE = "daughter";
export const CLIENT_DEPENDANT_DAUGHTER_LABEL = "Daughter";
export const CLIENT_DEPENDANT_SPOUSE_VALUE = "spouse";
export const CLIENT_DEPENDANT_SPOUSE_LABEL = "Spouse";
export const CLIENT_DEPENDANT_FATHER_VALUE = "father";
export const CLIENT_DEPENDANT_FATHER_LABEL = "Aged Father";
export const CLIENT_DEPENDANT_MOTHER_VALUE = "mother";
export const CLIENT_DEPENDANT_MOTHER_LABEL = "Aged Mother";

// Insurer Keys and Labels
export const INSURER_AIA_KEY = "aia";
export const INSURER_AIA_LABEL = "AIA";
export const INSURER_PRU_KEY = "prudential";
export const INSURER_PRU_LABEL = "Prudential";
export const INSURER_GREAT_EASTERN_KEY = "greatEastern";
export const INSURER_GREAT_EASTERN_LABEL = "Great Eastern";
export const INSURER_NTUC_KEY = "ntucIncome";
export const INSURER_NTUC_LABEL = "NTUC Income";
export const INSURER_AVIVA_KEY = "aviva";
export const INSURER_AVIVA_LABEL = "Aviva";
export const INSURER_AXA_KEY = "axa";
export const INSURER_AXA_LABEL = "AXA";
export const INSURER_ALLIANZ_KEY = "allianz";
export const INSURER_ALLIANZ_LABEL = "Allianz";
export const INSURER_CHINA_LIFE_KEY = "chinaLife";
export const INSURER_CHINA_LIFE_LABEL = "China Life";
export const INSURER_CHINA_TAIPING_KEY = "chinaTaiping";
export const INSURER_CHINA_TAIPING_LABEL = "China Taiping";
export const INSURER_ETIQA_KEY = "etiqa";
export const INSURER_ETIQA_LABEL = "Etiqa";
export const INSURER_FWD_KEY = "fwd";
export const INSURER_FWD_LABEL = "FWD";
export const INSURER_HSBC_KEY = "hsbc";
export const INSURER_HSBC_LABEL = "HSBC";
export const INSURER_MANULIFE_KEY = "manulife";
export const INSURER_MANULIFE_LABEL = "Manulife";
export const INSURER_RAFFLES_KEY = "raffles";
export const INSURER_RAFFLES_LABEL = "Raffles Health";
export const INSURER_SING_LIFE_KEY = "singLife";
export const INSURER_SING_LIFE_LABEL = "Sing Life";
export const INSURER_TOKIO_MARINE_KEY = "tokioMarine";
export const INSURER_TOKIO_MARINE_LABEL = "Tokio Marine";
export const INSURER_ZURICH_KEY = "zurich";
export const INSURER_ZURICH_LABEL = "Zurich International";

// Premium Mode Keys and Labels
export const PREMIUM_MODE_ANNUALLY_KEY = "annually";
export const PREMIUM_MODE_MONTHLY_KEY = "monthly";
export const PREMIUM_MODE_QUARTERLY_KEY = "quarterly";
export const PREMIUM_MODE_SEMI_ANNUALLY_KEY = "semiAnnually";
export const PREMIUM_MODE_ANNUALLY_LABEL = "Annually";
export const PREMIUM_MODE_MONTHLY_LABEL = "Monthly";
export const PREMIUM_MODE_QUARTERLY_LABEL = "Quarterly";
export const PREMIUM_MODE_SEMI_ANNUALLY_LABEL = "Semi-annually";

// Marital Status Keys and Labels
export const MARITAL_STATUS_SINGLE_VALUE = "single";
export const MARITAL_STATUS_MARRIED_VALUE = "married";
export const MARITAL_STATUS_DIVORCED_VALUE = "divorced";
export const MARITAL_STATUS_SEPARATED_VALUE = "separated";
export const MARITAL_STATUS_WIDOWED_VALUE = "widowed";
export const MARITAL_STATUS_SINGLE_LABEL = "Single";
export const MARITAL_STATUS_MARRIED_LABEL = "Married";
export const MARITAL_STATUS_DIVORCED_LABEL = "Divorced";
export const MARITAL_STATUS_SEPARATED_LABEL = "Separated";
export const MARITAL_STATUS_WIDOWED_LABEL = "Widowed";

// Gender Keys and Values
export const GENDER_MALE_VALUE = "male";
export const GENDER_MALE_LABEL = "Male";
export const GENDER_FEMALE_VALUE = "female";
export const GENDER_FEMALE_LABEL = "Female";
export const GENDER_OTHERS_VALUE = "others";
export const GENDER_OTHERS_LABEL = "Others";

// Smoker Status values and labels
export const SMOKER_YES_VALUE = "yes";
export const SMOKER_YES_LABEL = "Yes";
export const SMOKER_NO_VALUE = "no";
export const SMOKER_NO_LABEL = "No";

// Salutation values and labels
export const SALUTATION_MR_VALUE = "mr";
export const SALUTATION_MR_LABEL = "Mr";
export const SALUTATION_MRS_VALUE = "mrs";
export const SALUTATION_MRS_LABEL = "Mrs";
export const SALUTATION_MDM_VALUE = "mdm";
export const SALUTATION_MDM_LABEL = "Mdm";
export const SALUTATION_MS_VALUE = "ms";
export const SALUTATION_MS_LABEL = "Ms";
export const SALUTATION_DR_VALUE = "dr";
export const SALUTATION_DR_LABEL = "Dr";

// Policy fund risk levels
export const POLICY_ILP_FUND_RISK_HIGH_KEY = "high";
export const POLICY_ILP_FUND_RISK_BALANCED_KEY = "balanced";
export const POLICY_ILP_FUND_RISK_LOW_KEY = "low";
export const POLICY_ILP_FUND_RISK_HIGH_LABEL = "High";
export const POLICY_ILP_FUND_RISK_BALANCED_LABEL = "Balanced";
export const POLICY_ILP_FUND_RISK_LOW_LABEL = "Low";

// Hospital Ward Types
export const POLICY_HOSP_WARD_TYPE_PRIVATE_VALUE = "private";
export const POLICY_HOSP_WARD_TYPE_PRIVATE_LABEL = "Private Hospital";
export const POLICY_HOSP_WARD_TYPE_PUBLIC_A_VALUE = "publicA";
export const POLICY_HOSP_WARD_TYPE_PUBLIC_A_LABEL = "Public A Ward";
export const POLICY_HOSP_WARD_TYPE_PUBLIC_B1_VALUE = "publicB1";
export const POLICY_HOSP_WARD_TYPE_PUBLIC_B1_LABEL = "Public B1 Ward";

export const POLICY_HOSP_RIDER_TYPE_NO_VALUE = "noRider";
export const POLICY_HOSP_RIDER_TYPE_NO_LABEL = "No Rider";
export const POLICY_HOSP_RIDER_TYPE_FULL_VALUE = "full";
export const POLICY_HOSP_RIDER_TYPE_FULL_LABEL = "Full";
export const POLICY_HOSP_RIDER_TYPE_PARTIAL_VALUE = "partial";
export const POLICY_HOSP_RIDER_TYPE_PARTIAL_LABEL = "Partial";

// Validation values
export const MIN_POLICY_NAME_LENGTH = 2;
export const MAX_POLICY_NAME_LENGTH = 70;
export const MIN_POLICY_NUM_LENGTH = 3;
export const MAX_POLICY_NUM_LENGTH = 70;
export const MIN_PREMIUM_TERM = 0;
export const MAX_PREMIUM_TERM = 200;
export const MIN_POLICY_TERM = 0;
export const MAX_POLICY_TERM = 200;
export const MIN_SUM_ASSURED = 0;
export const MAX_SUM_ASSURED = 99999999999;
export const MIN_CLIENT_NAME_LENGTH = 2;
export const MAX_CLIENT_NAME_LENGTH = 70;
export const MAX_ANNUAL_INCOME = 99999999999;
export const MAX_CLIENT_REMARKS_LENGTH = 1000;
export const MAX_ADDRESS_LENGTH = 1000;

// Form error messages
export const MIN_CHAR_MSG_PLACEHOLDER = "CHAR";
export const MIN_CHAR_MSG = "This field should have at least CHAR characters";
export const MAX_CHAR_MSG_PLACEHOLDER = "CHAR";
export const MAX_CHAR_MSG = "This field should have at most CHAR characters";
export const REQUIRED_MSG_PLACEHOLDER = "KEY";
export const FUTURE_DATE_ERR_MSG = "This cannot be a date in the future";
export const REQUIRED_MSG = "Please provide a KEY";
export const REQUIRED_MSG_SPECIAL = "Please provide an KEY";
export const INVALID_EMAIL_MSG = "Please provide a valid email";
export const NON_NEG_MSG = "This value cannot be less than 0";
export const ALPHA_ONLY_MSG = "Only alphabets are allowed";
export const MAX_VALUE_MSG = "This value cannot exceed MAX_VALUE";
export const MAX_VALUE_MSG_PLACEHOLDER = "MAX_VALUE";
export const CONSENT_REQUIRE_MSG =
  "Please confirm that consent has been obtained from client";

export const sidebarItems = [
  {
    label: SIDEBAR_CLIENTS_LABEL,
    value: SIDEBAR_CLIENTS_VALUE,
    icon: <PeopleAltIcon color="primary" />,
  },
  {
    label: SIDEBAR_PORTFOLIO_LABEL,
    value: SIDEBAR_PORTFOLIO_VALUE,
    icon: <ListAltIcon color="primary" />,
  },
  {
    label: SIDEBAR_SETTINGS_LABEL,
    value: SIDEBAR_SETTINGS_VALUE,
    icon: <SettingsIcon color="primary" />,
  },
  {
    label: SIDEBAR_PROFILE_LABEL,
    value: SIDEBAR_PROFILE_VALUE,
    icon: <AccountCircleIcon color="primary" />,
  },
];

export const insurerLabels = {
  [INSURER_AIA_KEY]: INSURER_AIA_LABEL,
  [INSURER_PRU_KEY]: INSURER_PRU_LABEL,
  [INSURER_GREAT_EASTERN_KEY]: INSURER_GREAT_EASTERN_LABEL,
};

export const clientCardFields = [
  {
    label: CLIENT_OCCUPATION_LABEL,
    key: CLIENT_OCCUPATION_KEY,
  },
  {
    label: CLIENT_AGE_LABEL,
    key: CLIENT_AGE_KEY,
    type: FIELD_TYPE_INTEGER,
  },
  {
    label: CLIENT_ANNUAL_INCOME_LABEL,
    key: CLIENT_ANNUAL_INCOME_KEY,
    type: FIELD_TYPE_CURRENCY,
  },
  {
    label: CLIENT_MOBILE_LABEL,
    key: CLIENT_MOBILE_KEY,
  },
];

export const clientDetailsContactFields = [
  {
    label: CLIENT_MOBILE_LABEL,
    key: CLIENT_MOBILE_KEY,
    icon: <PhoneIcon />,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: CLIENT_EMAIL_LABEL,
    key: CLIENT_EMAIL_KEY,
    icon: <EmailIcon />,
    type: FIELD_TYPE_TEXT,
  },
];

export const clientDetailsAboutFields = [
  {
    label: CLIENT_GENDER_LABEL,
    key: CLIENT_GENDER_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: CLIENT_MARITAL_STATUS_LABEL,
    key: CLIENT_MARITAL_STATUS_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: CLIENT_BIRTHDAY_LABEL,
    key: CLIENT_BIRTHDAY_KEY,
    type: FIELD_TYPE_DATE,
  },
  {
    label: CLIENT_AGE_LABEL,
    key: CLIENT_AGE_KEY,
    type: FIELD_TYPE_INTEGER,
  },
  {
    label: CLIENT_SMOKER_LABEL,
    key: CLIENT_SMOKER_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: CLIENT_OCCUPATION_LABEL,
    key: CLIENT_OCCUPATION_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
];

export const clientDetailsFinancialOverviewFields = [
  {
    label: CLIENT_FINANCIAL_OVERVIEW_DEATH_LABEL,
    key: CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <PersonOffIcon />,
  },
  {
    label: CLIENT_FINANCIAL_OVERVIEW_TPD_LABEL,
    key: CLIENT_FINANCIAL_OVERVIEW_TPD_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <AccessibleForwardIcon />,
  },
  {
    label: CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_LABEL,
    key: CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <HotelIcon />,
  },
  {
    label: CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_LABEL,
    key: CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <HotelIcon />,
  },

  {
    label: CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_LABEL,
    key: CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <AccidentIcon />,
  },
  // {
  //   label: CLIENT_FINANCIAL_OVERVIEW_ACC_MED_LABEL,
  //   key: CLIENT_FINANCIAL_OVERVIEW_ACC_MED_KEY,
  //   type: FIELD_TYPE_CURRENCY,
  //   icon: <LocalHospitalIcon />,
  // },
];

export const clientDetailsCards = [
  { Component: NameCard, col: { xs: 12, lg: 6 } },
  { Component: ContactCard, col: { xs: 12, lg: 6 } },
  { Component: AboutCard, col: { xs: 12, lg: 6 } },
  { Component: DependantsCard, col: { xs: 12, lg: 6 } },
  { Component: CoverageCard, col: { xs: 12 } },
  { Component: Divider, col: { xs: 12 }, variant: "middle" },
  { Component: PolicyCards, col: { xs: 12 } },
];

export const policyCardFields = [
  {
    label: POLICY_NUMBER_LABEL,
    key: POLICY_NUMBER_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: POLICY_CATEGORY_LABEL,
    key: POLICY_CATEGORY_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: POLICY_PREMIUM_LABEL,
    key: POLICY_PREMIUM_KEY,
    type: FIELD_TYPE_CURRENCY,
  },
  {
    label: POLICY_PREMIUM_MODE_LABEL,
    key: POLICY_PREMIUM_MODE_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
];

export const coverageInfoPopoverContent = {
  [CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY]: [
    {
      qns: "How much Death Coverage does the client need?",
      ans: "A quick rule of thumb for measuring death coverage is to multiply the client’s current annual income by a factor between 10 and 15.",
    },
  ],
  [CLIENT_FINANCIAL_OVERVIEW_TPD_KEY]: [
    {
      qns: "How much TPD Coverage does the client need?",
      ans: "A quick guide to calculate Total Permanent Disability coverage is to multiply your current annual income by a factor between 10 and 15.",
    },
  ],
  [CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY]: [
    {
      qns: "How much Major Critical Illness Coverage does the client need?",
      ans: "A quick rule of thumb for measuring Critical Illness coverage is to multiply 70% of your current annual income by 5 years, assuming a recovery period of 5 years.",
    },
  ],
  [CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY]: [
    {
      qns: "How much Early Critical Illness Coverage does the client need?",
      ans: "A quick rule of thumb for measuring Early Critical Illness coverage is to multiply your current annual income by a factor between 1 or 2.",
    },
  ],
  [CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY]: [
    {
      qns: "How much Accidental Death Coverage does the client need?",
      ans: "Accidental Death coverage is usually planned according to the client’s family’s needs, taking into consideration any current debts and future plans, such as overseas tertiary education for your children.",
    },
  ],
  [CLIENT_FINANCIAL_OVERVIEW_ACC_MED_KEY]: [
    { qns: "Why do you need accMed1", ans: "because thats why" },
    { qns: "Why do you need accMed2", ans: "because thats why" },
    { qns: "Why do you need accMed3", ans: "because thats why" },
  ],
};

export const newClientDefaultValues = {
  [CLIENT_ADDRESS_KEY]: "",
  [CLIENT_AGREED_KEY]: false,
  [CLIENT_ANNUAL_INCOME_KEY]: "",
  [CLIENT_BIRTHDAY_KEY]: new Date("1 Jan 2000"),
  [CLIENT_EMAIL_KEY]: "",
  [CLIENT_GENDER_KEY]: GENDER_MALE_VALUE,
  [CLIENT_MARITAL_STATUS_KEY]: MARITAL_STATUS_SINGLE_VALUE,
  [CLIENT_MOBILE_KEY]: "",
  [CLIENT_NAME_KEY]: "",
  [CLIENT_NATIONALITY_KEY]: "Singapore",
  [CLIENT_OCCUPATION_KEY]: "",
  [CLIENT_REMARKS_KEY]: "",
  [CLIENT_SALUTATION_KEY]: SALUTATION_MR_VALUE,
  [CLIENT_SMOKER_KEY]: SMOKER_NO_VALUE,
};

export const allInsuranceCompanies = [
  { label: INSURER_AIA_LABEL, value: INSURER_AIA_KEY },
  { label: INSURER_AVIVA_LABEL, value: INSURER_AVIVA_KEY },
  { label: INSURER_AXA_LABEL, value: INSURER_AXA_KEY },
  { label: INSURER_ALLIANZ_LABEL, value: INSURER_ALLIANZ_KEY },
  { label: INSURER_CHINA_LIFE_LABEL, value: INSURER_CHINA_LIFE_KEY },
  { label: INSURER_CHINA_TAIPING_LABEL, value: INSURER_CHINA_TAIPING_KEY },
  { label: INSURER_ETIQA_LABEL, value: INSURER_ETIQA_KEY },
  { label: INSURER_FWD_LABEL, value: INSURER_FWD_KEY },
  { label: INSURER_GREAT_EASTERN_LABEL, value: INSURER_GREAT_EASTERN_KEY },
  { label: INSURER_HSBC_LABEL, value: INSURER_HSBC_KEY },
  { label: INSURER_MANULIFE_LABEL, value: INSURER_MANULIFE_KEY },
  { label: INSURER_NTUC_LABEL, value: INSURER_NTUC_KEY },
  { label: INSURER_PRU_LABEL, value: INSURER_PRU_KEY },
  { label: INSURER_RAFFLES_LABEL, value: INSURER_RAFFLES_KEY },
  { label: INSURER_SING_LIFE_LABEL, value: INSURER_SING_LIFE_KEY },
  { label: INSURER_TOKIO_MARINE_LABEL, value: INSURER_TOKIO_MARINE_KEY },
  { label: INSURER_ZURICH_LABEL, value: INSURER_ZURICH_KEY },
];

export const addClientFormFields = [
  {
    name: CLIENT_NAME_KEY,
    label: CLIENT_NAME_LABEL,
    type: INPUT_TYPE_TEXT,
    col: { xs: 12, md: 6 },
    placeholder: "John Doe",
    rules: {
      required: {
        value: true,
        message: REQUIRED_MSG.replace(REQUIRED_MSG_PLACEHOLDER, "name"),
      },
      minLength: {
        value: MIN_CLIENT_NAME_LENGTH,
        message: MIN_CHAR_MSG.replace(
          MIN_CHAR_MSG_PLACEHOLDER,
          MIN_CLIENT_NAME_LENGTH
        ),
      },
      maxLength: {
        value: MAX_CLIENT_NAME_LENGTH,
        message: MAX_CHAR_MSG.replace(
          MAX_CHAR_MSG_PLACEHOLDER,
          MAX_CLIENT_NAME_LENGTH
        ),
      },
    },
  },
  {
    name: CLIENT_EMAIL_KEY,
    label: CLIENT_EMAIL_LABEL,
    placeholder: "johndoe@gmail.com",
    type: INPUT_TYPE_TEXT,
    rules: {
      required: {
        value: true,
        message: REQUIRED_MSG_SPECIAL.replace(
          REQUIRED_MSG_PLACEHOLDER,
          "email"
        ),
      },
      pattern: {
        value:
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        message: INVALID_EMAIL_MSG,
      },
    },
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_SALUTATION_KEY,
    label: CLIENT_SALUTATION_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      { label: SALUTATION_MR_LABEL, value: SALUTATION_MR_VALUE },
      { label: SALUTATION_MS_LABEL, value: SALUTATION_MS_VALUE },
      { label: SALUTATION_MRS_LABEL, value: SALUTATION_MRS_VALUE },
      { label: SALUTATION_MDM_LABEL, value: SALUTATION_MDM_VALUE },
      { label: SALUTATION_DR_LABEL, value: SALUTATION_DR_VALUE },
    ],
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_GENDER_KEY,
    label: CLIENT_GENDER_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      { label: GENDER_MALE_LABEL, value: GENDER_MALE_VALUE },
      { label: GENDER_FEMALE_LABEL, value: GENDER_FEMALE_VALUE },
      { label: GENDER_OTHERS_LABEL, value: GENDER_OTHERS_VALUE },
    ],
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_MOBILE_KEY,
    label: CLIENT_MOBILE_LABEL,
    placeholder: "9123 4567",
    type: INPUT_TYPE_PHONE,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_MARITAL_STATUS_KEY,
    label: CLIENT_MARITAL_STATUS_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      {
        label: MARITAL_STATUS_SINGLE_LABEL,
        value: MARITAL_STATUS_SINGLE_VALUE,
      },
      {
        label: MARITAL_STATUS_MARRIED_LABEL,
        value: MARITAL_STATUS_MARRIED_VALUE,
      },
      {
        label: MARITAL_STATUS_DIVORCED_LABEL,
        value: MARITAL_STATUS_DIVORCED_VALUE,
      },
      {
        label: MARITAL_STATUS_SEPARATED_LABEL,
        value: MARITAL_STATUS_SEPARATED_VALUE,
      },
      {
        label: MARITAL_STATUS_WIDOWED_LABEL,
        value: MARITAL_STATUS_WIDOWED_VALUE,
      },
    ],
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_NATIONALITY_KEY,
    label: CLIENT_NATIONALITY_LABEL,
    placeholder: "Singapore",
    type: INPUT_TYPE_AUTOCOMPLETE,
    options: countryList().getLabels(),
    rules: {
      required: {
        value: true,
        message: REQUIRED_MSG.replace(REQUIRED_MSG_PLACEHOLDER, "nationality"),
      },
    },
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_SMOKER_KEY,
    label: CLIENT_SMOKER_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      { label: SMOKER_NO_LABEL, value: SMOKER_NO_VALUE },
      { label: SMOKER_YES_LABEL, value: SMOKER_YES_VALUE },
    ],
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_BIRTHDAY_KEY,
    label: CLIENT_BIRTHDAY_LABEL,
    minDate: new Date("1 Jan 1900"),
    maxDate: new Date(),
    type: INPUT_TYPE_DATEPICKER,
    rules: {
      validate: (value) => !isAfter(value, new Date()) || FUTURE_DATE_ERR_MSG,
    },
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_OCCUPATION_KEY,
    label: CLIENT_OCCUPATION_LABEL,
    placeholder: "Occupation",
    type: INPUT_TYPE_TEXT,
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_ANNUAL_INCOME_KEY,
    label: CLIENT_ANNUAL_INCOME_LABEL,
    rules: {
      min: {
        value: 0,
        message: NON_NEG_MSG,
      },
      max: {
        value: MAX_ANNUAL_INCOME,
        message: MAX_VALUE_MSG.replace(
          MAX_VALUE_MSG_PLACEHOLDER,
          MAX_ANNUAL_INCOME
        ),
      },
    },
    placeholder: "1,000,000",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
    },
  },
  {
    name: CLIENT_ADDRESS_KEY,
    label: CLIENT_ADDRESS_LABEL,
    type: INPUT_TYPE_TEXT,
    multiline: true,
    col: {
      xs: 12,
    },
    maxLength: {
      value: MAX_ADDRESS_LENGTH,
      message: MAX_CHAR_MSG.replace(
        MAX_CHAR_MSG_PLACEHOLDER,
        MAX_ADDRESS_LENGTH
      ),
    },
  },
  {
    name: CLIENT_REMARKS_KEY,
    label: CLIENT_REMARKS_LABEL,
    type: INPUT_TYPE_TEXT,
    multiline: true,
    col: {
      xs: 12,
    },
    maxLength: {
      value: MAX_CLIENT_REMARKS_LENGTH,
      message: MAX_CHAR_MSG.replace(
        MAX_CHAR_MSG_PLACEHOLDER,
        MAX_CLIENT_REMARKS_LENGTH
      ),
    },
  },
  {
    name: CLIENT_AGREED_KEY,
    label: CLIENT_AGREED_LABEL,
    type: INPUT_TYPE_CHECKBOX,
    col: {
      xs: 12,
    },
    required: {
      value: true,
      message: CONSENT_REQUIRE_MSG,
    },
  },
];

export const addPolicyFormFields = {
  [POLICY_CATEGORY_KEY]: {
    name: POLICY_CATEGORY_KEY,
    label: POLICY_CATEGORY_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      {
        label: POLICY_CATEGORY_WHOLE_LIFE_LABEL,
        value: POLICY_CATEGORY_WHOLE_LIFE_KEY,
      },
      {
        label: POLICY_CATEGORY_TERM_LIFE_LABEL,
        value: POLICY_CATEGORY_TERM_LIFE_KEY,
      },
      {
        label: POLICY_CATEGORY_ILP_LABEL,
        value: POLICY_CATEGORY_ILP_KEY,
      },
      {
        label: POLICY_CATEGORY_ENDOWMENT_LABEL,
        value: POLICY_CATEGORY_ENDOWMENT_KEY,
      },
      {
        label: POLICY_CATEGORY_ACCIDENT_LABEL,
        value: POLICY_CATEGORY_ACCIDENT_KEY,
      },
      {
        label: POLICY_CATEGORY_ISP_LABEL,
        value: POLICY_CATEGORY_ISP_KEY,
      },
    ],
    col: {
      xs: 12,
      md: 6,
    },
  },
  [POLICY_NAME_KEY]: {
    name: POLICY_NAME_KEY,
    label: POLICY_NAME_LABEL,
    type: INPUT_TYPE_TEXT,
    placeholder: POLICY_NAME_LABEL,
    rules: {
      required: {
        value: true,
        message: REQUIRED_MSG.replace(REQUIRED_MSG_PLACEHOLDER, "policy name"),
      },
      minLength: {
        value: MIN_POLICY_NAME_LENGTH,
        message: MIN_CHAR_MSG.replace(
          MIN_CHAR_MSG_PLACEHOLDER,
          MIN_POLICY_NAME_LENGTH
        ),
      },
      maxLength: {
        value: MAX_POLICY_NAME_LENGTH,
        message: MAX_CHAR_MSG.replace(
          MAX_CHAR_MSG_PLACEHOLDER,
          MAX_POLICY_NAME_LENGTH
        ),
      },
    },
    col: {
      xs: 12,
      md: 6,
    },
  },
  [POLICY_NUMBER_KEY]: {
    name: POLICY_NUMBER_KEY,
    label: POLICY_NUMBER_LABEL,
    type: INPUT_TYPE_TEXT,
    required: {
      value: true,
      message: REQUIRED_MSG.replace(REQUIRED_MSG_PLACEHOLDER, "policy number"),
    },
    minLength: {
      value: MIN_POLICY_NUM_LENGTH,
      message: MIN_CHAR_MSG.replace(
        MIN_CHAR_MSG_PLACEHOLDER,
        MIN_POLICY_NUM_LENGTH
      ),
    },
    maxLength: {
      value: MAX_POLICY_NUM_LENGTH,
      message: MAX_CHAR_MSG.replace(
        MAX_CHAR_MSG_PLACEHOLDER,
        MAX_POLICY_NUM_LENGTH
      ),
    },
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_INSURER_KEY]: {
    name: POLICY_INSURER_KEY,
    label: POLICY_INSURER_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_SELECT,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
    options: allInsuranceCompanies,
  },
  [POLICY_PREMIUM_MODE_KEY]: {
    name: POLICY_PREMIUM_MODE_KEY,
    label: POLICY_PREMIUM_MODE_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_SELECT,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
    options: [
      { label: PREMIUM_MODE_ANNUALLY_LABEL, value: PREMIUM_MODE_ANNUALLY_KEY },
      { label: PREMIUM_MODE_MONTHLY_LABEL, value: PREMIUM_MODE_MONTHLY_KEY },
      {
        label: PREMIUM_MODE_QUARTERLY_LABEL,
        value: PREMIUM_MODE_QUARTERLY_KEY,
      },
      {
        label: PREMIUM_MODE_SEMI_ANNUALLY_LABEL,
        value: PREMIUM_MODE_SEMI_ANNUALLY_KEY,
      },
    ],
  },
  [POLICY_PREMIUM_KEY]: {
    name: POLICY_PREMIUM_KEY,
    label: POLICY_PREMIUM_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_DEATH_BENEFIT_KEY]: {
    name: POLICY_DEATH_BENEFIT_KEY,
    label: POLICY_DEATH_BENEFIT_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_TPD_BENEFIT_KEY]: {
    name: POLICY_TPD_BENEFIT_KEY,
    label: POLICY_TPD_BENEFIT_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_MAJOR_CI_BENEFIT_KEY]: {
    name: POLICY_MAJOR_CI_BENEFIT_KEY,
    label: POLICY_MAJOR_CI_BENEFIT_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_EARLY_CI_BENEFIT_KEY]: {
    name: POLICY_EARLY_CI_BENEFIT_KEY,
    label: POLICY_EARLY_CI_BENEFIT_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_MATURITY_DATE_KEY]: {
    name: POLICY_MATURITY_DATE_KEY,
    label: POLICY_MATURITY_DATE_LABEL,
    defaultValue: new Date(),
    type: INPUT_TYPE_DATEPICKER,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_TERM_KEY]: {
    name: POLICY_TERM_KEY,
    label: POLICY_TERM_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_YEAR,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_PREMIUM_TERM_KEY]: {
    name: POLICY_PREMIUM_TERM_KEY,
    label: POLICY_PREMIUM_TERM_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_YEAR,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_GUARANTEED_MATURITY_BENEFIT_KEY]: {
    name: POLICY_GUARANTEED_MATURITY_BENEFIT_KEY,
    label: POLICY_GUARANTEED_MATURITY_BENEFIT_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_INCEPTION_DATE_KEY]: {
    name: POLICY_INCEPTION_DATE_KEY,
    label: POLICY_INCEPTION_DATE_LABEL,
    defaultValue: new Date(),
    type: INPUT_TYPE_DATEPICKER,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_DEATH_BENEFIT_KEY]: {
    name: POLICY_ACC_DEATH_BENEFIT_KEY,
    label: POLICY_ACC_DEATH_BENEFIT_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_MEDICAL_KEY]: {
    name: POLICY_ACC_MEDICAL_KEY,
    label: POLICY_ACC_MEDICAL_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_DAILY_HOSP_KEY]: {
    name: POLICY_ACC_DAILY_HOSP_KEY,
    label: POLICY_ACC_DAILY_HOSP_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_ALT_MEDICAL_KEY]: {
    name: POLICY_ACC_ALT_MEDICAL_KEY,
    label: POLICY_ACC_ALT_MEDICAL_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_WEEKLY_DIS_KEY]: {
    name: POLICY_ACC_WEEKLY_DIS_KEY,
    label: POLICY_ACC_WEEKLY_DIS_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_TPD_BENEFIT_KEY]: {
    name: POLICY_ACC_TPD_BENEFIT_KEY,
    label: POLICY_ACC_TPD_BENEFIT_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_KEY]: {
    name: POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_KEY,
    label: POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_MOBILITY_AID_KEY]: {
    name: POLICY_ACC_MOBILITY_AID_KEY,
    label: POLICY_ACC_MOBILITY_AID_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ACC_HOME_MOD_KEY]: {
    name: POLICY_ACC_HOME_MOD_KEY,
    label: POLICY_ACC_HOME_MOD_LABEL,
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_ILP_FUND_RISK_KEY]: {
    name: POLICY_ILP_FUND_RISK_KEY,
    label: POLICY_ILP_FUND_RISK_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      {
        label: POLICY_ILP_FUND_RISK_HIGH_LABEL,
        value: POLICY_ILP_FUND_RISK_HIGH_KEY,
      },
      {
        label: POLICY_ILP_FUND_RISK_BALANCED_LABEL,
        value: POLICY_ILP_FUND_RISK_BALANCED_KEY,
      },
      {
        label: POLICY_ILP_FUND_RISK_LOW_LABEL,
        value: POLICY_ILP_FUND_RISK_LOW_KEY,
      },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_HOSP_WARD_TYPE_KEY]: {
    name: POLICY_HOSP_WARD_TYPE_KEY,
    label: POLICY_HOSP_WARD_TYPE_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      {
        label: POLICY_HOSP_WARD_TYPE_PRIVATE_LABEL,
        value: POLICY_HOSP_WARD_TYPE_PRIVATE_VALUE,
      },
      {
        label: POLICY_HOSP_WARD_TYPE_PUBLIC_A_LABEL,
        value: POLICY_HOSP_WARD_TYPE_PUBLIC_A_VALUE,
      },
      {
        label: POLICY_HOSP_WARD_TYPE_PUBLIC_B1_LABEL,
        value: POLICY_HOSP_WARD_TYPE_PUBLIC_B1_VALUE,
      },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_HOSP_RIDER_TYPE_KEY]: {
    name: POLICY_HOSP_RIDER_TYPE_KEY,
    label: POLICY_HOSP_RIDER_TYPE_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      {
        label: POLICY_HOSP_RIDER_TYPE_NO_LABEL,
        value: POLICY_HOSP_RIDER_TYPE_NO_VALUE,
      },
      {
        label: POLICY_HOSP_RIDER_TYPE_FULL_LABEL,
        value: POLICY_HOSP_RIDER_TYPE_FULL_VALUE,
      },
      {
        label: POLICY_HOSP_RIDER_TYPE_PARTIAL_LABEL,
        value: POLICY_HOSP_RIDER_TYPE_PARTIAL_VALUE,
      },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
};

export const defaultPolicyFormValues = {
  [POLICY_NUMBER_KEY]: "",
  [POLICY_NAME_KEY]: "",
  [POLICY_INSURER_KEY]: INSURER_AIA_KEY,
  [POLICY_CATEGORY_KEY]: POLICY_CATEGORY_WHOLE_LIFE_KEY,
  [POLICY_PREMIUM_KEY]: "",
  [POLICY_PREMIUM_MODE_KEY]: PREMIUM_MODE_ANNUALLY_KEY,
  [POLICY_DEATH_BENEFIT_KEY]: "",
  [POLICY_TPD_BENEFIT_KEY]: "",
  [POLICY_MAJOR_CI_BENEFIT_KEY]: "",
  [POLICY_EARLY_CI_BENEFIT_KEY]: "",
  [POLICY_ACC_DEATH_BENEFIT_KEY]: "",
  [POLICY_ACC_TPD_BENEFIT_KEY]: "",
  [POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_KEY]: "",
  [POLICY_ACC_MEDICAL_KEY]: "",
  [POLICY_ACC_ALT_MEDICAL_KEY]: "",
  [POLICY_ACC_DAILY_HOSP_KEY]: "",
  [POLICY_ACC_WEEKLY_DIS_KEY]: "",
  [POLICY_ACC_MOBILITY_AID_KEY]: "",
  [POLICY_ACC_HOME_MOD_KEY]: "",
  [POLICY_ILP_FUND_RISK_KEY]: POLICY_ILP_FUND_RISK_BALANCED_KEY,
  [POLICY_HOSP_WARD_TYPE_KEY]: POLICY_HOSP_WARD_TYPE_PRIVATE_VALUE,
  [POLICY_HOSP_RIDER_TYPE_KEY]: POLICY_HOSP_RIDER_TYPE_FULL_VALUE,
  [POLICY_GUARANTEED_MATURITY_BENEFIT_KEY]: "",
  [POLICY_TERM_KEY]: "",
  [POLICY_PREMIUM_TERM_KEY]: "",
  [POLICY_INCEPTION_DATE_KEY]: new Date(),
  [POLICY_MATURITY_DATE_KEY]: new Date(),
};

export const defaultPolicyFields = [
  POLICY_CATEGORY_KEY,
  POLICY_INSURER_KEY,
  POLICY_NAME_KEY,
  POLICY_NUMBER_KEY,
  POLICY_PREMIUM_KEY,
  POLICY_PREMIUM_MODE_KEY,
  POLICY_PREMIUM_TERM_KEY,
  POLICY_TERM_KEY,
  POLICY_INCEPTION_DATE_KEY,
];

export const defaultLifePolicyFields = [
  ...defaultPolicyFields,
  POLICY_MATURITY_DATE_KEY,
  POLICY_DEATH_BENEFIT_KEY,
  POLICY_TPD_BENEFIT_KEY,
  POLICY_MAJOR_CI_BENEFIT_KEY,
  POLICY_EARLY_CI_BENEFIT_KEY,
];

export const defaultAccPolicyFields = [
  ...defaultPolicyFields,
  POLICY_ACC_DEATH_BENEFIT_KEY,
  POLICY_ACC_TPD_BENEFIT_KEY,
  POLICY_ACC_PARTIAL_DISABILITY_BENEFIT_KEY,
  POLICY_ACC_MEDICAL_KEY,
  POLICY_ACC_ALT_MEDICAL_KEY,
  POLICY_ACC_DAILY_HOSP_KEY,
  POLICY_ACC_WEEKLY_DIS_KEY,
  POLICY_ACC_MOBILITY_AID_KEY,
  POLICY_ACC_HOME_MOD_KEY,
];

export const defaultHospPolicyFields = [
  POLICY_CATEGORY_KEY,
  POLICY_INSURER_KEY,
  POLICY_NAME_KEY,
  POLICY_NUMBER_KEY,
  POLICY_HOSP_WARD_TYPE_KEY,
  POLICY_HOSP_RIDER_TYPE_KEY,
  POLICY_PREMIUM_KEY,
  POLICY_PREMIUM_MODE_KEY,
  POLICY_INCEPTION_DATE_KEY,
];

export const policyCategoryFields = {
  [POLICY_CATEGORY_WHOLE_LIFE_KEY]: [...defaultLifePolicyFields],
  [POLICY_CATEGORY_TERM_LIFE_KEY]: [...defaultLifePolicyFields],
  [POLICY_CATEGORY_ENDOWMENT_KEY]: [
    ...defaultPolicyFields,
    POLICY_DEATH_BENEFIT_KEY,
    POLICY_MATURITY_DATE_KEY,
    POLICY_GUARANTEED_MATURITY_BENEFIT_KEY,
  ],
  [POLICY_CATEGORY_ILP_KEY]: [
    ...defaultLifePolicyFields,
    POLICY_ILP_FUND_RISK_KEY,
  ],
  [POLICY_CATEGORY_ACCIDENT_KEY]: [...defaultAccPolicyFields],
  [POLICY_CATEGORY_ISP_KEY]: [...defaultHospPolicyFields],
};

export const inputTypeMapping = {
  [INPUT_TYPE_TEXT]: TextInput,
  [INPUT_TYPE_RADIO]: RadioInput,
  [INPUT_TYPE_SELECT]: SelectInput,
  [INPUT_TYPE_AUTOCOMPLETE]: AutocompleteInput,
  [INPUT_TYPE_DATEPICKER]: DateInput,
  [INPUT_TYPE_CURRENCY]: CurrencyInput,
  [INPUT_TYPE_YEAR]: YearInput,
  [INPUT_TYPE_CHECKBOX]: CheckboxInput,
  [INPUT_TYPE_PHONE]: PhoneInput,
};

export const policyDetailsAboutCardFields = [
  {
    label: POLICY_NUMBER_LABEL,
    key: POLICY_NUMBER_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: POLICY_NAME_LABEL,
    key: POLICY_NAME_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: POLICY_CATEGORY_LABEL,
    key: POLICY_CATEGORY_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: POLICY_LIFE_ASSURED_LABEL,
    key: POLICY_LIFE_ASSURED_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: POLICY_PREMIUM_LABEL,
    key: POLICY_PREMIUM_KEY,
    type: FIELD_TYPE_CURRENCY,
  },
  {
    label: POLICY_PREMIUM_MODE_LABEL,
    key: POLICY_PREMIUM_MODE_KEY,
    type: FIELD_TYPE_TEXT_CAMELCASE,
  },
  {
    label: POLICY_INSURER_LABEL,
    key: POLICY_INSURER_KEY,
    type: FIELD_TYPE_TEXT_UPPERCASE,
  },
  {
    label: POLICY_INCEPTION_DATE_LABEL,
    key: POLICY_INCEPTION_DATE_KEY,
    type: FIELD_TYPE_DATE,
  },
  {
    label: POLICY_TERM_LABEL,
    key: POLICY_TERM_KEY,
    type: FIELD_TYPE_INTEGER,
  },
  {
    label: POLICY_MATURITY_DATE_LABEL,
    key: POLICY_MATURITY_DATE_KEY,
    type: FIELD_TYPE_DATE,
  },
  {
    label: POLICY_PREMIUM_TERM_LABEL,
    key: POLICY_PREMIUM_TERM_KEY,
    type: FIELD_TYPE_INTEGER,
  },
];

export const policyDetailsCoverageCardFields = [
  {
    label: POLICY_DEATH_BENEFIT_LABEL,
    key: POLICY_DEATH_BENEFIT_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <PersonOffIcon />,
  },
  {
    label: POLICY_TPD_BENEFIT_LABEL,
    key: POLICY_TPD_BENEFIT_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <AccessibleForwardIcon />,
  },
  {
    label: POLICY_MAJOR_CI_BENEFIT_LABEL,
    key: POLICY_MAJOR_CI_BENEFIT_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <HotelIcon />,
  },
  {
    label: POLICY_EARLY_CI_BENEFIT_LABEL,
    key: POLICY_EARLY_CI_BENEFIT_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <HotelIcon />,
  },
];

export const defaultDependantFormValues = {
  [CLIENT_DEPENDANT_NAME_KEY]: "",
  [CLIENT_DEPENDANT_RELATIONSHIP_KEY]: CLIENT_DEPENDANT_SON_VALUE,
};

export const addDependantFormFields = [
  {
    name: CLIENT_DEPENDANT_NAME_KEY,
    label: CLIENT_DEPENDANT_NAME_LABEL,
    type: INPUT_TYPE_TEXT,
    required: {
      value: true,
      message: REQUIRED_MSG.replace(REQUIRED_MSG_PLACEHOLDER, "name"),
    },
    minLength: {
      value: MIN_CLIENT_NAME_LENGTH,
      message: MIN_CHAR_MSG.replace(
        MIN_CHAR_MSG_PLACEHOLDER,
        MIN_CLIENT_NAME_LENGTH
      ),
    },
    maxLength: {
      value: MAX_CLIENT_NAME_LENGTH,
      message: MAX_CHAR_MSG.replace(
        MAX_CHAR_MSG_PLACEHOLDER,
        MAX_CLIENT_NAME_LENGTH
      ),
    },
    pattern: {
      value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
      message: ALPHA_ONLY_MSG,
    },
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_DEPENDANT_RELATIONSHIP_KEY,
    label: CLIENT_DEPENDANT_RELATIONSHIP_LABEL,
    type: INPUT_TYPE_SELECT,
    options: [
      { label: CLIENT_DEPENDANT_SON_LABEL, value: CLIENT_DEPENDANT_SON_VALUE },
      {
        label: CLIENT_DEPENDANT_DAUGHTER_LABEL,
        value: CLIENT_DEPENDANT_DAUGHTER_VALUE,
      },
      {
        label: CLIENT_DEPENDANT_SPOUSE_LABEL,
        value: CLIENT_DEPENDANT_SPOUSE_VALUE,
      },
      {
        label: CLIENT_DEPENDANT_FATHER_LABEL,
        value: CLIENT_DEPENDANT_FATHER_VALUE,
      },
      {
        label: CLIENT_DEPENDANT_MOTHER_LABEL,
        value: CLIENT_DEPENDANT_MOTHER_VALUE,
      },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
];

export const coverageOverviewLegend = [
  { label: "Sufficient coverage", color: "secondary.main" },
  { label: "Insufficient coverage", color: "warning.main" },
  { label: "No coverage", color: "error.main" },
];
