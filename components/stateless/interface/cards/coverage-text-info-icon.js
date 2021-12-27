import { Box, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const CoverageTextInfoIcon = ({ onClick }) => {
  return (
    <Box>
      <IconButton onClick={onClick}>
        <InfoIcon sx={{ cursor: "pointer", color: (theme) => theme.palette.common.white }} />
      </IconButton>
    </Box>
  );
};

export default CoverageTextInfoIcon;
