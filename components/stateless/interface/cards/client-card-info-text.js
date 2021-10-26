import { Box, Grid, IconButton, ListItemIcon, Typography } from "@mui/material";
import { FIELD_TYPE_CURRENCY, FIELD_TYPE_TEXT } from "../../../../data/ui";
import { formatNumber } from "../../../../utils/utils";
const ClientCardInfoText = ({
  xs = 6,
  label,
  value,
  icon,
  type = FIELD_TYPE_TEXT,
  endIcon,
  endIconOnClick,
  ...props
}) => {
  const formattedValue = () => {
    if (value == null) return "N.A.";
    if (type === FIELD_TYPE_CURRENCY) return `$${formatNumber(value)}`;
    if (type === FIELD_TYPE_TEXT) {
      const properCase = value.replace(/([A-Z])/g, " $1");
      return properCase.charAt(0).toUpperCase() + properCase.slice(1);
    }
  };

  return (
    <Grid item xs={xs} py={2} display="flex" alignItems="center" {...props}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <Box flexGrow={1}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body1">{formattedValue()}</Typography>
      </Box>
      {endIcon && (
        <ListItemIcon>
          <IconButton onClick={endIconOnClick}>{endIcon}</IconButton>
        </ListItemIcon>
      )}
    </Grid>
  );
};

export default ClientCardInfoText;
