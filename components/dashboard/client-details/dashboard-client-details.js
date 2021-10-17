import { Grid } from "@mui/material";
import ContactCard from "./contact-card";
import NameCard from "./name-card";
import AboutCard from "./about-card";
import DependantsCard from "./dependants-card";
import CoverageCard from "./coverage-card";

const ClientDetails = ({ client }) => {
  return (
    <>
      {components.map((Component, index) => (
        <Grid key={index} item xs={12} lg={6}>
          <Component client={client} />
        </Grid>
      ))}
    </>
  );
};

const components = [
  NameCard,
  ContactCard,
  AboutCard,
  DependantsCard,
  CoverageCard,
];

export default ClientDetails;
