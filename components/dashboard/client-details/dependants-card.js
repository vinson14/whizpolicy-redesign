import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const DependantsCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Dependants</ClientCardHeader>
      <Grid container>
        {client.dependants.map((dependant) => (
          <Grid key={dependant.name} item xs={6}>
            <ListItem disableGutters>
              <ListItemText
                primary={dependant.name}
                secondary={dependant.relationship}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default DependantsCard;
