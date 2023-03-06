import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import BelegeMenuButton from "./BelegeMenu";

const drawerWidth = 240;
const margintop = 50;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: margintop,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  marginTop: margintop,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function BelegeMenu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (value) => {
    if (value === "alle Belege") {
      window.location.href = "/belege";
    }
    if (value === "alle Lieferscheine") {
      window.location.href = "/listlieferschein";
    }
    if (value === "Ausgangsbelege") {
      window.location.href = "/ausgangsbelege";
    }
    if (value === "Eingagngsbelege") {
      window.location.href = "/eingangsbelege";
    }
    if (value === "Offene Rechnungen") {
      window.location.href = "/offene";
    }
    if (value === "Entwürfe") {
      window.location.href = "/entwürfe";
    }
    if (value === "Storniert") {
      window.location.href = "/storniert";
    }
    if (value === "Fahrerservice") {
      window.location.href = "/fahrerservice";
    }
    //console.log(value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Toolbar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {!open ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
              >
                {theme.direction === "rtl" ? undefined : <ChevronRightIcon />}
              </IconButton>
            ) : (
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? undefined : <ChevronLeftIcon />}
              </IconButton>
            )}
          </DrawerHeader>
          <Divider />
          <Box className="d-flex justify-content-center">
            <BelegeMenuButton />
          </Box>
          <List>
            {[
              "alle Belege",
              "alle Lieferscheine",
              "Fahrerservice",
              "Ausgangsbelege",
              "Eingagngsbelege",
              "Offene Rechnungen",
              "Entwürfe",
              "Storniert",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => handleClick(text)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Toolbar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        Alle Belege
      </Box>
    </Box>
  );
}
