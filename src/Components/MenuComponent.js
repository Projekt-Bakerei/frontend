import React, {
  Fragment,
  forwardRef,
  useRef,
  useMemo,
  cloneElement,
} from "react";
import Menu from "@mui/joy/Menu";
import MenuItem, { menuItemClasses } from "@mui/joy/MenuItem";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListDivider from "@mui/joy/ListDivider";
import Typography, { typographyClasses } from "@mui/joy/Typography";
import { Link } from "react-router-dom";

const MenuButton = forwardRef(
  ({ children, menu, open, onOpen, onKeyDown, ...props }, ref) => {
    const buttonRef = useRef(null);
    const menuActions = useRef(null);
    const combinedRef = useMemo(() => {
      return (instance) => {
        if (instance) {
          ref(instance);
          buttonRef.current = instance;
        }
      };
    }, [buttonRef, ref]);

    const handleButtonKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        onOpen(event);
        if (event.key === "ArrowUp") {
          menuActions.current?.highlightLastItem();
        }
      }
      onKeyDown(event);
    };

    return (
      <Fragment>
        <ListItemButton
          {...props}
          ref={combinedRef}
          role="menuitem"
          variant={open ? "soft" : "plain"}
          color="neutral"
          aria-haspopup="menu"
          aria-expanded={open ? "true" : undefined}
          aria-controls={open ? `toolbar-example-menu-${children}` : undefined}
          onClick={onOpen}
          onKeyDown={handleButtonKeyDown}
        >
          {children}
        </ListItemButton>
        {cloneElement(menu, {
          open,
          actions: menuActions,
          anchorEl: buttonRef.current,
          slotProps: {
            listbox: {
              id: `toolbar-example-menu-${children}`,
              "aria-label": children,
            },
          },
          placement: "bottom-start",
          disablePortal: false,
          variant: "soft",
          sx: (theme) => ({
            width: 288,
            boxShadow: "0 2px 8px 0px rgba(0 0 0 / 0.38)",
            zIndex: 1,
            bgcolor: "#E5E5E0",
            "--List-padding": "var(--List-divider-gap)",
            "--List-item-minHeight": "32px",
            [`& .${menuItemClasses.root}`]: {
              transition: "none",
              "&:hover": {
                ...theme.variants.solid.primary,
                [`& .${typographyClasses.root}`]: {
                  color: "inherit",
                },
              },
            },
          }),
        })}
      </Fragment>
    );
  }
);

