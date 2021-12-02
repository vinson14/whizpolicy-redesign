import { Box, Typography } from "@mui/material";
import WhizpolicyLogo from "./whizpolicy-logo";

const LoginHeader = ({ title }) => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <WhizpolicyLogo size={1.5} />
      </Box>
      <Box>
        <Typography variant="h6" align="center" sx={{ mt: 1, pt: 3, px: 1 }}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default LoginHeader;
