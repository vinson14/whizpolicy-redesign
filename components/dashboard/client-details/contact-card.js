import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import { clientDetailsContactFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";

const ContactCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Contact Info</ClientCardHeader>
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
