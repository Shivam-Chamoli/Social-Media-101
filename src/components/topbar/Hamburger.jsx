import React from "react";
import MyDrawer from "./MyDrawer";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Drawer, IconButton } from "@material-ui/core";

function Hamburger() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 200;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <MyDrawer></MyDrawer>
      </Drawer>
    </>
  );
}

export default Hamburger;
