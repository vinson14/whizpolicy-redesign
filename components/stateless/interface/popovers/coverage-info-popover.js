import { Grid, IconButton, Popover } from "@mui/material";
import {
  CLIENT_ANNUAL_INCOME_KEY,
  CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY,
  CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY,
  CLIENT_FINANCIAL_OVERVIEW_DISABILITY_INCOME_KEY,
  CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY,
  CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY,
  CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY,
  CLIENT_FINANCIAL_OVERVIEW_TPD_KEY,
  coverageInfoPopoverContent,
} from "../../../../data/ui";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";
import ClientCardInfoText from "../cards/client-card-info-text";
import { formatNumber } from "../../../../utils/utils";
import DefaultCoverageInfoPopover from "./default-coverage-info-popover";
import EndowmentCoverageInfoPopover from "./endowment-coverage-info-popover";
import DisabilityCoverageInfoPopover from "./disability-coverage-info-popover copy";

const CoverageInfoPopover = ({ anchorEl, handleClose, selectedKey, client }) => {
  const componentMapping = {
    [CLIENT_FINANCIAL_OVERVIEW_DEATH_KEY]: DefaultCoverageInfoPopover,
    [CLIENT_FINANCIAL_OVERVIEW_TPD_KEY]: DefaultCoverageInfoPopover,
    [CLIENT_FINANCIAL_OVERVIEW_MAJOR_CI_KEY]: DefaultCoverageInfoPopover,
    [CLIENT_FINANCIAL_OVERVIEW_EARLY_CI_KEY]: DefaultCoverageInfoPopover,
    [CLIENT_FINANCIAL_OVERVIEW_ACC_DEATH_KEY]: DefaultCoverageInfoPopover,
    [CLIENT_FINANCIAL_OVERVIEW_DISABILITY_INCOME_KEY]: DisabilityCoverageInfoPopover,
    [CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY]: EndowmentCoverageInfoPopover,
  };

  const Component = componentMapping[selectedKey];

  return <Component selectedKey={selectedKey} client={client} handleClose={handleClose} anchorEl={anchorEl} />;
};

export default CoverageInfoPopover;
