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

const CoverageText = ({ icon, label, value, color, onClick, xs = 12, sm = 8, md = 8, lg = 5 }) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} display="flex" alignItems="stretch" justifyContent="center" p={2}>
      <Box mr={3} display="flex" alignItems="center">
        <CoverageIcon icon={icon} color={color} />
      </Box>
      <Box
        flexGrow={1}
        bgcolor={`${color}.main`}
        borderRadius={3}
        p={2}
        color={`${color}.contrastText`}
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="body2">{label}</Typography>
          <Typography variant="body1">${formatNumber(value)}</Typography>
        </Box>
        <IconButton onClick={onClick}>
          <InfoIcon sx={{ cursor: "pointer", color: (theme) => theme.palette.common.white }} />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default CoverageText;
