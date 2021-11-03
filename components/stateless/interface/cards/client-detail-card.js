import { Box, Card, CardActionArea } from "@mui/material";

const ClientDetailCard = ({ children, onClick }) => {
  return (
    <Card elevation={8} sx={{ height: 1 }}>
      {onClick && (
        <CardActionArea onClick={onClick} sx={{ height: 1 }}>
          <Box p={3}>{children}</Box>
        </CardActionArea>
      )}
      {!onClick && <Box p={3}>{children}</Box>}
    </Card>
  );
};

export default ClientDetailCard;
