import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { clientCardFields } from "../../../../data/ui";
import { getInitials } from "../../../../utils/utils";
import ClientCardInfoText from "./client-card-info-text";
import ClientDetailCard from "./client-detail-card";

const ClientCard = ({ client, onClick }) => {
  return (
    <ClientDetailCard onClick={onClick}>
      <CardContent sx={{ height: 1 }}>
        <Box display="flex" justifyContent="center" mt={3} mb={1}>
          <Avatar>{getInitials(client.name)}</Avatar>
        </Box>
        <Typography variant="h6" align="center" gutterBottom>
          {client.name}
        </Typography>
        <Divider variant="middle" />
        <Grid container mt={2}>
          {clientCardFields.map((field) => (
            // <Grid
            //   key={field.key}
            //   item
            //   my={1}
            //   md={6}
            //   sm={6}
            //   xs={12}
            //   sx={{ display: "flex", flexDirection: "column" }}
            // >
            //   <Typography
            //     variant="caption"
            //     align="center"
            //     color="text.secondary"
            //   >
            //     {field.label}
            //   </Typography>
            //   <Typography align="center">{client[field.key]}</Typography>
            // </Grid>
            <ClientCardInfoText
              key={field.key}
              label={field.label}
              value={client[field.key]}
              type={field.type}
              align="center"
            />
          ))}
        </Grid>
      </CardContent>
    </ClientDetailCard>
  );
};

export default ClientCard;
