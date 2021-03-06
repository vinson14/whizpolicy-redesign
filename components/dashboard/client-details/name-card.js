import { Avatar, Card, Box, Typography } from "@mui/material";
import { CLIENT_FAMILY_NAME_KEY, CLIENT_GIVEN_NAME_KEY } from "../../../data/ui";
import { getInitials, getRandomAvatarColor } from "../../../utils/utils";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const NameCard = ({ client }) => {
  const avatarSx = {
    width: 120,
    height: 120,
    border: 3,
    borderColor: "primary.contrastText",
    bgcolor: getRandomAvatarColor(),
    typography: "h4",
  };

  return (
    <ClientDetailCard>
      <Box minHeight={180} height={1} position="relative" display={{ xs: "none", sm: "block" }}>
        <Box sx={avatarBoxSx}>
          <Avatar sx={avatarSx}>{getInitials(client)}</Avatar>
        </Box>
        <Box height={0.7} sx={nameBoxSx} p={3}>
          <Typography variant="h5" align="right" sx={{ fontWeight: 700 }}>
            {client[CLIENT_GIVEN_NAME_KEY]} {client[CLIENT_FAMILY_NAME_KEY].toUpperCase()}
          </Typography>
          <Typography component="h6" variant="caption" align="right">
            {client.occupation}
          </Typography>
        </Box>
        <Box height={0.3}></Box>
      </Box>
      <Box display={{ xs: "block", sm: "none" }} position="relative">
        <Box display="flex" justifyContent="center" position="absolute" top={(theme) => theme.spacing(-8)} width={1}>
          <Avatar sx={avatarSx}>{getInitials(client.name)}</Avatar>{" "}
        </Box>
        <Box sx={nameBoxSx} mt={8} pt={8} pb={2}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 700 }}>
            {client.name}
          </Typography>
          <Typography component="h6" variant="caption" align="center">
            {client.occupation}
          </Typography>
        </Box>
      </Box>
    </ClientDetailCard>
  );
};

const nameBoxSx = {
  bgcolor: "primary.main",
  color: "primary.contrastText",
};

const avatarBoxSx = {
  position: "absolute",
  left: (theme) => theme.spacing(3),
  bottom: (theme) => theme.spacing(3),
};

export default NameCard;
