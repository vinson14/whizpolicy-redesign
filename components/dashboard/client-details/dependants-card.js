import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const DependantsCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Dependants
      </Typography>
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
