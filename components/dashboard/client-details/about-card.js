import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { clientDetailsAboutFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const AboutCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>About</ClientCardHeader>
      <Grid container>
        {clientDetailsAboutFields.map((field) => (
          <Grid key={field.label} item xs={6}>
            <ListItem disableGutters>
              <ListItemText
                primary={client[field.key]}
                secondary={field.label}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default AboutCard;
