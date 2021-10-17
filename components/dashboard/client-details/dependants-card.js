import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const DependantsCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Dependants</ClientCardHeader>
      <Grid container>
        {client.dependants.map((dependant) => (
          <Grid key={dependant.name} item xs={6} py={2}>
            <Typography variant="body2" color="text.secondary">
              {dependant.relationship}
            </Typography>
            <Typography variant="body1">{dependant.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default DependantsCard;
