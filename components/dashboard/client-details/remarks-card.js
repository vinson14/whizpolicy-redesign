import { Typography } from "@mui/material";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";

const RemarksCard = ({ client }) => {
  return (
    <ClientDetailCard>
      <ClientCardHeader>Remarks</ClientCardHeader>
      <Typography mt={2} variant="body1">
        {client.remarks}
      </Typography>
    </ClientDetailCard>
  );
};

export default RemarksCard;
