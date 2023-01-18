import React, { Fragment, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import { Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DatePicker from "react-date-picker";

import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";
import { FormLabel } from "@mui/joy";
import { FormText } from "react-bootstrap";

import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  // { field: 'kodu', headerName: 'Müsteri kodu', width: 100, sortable: true, },
  {
    field: "artikelName",
    headerName: "Artikel",
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: "artikelBeschreibung",
    headerName: "Beschreibung",
    type: "text",
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: "artikelPrice",
    headerName: "Price",
    description: "Einzel Price",
    sortable: true,
    width: 250,
    //   valueGetter: (params) =>
    //     `${params.row.cadde || ''}, ${params.row.plz || ''} ${params.row.yer|| ''}`,
  },
  {
    field: "artikelMenge",
    headerName: "Menge",
    type: "number",
    width: 120,
    editable: true,
    sortable: true,
  },
];

const artikel = [
  {
    id: "1",
    artikelName: "Brot pide",
    artikelBeschreibung: "250 gr",
    artikelPrice: "0.80",
    artikelMenge: "25",
  },
  {
    id: 2,
    artikelName: "Lachmadgun",
    artikelBeschreibung: "Halbar",
    artikelPrice: "1.80",
    artikelMenge: "120",
  },
  {
    id: 3,
    artikelName: "Börek klein",
    artikelBeschreibung: "Hackfleisch, Zwiebel, Petersilie",
    artikelPrice: "2.50",
    artikelMenge: "80",
  },
  {
    id: 4,
    artikelName: "Döner Pide",
    artikelBeschreibung: "180 gr",
    artikelPrice: "3.50",
    artikelMenge: "250",
  },
];
export const HeuteDatum = () => {
  const date = new Date();
  const heute =
    String(date.getDate()).padStart(2, "0") +
    "." +
    String(date.getMonth() + 1).padStart(2, "0") +
    "." +
    date.getFullYear();
  return <strong>{heute}</strong>;
};

export const CreateInvoice = () => {
  const { token } = useUser();

  const { listData } = useCustomer();
  console.log("List Costumers:", listData);

  const [listKunden, setListKunden] = useState([]);

  useEffect(() => {
    setListKunden(listData);
  }, [listData]);

  let kunden = listKunden;
  console.log("Kunden:", kunden);

  const firmenMap = kunden.map(({ ismi }) => ismi);
  console.log("FirmenMap: ", firmenMap);

  const [value, setValue] = useState("Firma");
  const [inputValue, setInputValue] = useState("");

  const Find = kunden.find((firma) => firma.ismi === `${value}`);
  console.log("Find: ", Find);

  const LeistungsDatum = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const dateStart = new Date(startDate);
    const start =
      String(dateStart.getDate()).padStart(2, "0") +
      "." +
      String(dateStart.getMonth() + 1).padStart(2, "0") +
      "." +
      dateStart.getFullYear();
    const dateEnd = new Date(endDate);
    const ende =
      String(dateEnd.getDate()).padStart(2, "0") +
      "." +
      String(dateEnd.getMonth() + 1).padStart(2, "0") +
      "." +
      dateEnd.getFullYear();
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{display: "flex", gap: 3}}>
            <DatePicker
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              value={endDate}
              onChange={(daten) => setEndDate(daten)}
            />
          </Box>
          <FormText style={{paddingRight: "6rem"}}>
            Leistungszeitraum: {start} - {ende}
          </FormText>
        </Box>
      </>
    );
  };

  // const FirmaAdresse = kunden.find((adresse) => adresse.cadde === `${value}`);
  // console.log("FirmAdresse:", Find.cadde)

  return token ? (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <br />
        <Box sx={{ bgcolor: "#cfe8fc", height: "70vh", padding: "1rem" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Box variant="soft" sx={{ py: 0.4 }}>
              {/* <code>
                  <strong>{`${
                    value !== null ? `'${value}'` : "Firma"
                  }`}</strong>
                </code> */}
              <h1>Rechnung</h1>
              <Box className="d-flex p-3 justify-content-between">
                <Box className="d-flex flex-column">
                  <Typography level="body1">Empfänger</Typography>
                  <FormText>
                    {/* <Typography component="b">Firma: </Typography> */}
                    {Find !== undefined ? <b>{Find.hitab} </b> : " An das"}
                    {Find !== undefined ? <b> {Find.ismi}</b> : " Name"}
                  </FormText>
                  <FormText>
                    {Find !== undefined ? (
                      <b>{Find.cadde}</b>
                    ) : (
                      " Straße & Nummer"
                    )}
                  </FormText>
                  <FormText>
                    {Find !== undefined ? (
                      <b>{Find.kisi}</b>
                    ) : (
                      " Straße & Nummer"
                    )}
                  </FormText>
                  <FormText>
                    {Find !== undefined ? <b>{Find.plz} </b> : " PLZ"}
                    {Find !== undefined ? <b>{Find.yer} </b> : " Stadt"}
                  </FormText>
                </Box>
                <Box className="d-flex flex-column padding-right-6 w-25">
                  <Typography level="body1">
                    Rechnungsnummer 012225325
                  </Typography>
                  <FormText>
                    Kundennummer{" "}
                    {Find !== undefined ? <b>{Find.kodu} </b> : "none"}
                  </FormText>
                  <FormText>
                    Datum:
                    <HeuteDatum />
                  </FormText>
                  <br />
                </Box>
              </Box>
              <LeistungsDatum />
              <hr />
            </Box>
          </Box>
          {/* <Typography variant="soft" sx={{ py: 0.4 }}>
              <code>
                <strong>Find: {JSON.stringify(Find)}</strong>
              </code>
            </Typography> */}
          <br />
          <Box sx={{ height: "50%", width: "100%" }}>
            <DataGrid
              rows={artikel}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              // checkboxSelection
              // disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </Box>
        <FormControl id="controllable" sx={{ marginTop: "1rem" }}>
          <FormLabel>Hier eine Firma wählen</FormLabel>
          <Autocomplete
            placeholder="Müsteri ara"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            key={firmenMap}
            options={firmenMap}
            sx={{ width: 350, zIndex: 30 + "!important", borderRadius: 50 }}
            renderInput={(params) => (
              <TextField {...params} label="Ismiyle | Müsteri ara" />
            )}
          />
        </FormControl>
        <div className="d-flex flex-wrap justify-content-around">
          <div className="d-flex flex-wrap mt-3 gap-3">
            <Button
              variant="contained"
              sx={{
                height: 40,
              }}
            >
              <BsFillFileEarmarkPdfFill />
              &nbsp;Save to PDF
            </Button>
            <Button
              variant="outlined"
              sx={{
                height: 40,
              }}
            >
              Send to Mail
            </Button>
          </div>
          <div className="d-flex flex-wrap mt-3 gap-3">
            <Button
              variant="contained"
              color="success"
              sx={{
                height: 40,
              }}
            >
              <AiFillPrinter />
              &nbsp;Print
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                height: 40,
              }}
            >
              <MdDeleteForever />
              &nbsp;Delete
            </Button>
          </div>
        </div>
      </Container>
    </Fragment>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
};
