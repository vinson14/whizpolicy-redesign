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

// Dimensions
export const FLOATING_ACTION_BUTTON_WIDTH = 160;

// Sidebar Constants
export const CLIENTS_VALUE = "clients";
export const CLIENTS_LABEL = "Clients";
export const PORTFOLIO_LABEL = "Portfolio";
export const PORTFOLIO_VALUE = "portfolio";
export const SETTINGS_LABEL = "Settings";
export const SETTINGS_VALUE = "settings";
export const PROFILE_LABEL = "Profile";
export const PROFILE_VALUE = "profile";

// Client Object files

// Input Types
export const INPUT_TYPE_TEXT = "text";
export const INPUT_TYPE_RADIO = "radio";
export const INPUT_TYPE_SELECT = "select";
export const INPUT_TYPE_AUTOCOMPLETE = "autocomplete";
export const INPUT_TYPE_DATEPICKER = "datepicker";
export const INPUT_TYPE_CURRENCY = "currencyInput";
export const INPUT_TYPE_YEAR = "yearInput";

// Field Types
export const FIELD_TYPE_TEXT = "text";
export const FIELD_TYPE_CURRENCY = "currency";
export const FIELD_TYPE_INTEGER = "integer";

// Policy Categories
export const POLICY_CATEGORY_WHOLE_LIFE_KEY = "wholeLife";
export const POLICY_CATEGORY_TERM_LIFE_KEY = "termLife";
export const POLICY_CATEGORY_ENDOWMENT_KEY = "endowment";

// Policy Categories Labels
export const POLICY_CATEGORY_WHOLE_LIFE_LABEL = "Whole Life";
export const POLICY_CATEGORY_TERM_LIFE_LABEL = "Term Life";
export const POLICY_CATEGORY_ENDOWMENT_LABEL = "Endowment";

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
export const POLICY_MAJOR_CI_BENEFIT_LABEL = "Major Critical Illness";
export const POLICY_EARLY_CI_BENEFIT_LABEL = "Early Critical Illness";
export const POLICY_MATURITY_DATE_LABEL = "Maturity Date";
export const POLICY_TERM_LABEL = "Policy Term";
export const POLICY_PREMIUM_TERM_LABEL = "Premium Term";
export const POLICY_GUARANTEED_MATURITY_BENEFIT_LABEL =
  "Guaranteed Maturity Benefit";
export const POLICY_INCEPTION_DATE_LABEL = "Inception Date";

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

// Client financial overview keys and labels
export const CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY = "death";
export const CLIENT_FINANCIAL_OVERVIEW_TPD_KEY = "tpd";
export const CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY = "majorCi";
export const CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY = "earlyCi";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY = "accidentalDeath";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_MED_KEY = "accidentalMedical";
export const CLIENT_FINANCIAL_OVERVIEW_DEATH_LABEL = "Death";
export const CLIENT_FINANCIAL_OVERVIEW_TPD_LABEL = "Total Permanent Disability";
export const CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_LABEL =
  "Major Critical Illness";
export const CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_LABEL =
  "Early Critical Illness";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_LABEL = "Accidental Death";
export const CLIENT_FINANCIAL_OVERVIEW_ACC_MED_LABEL =
  "Accidental Medical Reimbursement";

// Insurer Keys and Labels
export const INSURER_AIA_KEY = "aia";
export const INSURER_AIA_LABEL = "AIA";
export const INSURER_PRU_KEY = "prudential";
export const INSURER_PRU_LABEL = "Prudential";
export const INSURER_GREAT_EASTERN_KEY = "greatEastern";
export const INSURER_GREAT_EASTERN_LABEL = "Great Eastern";
export const INSURER_NTUC_KEY = "ntucIncome";
export const INSURER_NTUC_LABEL = "NTUC Income";

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
export const MARITAL_STATUS_SINGLE_KEY = "single";
export const MARITAL_STATUS_MARRIED_KEY = "married";
export const MARITAL_STATUS_DIVORCED_KEY = "divorced";
export const MARITAL_STATUS_SEPARATED_KEY = "separated";
export const MARITAL_STATUS_WIDOWED_KEY = "widowed";
export const MARITAL_STATUS_SINGLE_LABEL = "Single";
export const MARITAL_STATUS_MARRIED_LABEL = "Married";
export const MARITAL_STATUS_DIVORCED_LABEL = "Divorced";
export const MARITAL_STATUS_SEPARATED_LABEL = "Separated";
export const MARITAL_STATUS_WIDOWED_LABEL = "Widowed";

