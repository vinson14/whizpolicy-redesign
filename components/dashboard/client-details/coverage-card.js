import {
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { clientDetailsFinancialOverviewFields } from "../../../data/ui";
import formatNumber from "../../../utils/utils";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const CoverageCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Coverage Overview
      </Typography>
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
