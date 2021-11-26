import { SvgIcon } from "@mui/material";

const FaIconWrapper = ({ color, children, ...props }) => {
  return (
    <SvgIcon color={color} {...props}>
      {children}
    </SvgIcon>
  );
};

export default FaIconWrapper;
