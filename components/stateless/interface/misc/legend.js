import { Box, Grid, Typography } from "@mui/material";

const Legend = ({ legend }) => {
  return (
    <Grid container p={3}>
      {legend.map((leg) => (
        <Grid
          key={leg.label}
          item
          xs={12}
          sm={4}
          lg={3}
          p={1}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Box bgcolor={leg.color} height={20} width={20} mr={1}></Box>
          <Typography variant="caption">{leg.label}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Legend;
