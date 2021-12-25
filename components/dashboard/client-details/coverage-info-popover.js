import { Grid, IconButton, Popover } from "@mui/material";
import { CLIENT_ANNUAL_INCOME_KEY, coverageInfoPopoverContent } from "../../../data/ui";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment } from "react";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import { formatNumber } from "../../../utils/utils";

const CoverageInfoPopover = ({ anchorEl, handleClose, selectedKey, client }) => {
  const content = coverageInfoPopoverContent[selectedKey];
  const clientInfoText = [
    {
      label: "Current Income",
      value: `$${formatNumber(client[CLIENT_ANNUAL_INCOME_KEY])}`,
    },
    {
      label: "Current Coverage",
      value: `$${formatNumber(client["financialOverview"][selectedKey]["currentCoverage"])}`,
    },
    {
      label: "Ideal Coverage",
      value: `$${formatNumber(client["financialOverview"][selectedKey]["idealCoverage"])}`,
    },
  ];
  return (
    <Popover
      elevation={4}
      open={anchorEl != null}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: "center", horizontal: "right" }}
      transformOrigin={{ vertical: "center", horizontal: "left" }}
    >
      <Grid container p={3} maxWidth={500}>
        <Grid item xs={12} display="flex" justifyContent="end">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
        {content.map((qns) => (
          <Fragment key={qns.qns}>
            <ClientCardInfoText xs={12} sm={12} label={qns.qns} value={qns.ans} />
          </Fragment>
        ))}
        {clientInfoText.map((text) => (
          <ClientCardInfoText
            xs={12}
            sm={12}
            label={text.label}
            value={
              (text.label === "Current Coverage" || text.label === "Ideal Coverage") &&
              selectedKey === CLIENT_FINANCIAL_OVERVIEW_DISABILITY_INCOME_KEY
                ? `${text.value}/month`
                : text.value
            }
            key={text.label}
          />
        ))}
      </Grid>
    </Popover>
  );
};

export default CoverageInfoPopover;
