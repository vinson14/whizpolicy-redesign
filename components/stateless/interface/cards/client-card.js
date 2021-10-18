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

const ClientCard = ({ client, onClick }) => {
  return (
    <Card sx={{ height: 1 }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Box display="flex" justifyContent="center" mt={3} mb={1}>
            <Avatar>{getInitials(client.name)}</Avatar>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {client.name}
          </Typography>
          <Divider variant="middle" />
          <Grid container mt={2}>
            {clientCardFields.map((field) => (
              <Grid
                key={field.key}
                item
                my={1}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="caption"
                  align="center"
                  color="text.secondary"
                >
                  {field.label}
                </Typography>
                <Typography align="center">{client[field.key]}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ClientCard;
