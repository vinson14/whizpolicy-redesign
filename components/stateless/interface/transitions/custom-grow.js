import { Grow } from "@mui/material";

const CustomGrow = ({ children, show = true, index = 0 }) => {
  return (
    <Grow in={show} timeout={index === 0 ? "auto" : index * 1000}>
      {children}
    </Grow>
  );
};

export default CustomGrow;
