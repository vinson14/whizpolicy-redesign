import { Grow } from "@mui/material";
import { useEffect, useState } from "react";

const CustomGrow = ({ children, index = 0 }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Grow in={show} timeout={1000}>
      {children}
    </Grow>
  );
};

export default CustomGrow;
