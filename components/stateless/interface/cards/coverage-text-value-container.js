import { Box } from "@mui/material";

const CoverageTextValueContainer = ({ children, color, onClick }) => {
  return (
    <Box
      flexGrow={1}
      bgcolor={`${color}.main`}
      borderRadius={3}
      p={2}
      color={`${color}.contrastText`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      onClick={onClick}
      sx={{ cursor: "pointer" }}
    >
      {children}
    </Box>
  );
};

export default CoverageTextValueContainer;
