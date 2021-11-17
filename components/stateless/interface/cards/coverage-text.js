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
} from "../../../../data/ui";
import { formatNumber } from "../../../../utils/utils";

const CoverageText = ({
  icon,
  label,
  value,
  color,
  onClick,
  xs = 12,
  sm = 6,
  md = 6,
}) => {
  const Icon = icons[icon];
  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      md={md}
      display="flex"
      alignItems="stretch"
      justifyContent="center"
      p={2}
    >
      <Box mr={3} display="flex" alignItems="center">
        <Icon color={color} />
      </Box>
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        borderRadius={3}
        bgcolor={`${color}.main`}
        color={`${color}.contrastText`}
        p={2}
      >
        <Typography variant="body2">{label}</Typography>
        <Typography variant="body1">${formatNumber(value)}</Typography>
      </Box>
      <Box ml={3} display="flex" alignItems="center">
        <IconButton onClick={onClick}>
          <InfoIcon color="text.secondary" sx={{ cursor: "pointer" }} />
        </IconButton>
      </Box>
    </Grid>
  );
};

const icons = {
  deathBenefit: PersonOffIcon,
  tpdBenefit: AccessibleForwardIcon,
  majorCiBenefit: AccessibleForwardIcon,
  earlyCiBenefit: HotelIcon,
};

export default CoverageText;
