import { Grid } from "@mui/material";

const CoverageTextContainer = ({ children }) => {
  return (
    <Grid item xs={12} sm={8} md={8} lg={6} display="flex" alignItems="stretch" p={2} justifyContent="center">
      {children}
    </Grid>
  );
};

export default CoverageTextContainer;
