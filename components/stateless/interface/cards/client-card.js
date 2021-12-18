import { Avatar, Box, Card, CardActionArea, CardContent, Divider, Grid, Typography } from "@mui/material";
import { clientCardFields } from "../../../../data/ui";
import { getInitials, getRandomAvatarColor } from "../../../../utils/utils";
import ClientCardInfoText from "./client-card-info-text";
import ClientDetailCard from "./client-detail-card";

const ClientCard = ({ client, onClick }) => {
  return (
    <ClientDetailCard onClick={onClick}>
      <CardContent sx={{ height: 1 }}>
        <Box display="flex" justifyContent="center" mt={3} mb={1}>
          <Avatar sx={{ bgcolor: getRandomAvatarColor() }}>{getInitials(client)}</Avatar>
        </Box>
        <Typography variant="h6" align="center" gutterBottom>
          {client.name}
        </Typography>
        <Divider variant="middle" />
        <Grid container mt={2}>
          {clientCardFields.map((field) => (
            <ClientCardInfoText
              key={field.key}
              label={field.label}
              value={client[field.key]}
              type={field.type}
              align="center"
            />
          ))}
        </Grid>
      </CardContent>
    </ClientDetailCard>
  );
};

export default ClientCard;
