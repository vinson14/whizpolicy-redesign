import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
const TopAppBar = ({ menuOnClick, goBackOneLevel }) => {
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
        <IconButton color="inherit" onClick={goBackOneLevel}>
          <ChevronLeftIcon color="inherit" size="large" />
        </IconButton>
        <Avatar>VO</Avatar>
        <IconButton
          onClick={menuOnClick}
          color="inherit"
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon color="inherit" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
