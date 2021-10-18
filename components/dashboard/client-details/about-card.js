import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { clientDetailsAboutFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const AboutCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>About</ClientCardHeader>
      <Grid container>
        {clientDetailsAboutFields.map((field) => (
          <ClientCardInfoText
            key={field.key}
            label={field.label}
            value={client[field.key]}
          />
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default AboutCard;
