import { Grid, Typography } from "@mui/material";
import { POLICY_CATEGORY_ISP_KEY, POLICY_CATEGORY_KEY, shieldPlanFields } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const ShieldPlanCard = ({ client }) => {
  const shieldPlan = client?.policies.find((policy) => policy[POLICY_CATEGORY_KEY] === POLICY_CATEGORY_ISP_KEY);

  return (
    <ClientDetailCard>
      <ClientCardHeader>Integrated Shield Plan</ClientCardHeader>
      <Grid container>
        {!shieldPlan && (
          <Grid item>
            <Typography>No shield plan</Typography>
          </Grid>
        )}
        {shieldPlan &&
          shieldPlanFields.map((field) => (
            <ClientCardInfoText key={field.key} label={field.label} value={shieldPlan[field.key]} type={field.type} />
          ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default ShieldPlanCard;