export const sidebarItems = [
  {
    label: CLIENTS_LABEL,
    value: CLIENTS_VALUE,
    icon: <PeopleAltIcon />,
  },
  {
    label: PORTFOLIO_LABEL,
    value: PORTFOLIO_VALUE,
    icon: <ListAltIcon />,
  },
  {
    label: SETTINGS_LABEL,
    value: SETTINGS_VALUE,
    icon: <SettingsIcon />,
  },
  {
    label: PROFILE_LABEL,
    value: PROFILE_VALUE,
    icon: <AccountCircleIcon />,
  },
];

export const insurerLabels = {
  [INSURER_AIA_KEY]: INSURER_AIA_LABEL,
  [INSURER_PRU_KEY]: INSURER_PRU_LABEL,
  [INSURER_GREAT_EASTERN_KEY]: INSURER_GREAT_EASTERN_LABEL,
};

export const defaultDashboardClientBreadcrumbs = [
  { label: "Dashboard", route: "/dashboard" },
  { label: "Clients", route: "/dashboard" },
];

export const defaultDashboardPortfolioBreadcrumbs = [
  { label: "Dashboard", route: "/dashboard" },
  { label: "Portfolio", route: "/dashboard" },
];

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
  },
  {
    label: CLIENT_EMAIL_LABEL,
    key: CLIENT_EMAIL_KEY,
    icon: <EmailIcon />,
  },
];

export const clientDetailsAboutFields = [
  {
    label: CLIENT_GENDER_LABEL,
    key: CLIENT_GENDER_KEY,
  },
  {
    label: CLIENT_BIRTHDAY_LABEL,
    key: CLIENT_BIRTHDAY_KEY,
  },
  {
    label: CLIENT_MARITAL_STATUS_LABEL,
    key: CLIENT_MARITAL_STATUS_KEY,
  },
  {
    label: CLIENT_SMOKER_LABEL,
    key: CLIENT_SMOKER_KEY,
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
    icon: <PersonOffIcon />,
  },
  {
    label: CLIENT_FINANCIAL_OVERVIEW_ACC_MED_LABEL,
    key: CLIENT_FINANCIAL_OVERVIEW_ACC_MED_KEY,
    type: FIELD_TYPE_CURRENCY,
    icon: <LocalHospitalIcon />,
  },
];

export const clientDetailsCards = [
  NameCard,
  ContactCard,
  AboutCard,
  DependantsCard,
  CoverageCard,
];

export const policyCardFields = [
  { label: POLICY_NUMBER_LABEL, key: POLICY_NUMBER_KEY, type: FIELD_TYPE_TEXT },
  {
    label: POLICY_CATEGORY_LABEL,
    key: POLICY_CATEGORY_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_PREMIUM_LABEL,
    key: POLICY_PREMIUM_KEY,
    type: FIELD_TYPE_CURRENCY,
  },
  {
    label: POLICY_PREMIUM_MODE_LABEL,
    key: POLICY_PREMIUM_MODE_KEY,
    type: FIELD_TYPE_TEXT,
  },
];

