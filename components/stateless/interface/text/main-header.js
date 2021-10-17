import { Typography } from "@mui/material";

const MainHeader = ({ children }) => {
  return (
    <Typography sx={sx} variant="h4">
      {children}
    </Typography>
  );
};

const sx = {
  color: (theme) => theme.palette.text.primary,
};

export default MainHeader;
