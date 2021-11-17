import { ThemeProvider } from "@emotion/react";
import { Box, Button, Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WhizpolicyLogo from "../misc/whizpolicy-logo";

const Sidebar = ({ open, onClose, children }) => {
  return (
    <>
      <Drawer
        sx={drawerSx}
        open={open}
        onClose={onClose}
        variant="temporary"
        anchor="left"
      >
        <Box sx={drawerContentSx}>
          <Box sx={logoBoxSx}>
            <WhizpolicyLogo />
          </Box>
          <Box>{children}</Box>
        </Box>
      </Drawer>
      <Drawer
        sx={permanentDrawerSx}
        open={open}
        onClose={onClose}
        variant="permanent"
        anchor="left"
      >
        <Box sx={drawerContentSx}>
          <Box sx={logoBoxSx}>
            <WhizpolicyLogo />
          </Box>
          <Box>{children}</Box>
        </Box>
      </Drawer>
    </>
  );
};

const width = 240;
const drawerSx = {
  width: width,
  "& .MuiDrawer-paper": {
    width: width,
  },
};
const permanentDrawerSx = {
  width: width,
  "& .MuiDrawer-paper": {
    width: width,
  },
  display: {
    xs: "none",
    md: "block",
  },
};
const drawerContentSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};
const logoBoxSx = {
  position: "fixed",
  top: (theme) => theme.spacing(4),
  left: (theme) => theme.spacing(4),
};

const childrenBoxSx = {};

export default Sidebar;
