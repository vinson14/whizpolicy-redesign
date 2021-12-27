import {
  CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY,
  CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY,
  CLIENT_FINANCIAL_OVERVIEW_DISABILITY_INCOME_KEY,
  CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY,
  CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY,
  CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY,
  CLIENT_FINANCIAL_OVERVIEW_TPD_KEY,
} from "../../../../data/ui";
import AccidentIcon from "./accident-icon";
import SkullIcon from "./skull-icon";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import HotelIcon from "@mui/icons-material/Hotel";
import PaidIcon from "@mui/icons-material/Paid";

const CoverageIcon = ({ icon, color }) => {
  const mapping = {
    [CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY]: DeathIcon,
    [CLIENT_FINANCIAL_OVERVIEW_TPD_KEY]: DisabledIcon,
    [CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY]: SickIcon,
    [CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY]: SickIcon,
    [CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY]: AccIcon,
    [CLIENT_FINANCIAL_OVERVIEW_DISABILITY_INCOME_KEY]: DisabledIcon,
    [CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY]: EndowmentIcon,
  };

  const Icon = mapping[icon];

  return <Icon color={color} />;
};

export default CoverageIcon;

const DeathIcon = ({ color }) => {
  return <SkullIcon fontSize="large" color={color} />;
};

const AccIcon = ({ color }) => {
  return <AccidentIcon color={color} fontSize="large" />;
};

const DisabledIcon = ({ color }) => {
  return <AccessibleForwardIcon color={color} fontSize="large" />;
};

const SickIcon = ({ color }) => {
  return <HotelIcon color={color} fontSize="large" />;
};

const EndowmentIcon = ({ color }) => {
  return <PaidIcon color={color} fontSize="large" />;
};
