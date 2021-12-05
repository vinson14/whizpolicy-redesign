import { Box, Grid, IconButton, ListItemIcon, Typography } from "@mui/material";
import { format } from "date-fns";
import {
  FIELD_TYPE_CURRENCY,
  FIELD_TYPE_DATE,
  FIELD_TYPE_INTEGER,
  FIELD_TYPE_TEXT_CAMELCASE,
  FIELD_TYPE_TEXT_UPPERCASE,
  FIELD_TYPE_TEXT,
} from "../../../../data/ui";
import { formatNumber, formatString } from "../../../../utils/utils";
const ClientCardInfoText = ({
  xs = 12,
  sm = 6,
  label,
  align = "left",
  value,
  icon,
  type = FIELD_TYPE_TEXT_CAMELCASE,
  endIcon,
  endIconOnClick,
  ...props
}) => {
  const formattedValue = () => {
    if (value === "" || value == null) return "NIL";
    if (type === FIELD_TYPE_TEXT) return value;
    if (type === FIELD_TYPE_CURRENCY) return `$${formatNumber(value)}`;
    if (type === FIELD_TYPE_INTEGER) return value;
    if (type === FIELD_TYPE_DATE) return format(new Date(value), "d MMM yyyy");
    if (type === FIELD_TYPE_TEXT_UPPERCASE) return value.toUpperCase();
    if (type === FIELD_TYPE_TEXT_CAMELCASE) {
      return formatString(value);
    }
  };

  return (
    <Grid item xs={xs} sm={sm} py={2} display="flex" alignItems="center" {...props}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <Box flexGrow={1}>
        <Typography variant="body2" color="text.secondary" align={align}>
          {label}
        </Typography>
        <Typography variant="body1" align={align}>
          {formattedValue()}
        </Typography>
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