export const coverageInfoPopoverContent = {
  death: [
    {
      qns: "How much Death Coverage does the client need?",
      ans: "A quick rule of thumb for measuring death coverage is to multiply the client’s current annual income by a factor between 10 and 15.",
    },
  ],
  tpd: [
    {
      qns: "How much TPD Coverage does the client need?",
      ans: "A quick guide to calculate Total Permanent Disability coverage is to multiply your current annual income by a factor between 10 and 15.",
    },
  ],
  majorCi: [
    {
      qns: "How much Major Critical Illness Coverage does the client need?",
      ans: "A quick rule of thumb for measuring Critical Illness coverage is to multiply 70% of your current annual income by 5 years, assuming a recovery period of 5 years.",
    },
  ],
  earlyCi: [
    {
      qns: "How much Early Critical Illness Coverage does the client need?",
      ans: "A quick rule of thumb for measuring Early Critical Illness coverage is to multiply your current annual income by a factor between 1 or 2.",
    },
  ],
  accidentalDeath: [
    { qns: "Why do you need accDeath1", ans: "because thats why" },
    { qns: "Why do you need accdaeth2", ans: "because thats why" },
    { qns: "Why do you need accdeath3", ans: "because thats why" },
  ],
  accidentalMedical: [
    { qns: "Why do you need accMed1", ans: "because thats why" },
    { qns: "Why do you need accMed2", ans: "because thats why" },
    { qns: "Why do you need accMed3", ans: "because thats why" },
  ],
};

