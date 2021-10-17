import { Typography } from "@mui/material";

const MainHeader = ({ children }) => {
  return (
    <Typography variant="h4" color="text.primary">
      {children}
    </Typography>
  );
};

export default MainHeader;
