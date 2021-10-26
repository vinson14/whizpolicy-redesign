import { Box, Grid, IconButton, Popover } from "@mui/material";
import {
  clientDetailsFinancialOverviewFields,
  CLIENT_ANNUAL_INCOME_KEY,
  coverageInfoPopoverContent,
} from "../../../data/ui";
import ClientCardHeader from "../../stateless/interface/cards/client-card-header";
import ClientCardInfoText from "../../stateless/interface/cards/client-card-info-text";
import ClientDetailCard from "../../stateless/interface/cards/client-detail-card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Fragment, useState } from "react";
import { formatNumber } from "../../../utils/utils";
import CloseIcon from "@mui/icons-material/Close";

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
  return (
    <ClientDetailCard>
      <ClientCardHeader>Coverage Overview</ClientCardHeader>
      <Grid container>
        {clientDetailsFinancialOverviewFields.map((field) => (
          <Fragment key={field.key}>
            <ClientCardInfoText
              icon={field.icon}
              endIcon={<ChevronRightIcon />}
              endIconOnClick={(event) => openPopover(event, field.key)}
              pr={2}
              label={field.label}
              type={field.type}
              value={client.financialOverview[field.key]["currentCoverage"]}
            />
          </Fragment>
        ))}
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

const CoverageInfoPopover = ({
  anchorEl,
  handleClose,
  selectedKey,
  client,
}) => {
  const content = coverageInfoPopoverContent[selectedKey];
  const clientInfoText = [
    {
      label: "Current Income",
      value: `$${formatNumber(client[CLIENT_ANNUAL_INCOME_KEY])}`,
    },
    {
      label: "Current Coverage",
      value: `$${formatNumber(
        client["financialOverview"][selectedKey]["currentCoverage"]
      )}`,
    },
    {
      label: "Ideal Coverage",
      value: `$${formatNumber(
        client["financialOverview"][selectedKey]["idealCoverage"]
      )}`,
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
            <ClientCardInfoText xs={12} label={qns.qns} value={qns.ans} />
          </Fragment>
        ))}
        {clientInfoText.map((text) => (
          <ClientCardInfoText
            xs={12}
            label={text.label}
            value={text.value}
            key={text.label}
          />
        ))}
      </Grid>
    </Popover>
  );
};

export default CoverageCard;
