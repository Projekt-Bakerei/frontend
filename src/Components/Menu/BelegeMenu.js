import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function BelegeMenuButton() {
  const handleRechnung = () => {
    window.location.href = "/createinvoice";
  } 
  const handleLieferschein = () => {
    window.location.href = "/lieferschein";
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              //width: 150,
              backgroundColor: "success.main",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-plus"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>&nbsp;
            Neuer Beleg
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={handleRechnung}>Rechnung</MenuItem>
            <MenuItem onClick={popupState.close}>Angebot</MenuItem>
            <MenuItem onClick={handleLieferschein}>Lieferschein</MenuItem>
            <MenuItem onClick={popupState.close}>Abschlagsrechnung</MenuItem>
            <MenuItem onClick={popupState.close}>Rechnungskorrektur</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
