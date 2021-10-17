import { Box, Grid, ListItemIcon, Typography } from "@mui/material";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import { clientDetailsContactFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";

const ContactCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Contact Info</ClientCardHeader>
      <Grid container>
        {clientDetailsContactFields.map((field) => (
          <Grid
            key={field.label}
            item
            xs={12}
            py={2}
            display="flex"
            alignItems="center"
          >
            <ListItemIcon>{field.icon}</ListItemIcon>
            <Box>
              <Typography variant="body2" color="text.secondary">
                {field.label}
              </Typography>
              <Typography variant="body1">{client[field.key]}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default ContactCard;
