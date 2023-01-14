import React, { Fragment, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import TextField from '@mui/material/TextField';
//import { DataGrid } from '@mui/x-data-grid';

import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";
import { useNewArtikel } from "../Context/ArtikelContext";

import { FormLabel } from "@mui/joy";
import { Form, FormText } from "react-bootstrap";

import Table from 'react-bootstrap/Table';

export const NewArtikel = () => {
  const { token } = useUser();

  const { listData } = useCustomer();
  const { listNewArtikel } = useNewArtikel();
  console.log("List Costumers:", listData);
  console.log("List Alle Artikel: ", listNewArtikel);
  const [listKunden, setListKunden] = useState([]);
  const [listKundenArtikel, setListKundenArtikel] = useState([]);
  const [kundeArtikel, setKundeArtikel] = useState([]);


  useEffect(() => {
    setListKunden(listData);
    setListKundenArtikel(listNewArtikel);
  }, [listData, listNewArtikel]);


  let kunden = listKunden;
  console.log("Kunden:", kunden);

  let artikel = listKundenArtikel;


  const firmenMap = kunden.map(({ ismi }) => ismi);
  console.log("FirmenMap: ", firmenMap);
  const artikelMap = artikel.map(({ NewartikelName }) => NewartikelName)

  const [value, setValue] = useState("Firma");
  const [inputValue, setInputValue] = useState("");
  


  const [valueArtikel, setValueArtikel] = useState("Artikel");
  const [inputArtikelValue, setInputArtikelValue] = useState();
  const [firmaData, setFirmaData] = useState([]);

  const Find = kunden.find((firma) => firma.ismi === `${value}`);
  console.log("Find: ", Find);

  
  //const rechnungFind = Find.forEach(element => console.log(element));
//console.log("Rechnung find: ", rechnungFind);
 //setFirmaData(rechnungFind)

 
console.log("Firma data: ", firmaData)
const FindArtikel = artikel.find((artikel) => artikel.NewartikelName === `${valueArtikel}`)

// const handleChangeFirma = ()=> {
//   setFirmaData(Find)
// }


console.log("State FirmaData: ", firmaData)
  return token ? (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Ürün Dosyasi</h1>
        <Box sx={{ bgcolor: "#cfe8fc", maxHeight: "80%", padding: "1rem" }}>
        <Box sx={{ flexGrow: 1 }}>
              <Box variant="soft" sx={{ py: 0.4 }}>
                <Box className="d-flex p-3 justify-content-around">
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
                  <Box className="d-flex flex-column fs-4">
                    <Typography level="body1">Müsteri Dosyasi</Typography>
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
                      " Inchaber"
                    )} 
                  </FormText>
                  <FormText>
                    {Find !== undefined ? <b>{Find.plz} </b> : " PLZ"}
                    {Find !== undefined ? <b>{Find.yer} </b> : " Stadt"}
                  </FormText>
                  </Box>
                </Box>
                <hr />
              </Box>
            </Box>
            <br />
            <Box sx={{ height: '50%', width: '100%' }}>
      <Table striped bordered hover variant="standart" responsive="sm">
      <thead>
        <tr>
          <th style={{width: "5%"}}>Ürün kodu</th>
          <th style={{width: "25%"}}>Ürün</th>
          <th>Zutaten</th>
          <th style={{width: "10%"}}>Price</th>
          <th style={{width: "10%"}}>Rabat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td style={{height: 3}}>  
          <Autocomplete
            placeholder="artikel"
            value={valueArtikel}
            onChange={(event, newValueArtikel) => {
              setValueArtikel(newValueArtikel);
            }}
            inputArtikelValue={inputArtikelValue}
            onInputChange={(event, newInputArtikelValue) => {
              setInputArtikelValue(newInputArtikelValue);
            }}
            key={artikelMap}
            options={artikelMap}
            sx={{ width: 350, zIndex: 30 + "!important", borderRadius: 50 }}
            renderInput={(params) => (
              <TextField {...params} label="Artikel" />
            )}
          />
        </td>
          <td>
            <FormLabel>
             {FindArtikel !== undefined ? <b>{FindArtikel.NewartikelBeschreibung} </b> : " Zutaten"}
          </FormLabel>
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
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
          </td>
          <td>Thornton</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
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
          </td>
          <td>@twitter</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
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
          </td>
          <td>@twitter</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
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
          </td>
          <td>@twitter</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
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
          </td>
          <td>@twitter</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
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
          </td>
          <td>@twitter</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
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
          </td>
          <td>@twitter</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
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
          </td>
          <td>@twitter</td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
          <td>
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>
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
          </td>
          <td>3</td>
          <td>
            <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        </td>
          <td>
            <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />
        </td>
        </tr>
      </tbody>
    </Table>
    </Box>
        </Box>

      </Container>
    </Fragment>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
};
