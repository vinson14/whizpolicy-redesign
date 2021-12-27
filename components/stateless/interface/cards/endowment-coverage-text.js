import { Box, IconButton, Typography } from "@mui/material";
import { CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY } from "../../../../data/ui";
import CoverageIcon from "../icons/coverage-icon";
import CoverageTextContainer from "./coverage-text-container";
import CoverageTextIconContainer from "./coverage-text-icon-container";
import CoverageTextValueContainer from "./coverage-text-value-container";
import InfoIcon from "@mui/icons-material/Info";
import CoverageTextInfoIcon from "./coverage-text-info-icon";
import { formatNumber } from "../../../../utils/utils";

const EndowmentCoverageText = ({ overview }) => {
  const onClick = () => console.log("clicked");
  const getColor = () => {
    return overview.endowmentLowerProjectedValue > 0 ? "secondary" : "error";
  };
  return (
    <CoverageTextContainer>
      <CoverageTextIconContainer>
        <CoverageIcon icon={CLIENT_FINANCIAL_OVERVIEW_ENDOWMENT_BENEFIT_KEY} color={getColor()} />
      </CoverageTextIconContainer>
      <CoverageTextValueContainer color={getColor()} onClick={() => console.log("clicked")}>
        <Box>
          <Typography variant="body2">Endowment</Typography>
          <Typography variant="body1">
            ${formatNumber(overview.endowmentLowerProjectedValue)} - $
            {formatNumber(overview.endowmentHigherProjectedValue)}
          </Typography>
        </Box>
        <CoverageTextInfoIcon onClick={onClick} />
      </CoverageTextValueContainer>
    </CoverageTextContainer>
  );
};

export default EndowmentCoverageText;
