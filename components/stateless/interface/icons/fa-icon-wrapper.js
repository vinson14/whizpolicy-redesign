import { SvgIcon } from "@mui/material";

const FaIconWrapper = ({ color, children }) => {
  return <SvgIcon color={color}>{children}</SvgIcon>;
};

export default FaIconWrapper;
