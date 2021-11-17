import { Divider, Grid } from "@mui/material";
import { clientDetailsCards } from "../../../data/ui";
import CustomGrow from "../../stateless/interface/transitions/custom-grow";
import CoverageCard from "./coverage-card";
import PolicyCards from "./policy-cards";

const ClientDetails = ({ client, policyOnClick }) => {
  return (
    <>
      {clientDetailsCards.map(({ Component, col, ...props }, index) => {
        return (
          <CustomGrow key={index} index={index}>
            <Grid item {...col}>
              <Component client={client} {...props} />
            </Grid>
          </CustomGrow>
        );
      })}
    </>
  );
};

export default ClientDetails;
