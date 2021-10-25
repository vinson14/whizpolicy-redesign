import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import { policyCardFields } from "../../../data/ui";
import useModal from "../../../utils/useModal";
import formatNumber from "../../../utils/utils";
import AddButton from "../../stateless/interface/buttons/add-button";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import MainHeader from "../../stateless/interface/text/main-header";
import AddPolicyForm from "../add-policy-form/add-policy-form";
import { useRouter } from "next/router";

const PolicyCards = ({ client }) => {
  const [modalState, openModal, closeModal] = useModal();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 3 }}>
        <MainHeader>Policies</MainHeader>
        <AddButton onClick={openModal}>Add Policy</AddButton>
        <AddPolicyForm open={modalState} handleClose={closeModal} />
      </Box>

      <Grid container spacing={3} alignItems="stretch">
        {client.policies.map((policy) => (
          <Grid key={policy.policyNumber} item xs={12} lg={6}>
            <PolicyCard policy={policy} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export const PolicyCard = ({ policy }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(
      `${router.asPath}&policyNumber=${policy.policyNumber}`,
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <ClientDetailCard onClick={onClick}>
      <ClientCardHeader>
        {policy.insurer} - {policy.policyName}
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
