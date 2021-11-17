import { Box, Grid, ListItemIcon, Typography } from "@mui/material";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import { clientDetailsContactFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";

const ContactCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Contact Info</ClientCardHeader>
      <Grid container>
        {clientDetailsContactFields.map((field) => (
          <ClientCardInfoText
            xs={12}
            md={12}
            key={field.key}
            value={client[field.key]}
            label={field.label}
            icon={field.icon}
            type={field.type}
          />
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default ContactCard;
