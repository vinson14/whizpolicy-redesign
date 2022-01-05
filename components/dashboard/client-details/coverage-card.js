import { Grid } from "@mui/material";
import {
  clientDetailsFinancialOverviewProtectionFields,
  CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY,
  coverageOverviewLegend,
} from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import { useState } from "react";

import CoverageText from "../../stateless/interface/cards/coverage-text";
import Legend from "../../stateless/interface/misc/legend";
import CoverageInfoPopover from "../../stateless/interface/popovers/coverage-info-popover";
import EndowmentCoverageText from "../../stateless/interface/cards/endowment-coverage-text";

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
          clientDetailsFinancialOverviewProtectionFields.map((field) => (
            <CoverageText
              icon={field.key}
              key={field.key}
              label={field.label}
              value={client.financialOverview[field.key]["currentCoverage"]}
              onClick={(event) => openPopover(event, field.key)}
              color={getColor(client.financialOverview[field.key])}
            />
          ))}
        <EndowmentCoverageText
          overview={client.financialOverview[CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY]}
          onClick={(event) => openPopover(event, CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY)}
        />
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
