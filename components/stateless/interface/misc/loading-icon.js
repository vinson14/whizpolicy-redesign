import { Box, CircularProgress } from "@mui/material";

const LoadingIcon = () => {
  return (
    <Box
      sx={{ height: "100vh" }}
      width={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingIcon;
