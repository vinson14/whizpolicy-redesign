import { Box, Card } from "@mui/material";

const ClientDetailCard = ({ children }) => {
  return (
    <Card elevation={8} sx={{ height: 1 }}>
      <Box p={3}>{children}</Box>
    </Card>
  );
};

export default ClientDetailCard;