export const addClientFormFields = [
  {
    name: CLIENT_NAME_KEY,
    label: CLIENT_NAME_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_TEXT,
    placeholder: "John Doe",
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_SALUTATION_KEY,
    label: CLIENT_SALUTATION_LABEL,
    defaultValue: "mr",
    type: INPUT_TYPE_SELECT,
    options: [
      { label: "Mr", value: "mr" },
      { label: "Ms", value: "ms" },
      { label: "Mrs", value: "mrs" },
      { label: "Dr", value: "dr" },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_GENDER_KEY,
    label: CLIENT_GENDER_LABEL,
    defaultValue: "male",
    type: INPUT_TYPE_SELECT,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Others", value: "Others" },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_EMAIL_KEY,
    label: CLIENT_EMAIL_LABEL,
    defaultValue: "",
    placeholder: "johndoe@gmail.com",
    type: INPUT_TYPE_TEXT,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_MOBILE_KEY,
    label: CLIENT_MOBILE_LABEL,
    defaultValue: "",
    placeholder: "+65",
    type: INPUT_TYPE_TEXT,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_MARITAL_STATUS_KEY,
    label: CLIENT_MARITAL_STATUS_KEY,
    defaultValue: MARITAL_STATUS_SINGLE_KEY,
    type: INPUT_TYPE_SELECT,
    options: [
      { label: MARITAL_STATUS_SINGLE_LABEL, value: MARITAL_STATUS_SINGLE_KEY },
      {
        label: MARITAL_STATUS_MARRIED_LABEL,
        value: MARITAL_STATUS_MARRIED_KEY,
      },
      {
        label: MARITAL_STATUS_DIVORCED_LABEL,
        value: MARITAL_STATUS_DIVORCED_KEY,
      },
      {
        label: MARITAL_STATUS_SEPARATED_LABEL,
        value: MARITAL_STATUS_SEPARATED_KEY,
      },
      {
        label: MARITAL_STATUS_WIDOWED_LABEL,
        value: MARITAL_STATUS_WIDOWED_KEY,
      },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_NATIONALITY_KEY,
    label: CLIENT_NATIONALITY_LABEL,
    defaultValue: "Singapore",
    placeholder: "Singapore",
    type: INPUT_TYPE_AUTOCOMPLETE,
    options: countryList().getLabels(),
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_SMOKER_KEY,
    label: CLIENT_SMOKER_LABEL,
    defaultValue: "no",
    type: INPUT_TYPE_SELECT,
    options: [
      { label: "No", value: "no" },
      { label: "Yes", value: "yes" },
    ],
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  {
    name: CLIENT_BIRTHDAY_KEY,
    label: CLIENT_BIRTHDAY_LABEL,
    defaultValue: new Date("Jan 01, 2000"),
    type: INPUT_TYPE_DATEPICKER,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
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
      lg: 5,
    },
  },
  {
    name: CLIENT_ANNUAL_INCOME_KEY,
    label: CLIENT_ANNUAL_INCOME_LABEL,
    defaultValue: "",
    placeholder: "1,000,000",
    startAdornment: "$",
    type: INPUT_TYPE_CURRENCY,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
];

export const addPolicyFormFields = {
  [POLICY_NAME_KEY]: {
    name: POLICY_NAME_KEY,
    label: POLICY_NAME_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_TEXT,
    placeholder: POLICY_NAME_LABEL,
    col: {
      xs: 12,
      md: 6,
      lg: 5,
    },
  },
  [POLICY_NUMBER_KEY]: {
    name: POLICY_NUMBER_KEY,
    label: POLICY_NUMBER_LABEL,
    defaultValue: "",
    type: INPUT_TYPE_TEXT,
    placeholder: POLICY_NUMBER_LABEL,
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
    options: [
      { label: INSURER_AIA_LABEL, value: INSURER_AIA_KEY },
      { label: INSURER_GREAT_EASTERN_LABEL, value: INSURER_GREAT_EASTERN_KEY },
      { label: INSURER_PRU_LABEL, value: INSURER_PRU_KEY },
      { label: INSURER_NTUC_LABEL, value: INSURER_NTUC_KEY },
    ],
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
};

export const policyCategorySelect = {
  name: POLICY_CATEGORY_KEY,
  label: POLICY_CATEGORY_LABEL,
  defaultValue: POLICY_CATEGORY_WHOLE_LIFE_KEY,
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
      label: POLICY_CATEGORY_ENDOWMENT_LABEL,
      value: POLICY_CATEGORY_ENDOWMENT_KEY,
    },
  ],
  col: {
    xs: 12,
    md: 6,
    lg: 5,
  },
};

export const defaultPolicyFields = [
  POLICY_NAME_KEY,
  POLICY_NUMBER_KEY,
  POLICY_INSURER_KEY,
  POLICY_PREMIUM_KEY,
  POLICY_PREMIUM_MODE_KEY,
  POLICY_PREMIUM_TERM_KEY,
  POLICY_TERM_KEY,
  POLICY_INCEPTION_DATE_KEY,
];

export const defaultLifePolicyFields = [
  ...defaultPolicyFields,
  POLICY_DEATH_BENEFIT_KEY,
  POLICY_TPD_BENEFIT_KEY,
  POLICY_MAJOR_CI_BENEFIT_KEY,
  POLICY_EARLY_CI_BENEFIT_KEY,
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
};

export const inputTypeMapping = {
  [INPUT_TYPE_TEXT]: TextInput,
  [INPUT_TYPE_RADIO]: RadioInput,
  [INPUT_TYPE_SELECT]: SelectInput,
  [INPUT_TYPE_AUTOCOMPLETE]: AutocompleteInput,
  [INPUT_TYPE_DATEPICKER]: DateInput,
  [INPUT_TYPE_CURRENCY]: CurrencyInput,
  [INPUT_TYPE_YEAR]: YearInput,
};

export const policyDetailsAboutCardFields = [
  {
    label: POLICY_NUMBER_LABEL,
    key: POLICY_NUMBER_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_NAME_LABEL,
    key: POLICY_NAME_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_CATEGORY_LABEL,
    key: POLICY_CATEGORY_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_LIFE_ASSURED_LABEL,
    key: POLICY_LIFE_ASSURED_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_PREMIUM_LABEL,
    key: POLICY_PREMIUM_KEY,
    type: FIELD_TYPE_CURRENCY,
  },
  {
    label: POLICY_PREMIUM_MODE_LABEL,
    key: POLICY_PREMIUM_MODE_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_INSURER_LABEL,
    key: POLICY_INSURER_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_INCEPTION_DATE_LABEL,
    key: POLICY_INCEPTION_DATE_KEY,
    type: FIELD_TYPE_TEXT,
  },
  {
    label: POLICY_TERM_LABEL,
    key: POLICY_TERM_KEY,
    type: FIELD_TYPE_INTEGER,
  },
  {
    label: POLICY_MATURITY_DATE_LABEL,
    key: POLICY_MATURITY_DATE_KEY,
    type: FIELD_TYPE_TEXT,
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
