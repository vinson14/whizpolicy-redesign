import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TopAppBar = ({ menuOnClick }) => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          p: { xs: 2 },
          pl: { md: 32 },
          color: (theme) => theme.palette.common.white,
        }}
      >
        <IconButton>
          <MenuIcon color="inherit" />
        </IconButton>
        <Avatar>VO</Avatar>
        <IconButton onClick={menuOnClick} color="inherit">
          <MenuIcon color="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
