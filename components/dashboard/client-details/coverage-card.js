import {
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
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
          <Grid
            key={field.label}
            item
            xs={6}
            py={2}
            display="flex"
            alignItems="center"
          >
            <ListItemIcon>{field.icon}</ListItemIcon>
            <Box>
              <Typography variant="body2" color="text.secondary">
                {field.label}
              </Typography>
              <Typography variant="body1">{`$${formatNumber(
                client.financialOverview[field.key]["currentCoverage"]
              )}`}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default CoverageCard;
