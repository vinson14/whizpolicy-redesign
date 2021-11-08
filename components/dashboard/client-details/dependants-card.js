import { Box, Grid, Typography } from "@mui/material";
import AddButton from "../../stateless/interface/buttons/add-button";
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
        {(!client.dependants || client.dependants.length === 0) && (
          <Grid item xs={12}>
            <Typography>No dependants have been added</Typography>
          </Grid>
        )}
        <Grid
          xs={12}
          display="flex"
          justifyContent="end"
          alignItems="center"
          item
        >
          <AddButton mb={0}>Add Dependant</AddButton>
        </Grid>
      </Grid>
    </ClientDetailCard>
  );
};

export default DependantsCard;
