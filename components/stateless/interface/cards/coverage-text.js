import { Box, Grid, IconButton, ListItemIcon, Typography } from "@mui/material";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import HotelIcon from "@mui/icons-material/Hotel";
import InfoIcon from "@mui/icons-material/Info";

import {
  CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY,
  CLIENT_FINANCIAL_OVERVIEW_TPD_KEY,
  CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY,
  CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY,
  CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY,
} from "../../../../data/ui";
import { formatNumber } from "../../../../utils/utils";
import AccidentIcon from "../icons/accident-icon";
import SkullIcon from "../icons/skull-icon";
import CoverageIcon from "../icons/coverage-icon";
import CoverageTextContainer from "./coverage-text-container";
import CoverageTextValueContainer from "./coverage-text-value-container";
import CoverageTextIconContainer from "./coverage-text-icon-container";

const CoverageText = ({ icon, label, value, color, onClick }) => {
  return (
    <CoverageTextContainer>
      <CoverageTextIconContainer>
        <CoverageIcon icon={icon} color={color} />
      </CoverageTextIconContainer>
      <CoverageTextValueContainer color={color} onClick={onClick}>
        <Box>
          <Typography variant="body2">{label}</Typography>
          <Typography variant="body1">${formatNumber(value)}</Typography>
        </Box>
        <Box>
          <IconButton onClick={onClick}>
            <InfoIcon sx={{ cursor: "pointer", color: (theme) => theme.palette.common.white }} />
          </IconButton>
        </Box>
      </CoverageTextValueContainer>
    </CoverageTextContainer>
  );
};

export default CoverageText;
