import { FileDownload } from "@mui/icons-material";
import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const DependantsCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Dependants</ClientCardHeader>
      <Grid container>
        {client.dependants &&
          client.dependants.map((dependant) => (
            <ClientCardInfoText
              key={dependant.name}
              label={dependant.relationship}
              value={dependant.name}
            />
          ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default DependantsCard;
