import { CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY, coverageInfoPopoverContent } from "../../../../data/ui";
import { formatNumber } from "../../../../utils/utils";
import ClientCardInfoText from "../cards/client-card-info-text";
import BaseCoverageInfoPopover from "./base-coverage-info-popover";

const EndowmentCoverageInfoPopover = ({ client, anchorEl, handleClose }) => {
  const content = coverageInfoPopoverContent[CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY];
  return (
    <BaseCoverageInfoPopover anchorEl={anchorEl} handleClose={handleClose}>
      {content.map((qns) => (
        <ClientCardInfoText key={qns.qns} label={qns.qns} value={qns.ans} xs={12} sm={12} />
      ))}
      <ClientCardInfoText
        xs={12}
        sm={12}
        label="Guaranteed Maturity Benefit"
        value={`$${formatNumber(
          client.financialOverview[CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY].endowmentGuaranteedValue
        )}`}
      />
      <ClientCardInfoText
        xs={12}
        sm={12}
        label="Projected Maturity Benefit (Higher)"
        value={`$${formatNumber(
          client.financialOverview[CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY].endowmentHigherProjectedValue
        )}`}
      />
      <ClientCardInfoText
        xs={12}
        sm={12}
        label="Projected Maturity Benefit (Lower)"
        value={`$${formatNumber(
          client.financialOverview[CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY].endowmentLowerProjectedValue
        )}`}
      />
    </BaseCoverageInfoPopover>
  );
};

export default EndowmentCoverageInfoPopover;