export default function MenuToolbarExample() {
  const menus = React.useRef([]);
  const [menuIndex, setMenuIndex] = React.useState(null);

  // const renderShortcut = (text) => (
  //   <Typography level="body2" textColor="text.tertiary" ml="auto">
  //     {text}
  //   </Typography>
  // );

  const openNextMenu = () => {
    if (typeof menuIndex === "number") {
      if (menuIndex === menus.current.length - 1) {
        setMenuIndex(0);
      } else {
        setMenuIndex(menuIndex + 1);
      }
    }
  };

  const openPreviousMenu = () => {
    if (typeof menuIndex === "number") {
      if (menuIndex === 0) {
        setMenuIndex(menus.current.length - 1);
      } else {
        setMenuIndex(menuIndex - 1);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      openNextMenu();
    }
    if (event.key === "ArrowLeft") {
      openPreviousMenu();
    }
  };

  const createHandleButtonKeyDown = (index) => (event) => {
    if (event.key === "ArrowRight") {
      if (index === menus.current.length - 1) {
        menus.current[0]?.focus();
      } else {
        menus.current[index + 1]?.focus();
      }
    }
    if (event.key === "ArrowLeft") {
      if (index === 0) {
        menus.current[menus.current.length]?.focus();
      } else {
        menus.current[index - 1]?.focus();
      }
    }
  };

  const itemProps = {
    onClick: () => setMenuIndex(null),
    onKeyDown: handleKeyDown,
  };

  // const handleVoucher = {

  // }

  const onLinkVoucherClick = (e) => {
    e.preventDefault();
    window.location.href = "/voucher";
  };
  const onClickCustomer = (e) => {
    e.preventDefault();
    window.location.href = "/customers";
  };
  const onClickEmployees = (e) => {
    e.preventDefault();
    window.location.href = "/employees";
  };

  return (
    <List
      row
      aria-label="Example application menu bar"
      role="menubar"
      data-joy-color-scheme="dark"
      sx={{
        bgcolor: "#E5E5E0",
        px: 2,
        borderRadius: "4px",
        maxWidth: "100",
        "--List-item-radius": "8px",
      }}
    >
      <ListItem>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Typography>Home</Typography>
        </Link>
      </ListItem>

      <ListItem>
        <MenuButton
          open={menuIndex === 0}
          onOpen={() => setMenuIndex(0)}
          onKeyDown={createHandleButtonKeyDown(0)}
          onMouseEnter={() => {
            if (typeof menuIndex === "number") {
              setMenuIndex(0);
            }
          }}
          ref={(instance) => {
            menus.current[0] = instance;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[0]?.focus();
                setMenuIndex(null);
              }}
            >
              <MenuItem {...itemProps}>Firmendaten</MenuItem>
              <MenuItem {...itemProps}>Benutzer</MenuItem>
              <MenuItem {...itemProps}>Mein Steuerberater</MenuItem>
              <MenuItem {...itemProps}>Allgemeine Einstellungen</MenuItem>
            </Menu>
          }
        >
          Dashboard
        </MenuButton>
      </ListItem>
      <ListItem>
        <MenuButton
          open={menuIndex === 1}
          onOpen={() => setMenuIndex(1)}
          onKeyDown={createHandleButtonKeyDown(1)}
          onMouseEnter={() => {
            if (typeof menuIndex === "number") {
              setMenuIndex(1);
            }
          }}
          ref={(instance) => {
            menus.current[1] = instance;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[1]?.focus();
                setMenuIndex(null);
              }}
            >
              <ListItem nested>
                <List aria-label="New">
                  <MenuItem {...itemProps} onClick={onLinkVoucherClick}>
                    Rechnung erstellen
                  </MenuItem>
                  <MenuItem {...itemProps}>Neuer Lieferschein</MenuItem>
                  <MenuItem {...itemProps}>Neues Angebot</MenuItem>
                </List>
              </ListItem>
              <ListDivider />
              <ListItem nested>
                <List aria-label="Open">
                  <MenuItem {...itemProps}>Neue Auftragsbestätigung</MenuItem>
                  <MenuItem {...itemProps}>Neue Abschlagsrechnung</MenuItem>
                </List>
              </ListItem>
            </Menu>
          }
        >
          Belege
        </MenuButton>
      </ListItem>
      <ListItem>
        <MenuButton
          open={menuIndex === 2}
          onOpen={() => setMenuIndex(2)}
          onKeyDown={createHandleButtonKeyDown(2)}
          onMouseEnter={() => {
            if (typeof menuIndex === "number") {
              setMenuIndex(2);
            }
          }}
          ref={(instance) => {
            menus.current[2] = instance;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[2]?.focus();
                setMenuIndex(null);
              }}
            >
              <ListItem nested>
                <List aria-label="Time travel">
                  <MenuItem {...itemProps}>Neue Kunde anlegen</MenuItem>
                  <MenuItem {...itemProps} onClick={onClickCustomer}>Alle Kunden</MenuItem>
                </List>
              </ListItem>
              <ListDivider />
              {/* <ListItem nested>
                <List aria-label="Tool">
                  <MenuItem {...itemProps}>Cut {renderShortcut('⌘ X')}</MenuItem>
                  <MenuItem {...itemProps}>Copy {renderShortcut('⌘ Z')}</MenuItem>
                  <MenuItem {...itemProps}>Paste {renderShortcut('⌘ V')}</MenuItem>
                </List>
              </ListItem> */}
            </Menu>
          }
        >
          Kundenmanager
        </MenuButton>
      </ListItem>
      <ListItem>
        <MenuButton
          open={menuIndex === 3}
          onOpen={() => setMenuIndex(3)}
          onKeyDown={createHandleButtonKeyDown(3)}
          onMouseEnter={() => {
            if (typeof menuIndex === "number") {
              setMenuIndex(3);
            }
          }}
          ref={(instance) => {
            menus.current[3] = instance;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[3]?.focus();
                setMenuIndex(null);
              }}
            >
              <MenuItem {...itemProps}>Neue Mitarbeiter anlegen</MenuItem>
              <MenuItem {...itemProps}>Alle Liferanten</MenuItem>
              <MenuItem {...itemProps} onClick={onClickEmployees}>Alle Miterbeiter Beckarei</MenuItem>
            </Menu>
          }
        >
          Mitarbeiter
        </MenuButton>
      </ListItem>
      <ListItem>
        <MenuButton
          open={menuIndex === 4}
          onOpen={() => setMenuIndex(4)}
          onKeyDown={createHandleButtonKeyDown(4)}
          onMouseEnter={() => {
            if (typeof menuIndex === "number") {
              setMenuIndex(4);
            }
          }}
          ref={(instance) => {
            menus.current[4] = instance;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[4]?.focus();
                setMenuIndex(null);
              }}
            >
              <MenuItem {...itemProps}>Neuen Artikel anlegen</MenuItem>
              <MenuItem {...itemProps}>Alle Artikeln</MenuItem>
            </Menu>
          }
        >
          Produkte
        </MenuButton>
      </ListItem>
    </List>
  );
}
