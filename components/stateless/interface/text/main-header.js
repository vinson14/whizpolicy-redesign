import { Typography } from "@mui/material";

const MainHeader = ({ children, ...props }) => {
  return (
    <Typography variant="h4" color="text.primary" {...props}>
      {children}
    </Typography>
  );
};

export default MainHeader;
