import Box from "@mui/material/Box";
import MetaData from "../stateless/interface/misc/meta-data";

const DashboardContainer = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <MetaData title="Dashboard" />
      {children}
    </Box>
  );
};

export default DashboardContainer;
