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
// Constants
export const CLIENTS_VALUE = "clients";
export const CLIENTS_LABEL = "Clients";
export const PORTFOLIO_LABEL = "Portfolio";
export const PORTFOLIO_VALUE = "portfolio";
export const SETTINGS_LABEL = "Settings";
export const SETTINGS_VALUE = "settings";
export const PROFILE_LABEL = "Profile";
export const PROFILE_VALUE = "profile";

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

export const clientCardFields = [
  {
    label: "Occupation",
    key: "occupation",
  },
  {
    label: "Age",
    key: "age",
  },
];

export const clientDetailsContactFields = [
  {
    label: "Mobile",
    key: "mobile",
    icon: <PhoneIcon />,
  },
  {
    label: "Email",
    key: "email",
    icon: <EmailIcon />,
  },
];

export const clientDetailsAboutFields = [
  {
    label: "Gender",
    key: "gender",
  },
  {
    label: "Birthday",
    key: "birthday",
  },
  {
    label: "Marital Status",
    key: "maritalStatus",
  },
  {
    label: "Smoker",
    key: "smoker",
  },
];

export const clientDetailsFinancialOverviewFields = [
  {
    label: "Death",
    key: "death",
    icon: <PersonOffIcon />,
  },
  {
    label: "Total Permanent Disability",
    key: "tpd",
    icon: <AccessibleForwardIcon />,
  },
  {
    label: "Major Critical Illness",
    key: "majorCi",
    icon: <HotelIcon />,
  },
  {
    label: "Early Critical Illness",
    key: "earlyCi",
    icon: <HotelIcon />,
  },
  {
    label: "Accidental Death",
    key: "accidentalDeath",
    icon: <PersonOffIcon />,
  },
  {
    label: "Accidental Medical Reimbursement",
    key: "accidentalMedical",
    icon: <LocalHospitalIcon />,
  },
];

export const policyCardFields = [
  { label: "Policy Number", key: "policyNumber" },
  { label: "Premium", key: "premium" },
  { label: "Premium Mode", key: "premiumMode" },
];
