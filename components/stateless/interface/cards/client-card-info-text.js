import { Box, Grid, ListItemIcon, Typography } from "@mui/material";

const ClientCardInfoText = ({ label, value, icon, clickable, ...props }) => {
  const gridSx = {
    ":hover": {
      bgcolor: (theme) => theme.palette.primary.main,
      color: (theme) => theme.palette.primary.contrastText,
    },
  };

  return (
    <Grid
      item
      xs={6}
      py={2}
      display="flex"
      sx={clickable && gridSx}
      alignItems="center"
      {...props}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <Box>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body1">{value}</Typography>
      </Box>
    </Grid>
  );
};

export default ClientCardInfoText;
