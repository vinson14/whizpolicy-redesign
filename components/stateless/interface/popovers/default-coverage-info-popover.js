import { Grid } from "@mui/material";
import { CLIENT_ANNUAL_INCOME_KEY, coverageInfoPopoverContent } from "../../../../data/ui";
import { formatNumber } from "../../../../utils/utils";
import ClientCardInfoText from "../cards/client-card-info-text";
import BaseCoverageInfoPopover from "./base-coverage-info-popover";

const DefaultCoverageInfoPopover = ({ selectedKey, client, anchorEl, handleClose }) => {
  const content = coverageInfoPopoverContent[selectedKey];
  return (
    <BaseCoverageInfoPopover anchorEl={anchorEl} handleClose={handleClose}>
      {content.map((qns) => (
        <ClientCardInfoText key={qns.qns} label={qns.qns} value={qns.ans} xs={12} sm={12} />
      ))}
      <ClientCardInfoText
        xs={12}
        sm={12}
        label="Estimated Annual Income"
        value={`$${formatNumber(client[CLIENT_ANNUAL_INCOME_KEY])}`}
      />
      <ClientCardInfoText
        xs={12}
        sm={12}
        label="Current Coverage"
        value={`$${formatNumber(client.financialOverview[selectedKey].currentCoverage)}`}
      />
      <ClientCardInfoText
        xs={12}
        sm={12}
        label="Ideal Coverage"
        value={`$${formatNumber(client.financialOverview[selectedKey].idealCoverage)}`}
      />
    </BaseCoverageInfoPopover>
  );
};

export default DefaultCoverageInfoPopover;
