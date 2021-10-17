import { Avatar, Card, Box, Typography } from "@mui/material";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const NameCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <Box minHeight={180} height={1} position="relative">
        <Box sx={avatarBoxSx}>
          <Avatar src="/vinson.jpg" alt="Vinson Ong" sx={avatarSx} />
        </Box>
        <Box height={0.7} sx={nameBoxSx} p={3}>
          <Typography variant="h5" align="right" sx={{ fontWeight: 700 }}>
            {client.name}
          </Typography>
          <Typography component="h6" variant="caption" align="right">
            {client.occupation}
          </Typography>
        </Box>
        <Box height={0.3}></Box>
      </Box>
    </ClientDetailCard>
  );
};

const avatarSx = {
  width: 120,
  height: 120,
  border: 3,
  borderColor: "primary.contrastText",
};

const nameBoxSx = {
  bgcolor: "primary.dark",
  color: "primary.contrastText",
};

const avatarBoxSx = {
  position: "absolute",
  left: (theme) => theme.spacing(3),
  bottom: (theme) => theme.spacing(3),
};

export default NameCard;
