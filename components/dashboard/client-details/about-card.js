import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { clientDetailsAboutFields } from "../../../data/ui";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const AboutCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        About
      </Typography>
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
