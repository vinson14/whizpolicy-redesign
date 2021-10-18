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
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const CoverageCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Coverage Overview</ClientCardHeader>
      <Grid container>
        {clientDetailsFinancialOverviewFields.map((field) => (
          <ClientCardInfoText
            key={field.key}
            icon={field.icon}
            label={field.label}
            value={`$${formatNumber(
              client.financialOverview[field.key]["currentCoverage"]
            )}`}
            clickable
          />
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default CoverageCard;
