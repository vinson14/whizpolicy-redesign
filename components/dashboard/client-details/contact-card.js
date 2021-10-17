import {
  Box,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import { clientDetailsContactFields } from "../../../data/ui";

const ContactCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Contact Info
      </Typography>
      <List>
        {clientDetailsContactFields.map((field) => (
          <ListItem disableGutters key={field.label}>
            <ListItemIcon>{field.icon}</ListItemIcon>
            <ListItemText primary={client[field.key]} secondary={field.label} />
          </ListItem>
        ))}
      </List>
    </ClientDetailCard>
  );
};

export default ContactCard;
