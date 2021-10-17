import { Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { clientDetailsFinancialOverviewFields } from "../../../data/ui";
import formatNumber from "../../../utils/utils";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const CoverageCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Coverage Overview</ClientCardHeader>
      <Grid container>
        {clientDetailsFinancialOverviewFields.map((field) => (
          <Grid key={field.label} item xs={6} lg={6}>
            <ListItem disableGutters>
              <ListItemIcon>{field.icon}</ListItemIcon>
              <ListItemText
                primary={`$${formatNumber(
                  client.financialOverview[field.key]["currentCoverage"]
                )}`}
                secondary={field.label}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default CoverageCard;
