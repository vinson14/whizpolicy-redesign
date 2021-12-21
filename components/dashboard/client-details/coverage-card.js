import { Grid } from "@mui/material";
import { clientDetailsFinancialOverviewFields, coverageOverviewLegend } from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import { useState } from "react";

import CoverageText from "../../stateless/interface/cards/coverage-text";
import Legend from "../../stateless/interface/misc/legend";
import CoverageInfoPopover from "./coverage-info-popover";

const CoverageCard = ({ client }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);
  const openPopover = (event, key) => {
    setAnchorEl(event.currentTarget);
    setSelectedKey(key);
  };
  const closePopover = () => {
    setAnchorEl(null);
    setSelectedKey(null);
  };

  const getColor = (coverages) => {
    const currCoverage = coverages.currentCoverage;
    const idealCoverage = coverages.idealCoverage;

    if (currCoverage >= idealCoverage) return "secondary";
    else if (currCoverage === 0) return "error";
    else return "warning";
  };

  return (
    <ClientDetailCard>
      <ClientCardHeader>Coverage Overview</ClientCardHeader>
      <Grid container>
        {client.financialOverview &&
          clientDetailsFinancialOverviewFields.map((field) => (
            <CoverageText
              icon={field.key}
              key={field.key}
              label={field.label}
              value={client.financialOverview[field.key]["currentCoverage"]}
              onClick={(event) => openPopover(event, field.key)}
              color={getColor(client.financialOverview[field.key])}
            />
          ))}
        <Grid item xs={12}>
          <Legend legend={coverageOverviewLegend} />
        </Grid>
        {selectedKey && (
          <CoverageInfoPopover
            client={client}
            anchorEl={anchorEl}
            handleClose={closePopover}
            selectedKey={selectedKey}
          />
        )}
      </Grid>
    </ClientDetailCard>
  );
};

export default CoverageCard;
