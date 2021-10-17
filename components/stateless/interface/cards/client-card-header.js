import { Typography } from "@mui/material";

const ClientCardHeader = ({ children }) => {
  return (
    <Typography variant="h6" sx={{ fontWeight: 700 }}>
      {children}
    </Typography>
  );
};

export default ClientCardHeader;
