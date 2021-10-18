import { Box, Grid, IconButton, ListItemIcon, Typography } from "@mui/material";

const ClientCardInfoText = ({
  xs = 6,
  label,
  value,
  icon,
  endIcon,
  endIconOnClick,
  ...props
}) => {
  return (
    <Grid item xs={xs} py={2} display="flex" alignItems="center" {...props}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <Box flexGrow={1}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body1">{value}</Typography>
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
