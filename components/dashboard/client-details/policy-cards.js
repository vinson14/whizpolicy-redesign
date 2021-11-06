import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import { insurerLabels, policyCardFields } from "../../../data/ui";
import useModal from "../../../utils/useModal";
import formatNumber, { formatString } from "../../../utils/utils";
import FloatingAddButton from "../../stateless/interface/buttons/floating-add-button";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import MainHeader from "../../stateless/interface/text/main-header";
import AddPolicyForm from "../add-policy-form/add-policy-form";
import { useRouter } from "next/router";
import AddButton from "../../stateless/interface/buttons/add-button";

const PolicyCards = ({ client, policyOnClick }) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 3 }}>
        <MainHeader>Policies</MainHeader>
      </Box>

      <Grid container spacing={3} alignItems="stretch">
        {client.policies &&
          client.policies.map((policy) => (
            <Grid key={policy.policyNumber} item xs={12} lg={6}>
              <PolicyCard
                policy={policy}
                onClick={() => policyOnClick(policy)}
              />
            </Grid>
          ))}
        {!client.policies && (
          <Grid item xs={12}>
            <Box py={3}>
              <Typography>No policies have been added yet</Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export const PolicyCard = ({ policy, onClick }) => {
  return (
    <ClientDetailCard onClick={onClick}>
      <ClientCardHeader>
        {insurerLabels[policy.insurer]} - {policy.policyName}
      </ClientCardHeader>
      <Grid container>
        {policyCardFields.map((field) => (
          <ClientCardInfoText
            key={field.key}
            label={field.label}
            value={policy[field.key]}
            type={field.type}
          />
        ))}
      </Grid>
    </ClientDetailCard>
  );
};

export default PolicyCards;
