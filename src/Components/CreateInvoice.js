import React, { Fragment, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import { TextField } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";
import { FormLabel } from "@mui/joy";
import { FormText } from "react-bootstrap";

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  // { field: 'kodu', headerName: 'Müsteri kodu', width: 100, sortable: true, },
  {
    field: 'artikelName',
    headerName: 'Artikel',
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: 'artikelBeschreibung',
    headerName: 'Beschreibung',
    type: 'text',
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: 'artikelPrice',
    headerName: 'Price',
    description: 'Einzel Price',
    sortable: true,
    width: 250,
  //   valueGetter: (params) =>
  //     `${params.row.cadde || ''}, ${params.row.plz || ''} ${params.row.yer|| ''}`,
  },
  {
    field: 'artikelMenge',
    headerName: 'Menge',
    type: 'number',
    width: 120,
    editable: true,
    sortable: true,
  },
];

const artikel = [
  { id: "1", artikelName: 'Brot pide', artikelBeschreibung: '250 gr', artikelPrice: '0.80', artikelMenge: '25', },
  { id: 2, artikelName: 'Lachmadgun', artikelBeschreibung: 'Halbar', artikelPrice: '1.80', artikelMenge: '120',  },
  { id: 3, artikelName: 'Börek klein', artikelBeschreibung: 'Hackfleisch, Zwiebel, Petersilie', artikelPrice: '2.50', artikelMenge: '80', },
  { id: 4, artikelName: 'Döner Pide', artikelBeschreibung: '180 gr', artikelPrice: '3.50', artikelMenge: '250', },
 
];

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

  // const FirmaAdresse = kunden.find((adresse) => adresse.cadde === `${value}`);
  // console.log("FirmAdresse:", Find.cadde)

  return token ? (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Neu Rechnung erstellen</h1>
        <Box sx={{ bgcolor: "#cfe8fc", height: "75vh", padding: "1rem" }}>
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
                      <Typography level="body1">Anschrift</Typography>
                      <FormText>Öz Güven Warenhandelsgesellschaft mbH</FormText>
                      <FormText>Kepler Straße 15</FormText>
                      <FormText>50823 Köln</FormText>
                      <br />
                      <FormText>Telefon: 0221 25 25 25 25</FormText>
                      <FormText>Fax: 0221 25 25 25 25</FormText>
                  </Box>
                </Box>
                <hr />
              </Box>
            </Box>
            {/* <Typography variant="soft" sx={{ py: 0.4 }}>
              <code>
                <strong>Find: {JSON.stringify(Find)}</strong>
              </code>
            </Typography> */}
            <br />
            <Box sx={{ height: '50%', width: '100%' }}>
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
      </Container>
    </Fragment>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
};
