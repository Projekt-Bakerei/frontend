import React, { Fragment, useState, useEffect, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/joy/FormControl";
import TextField from "@mui/material/TextField";
//import { DataGrid } from '@mui/x-data-grid';

import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";
import { useNewArtikel } from "../Context/ArtikelContext";

import { FormLabel } from "@mui/joy";
import { FormText } from "react-bootstrap";

import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";

import { useParams } from "react-router-dom";
export const NewArtikel = () => {
  const { token } = useUser();

  const { listData } = useCustomer();
  const { listNewArtikel } = useNewArtikel();
  console.log("List Costumers:", listData);
  console.log("List Alle Artikel: ", listNewArtikel);
  const [listKunden, setListKunden] = useState([]);
  const [listKundenArtikel, setListKundenArtikel] = useState([]);

  const params = useParams();

  let kunden = listKunden;

  let artikel = listKundenArtikel;

  const firmenMap = kunden.map(({ ismi }) => ismi);
  console.log("FirmenMap: ", firmenMap);
  const artikelMap = artikel.map(({ NewartikelName }) => NewartikelName);

  const [valueFirma, setValueFirma] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [valueArtikel, setValueArtikel] = useState("Artikel");
  const [inputArtikelValue, setInputArtikelValue] = useState();
  //const [inputArtikel, setInputArtikel] = useState("");

  const [customerId, setCustomerId] = useState();
  let id = customerId;

  const { createProduct } = useCustomer();
  // const [firmaData, setFirmaData] = useState([]);

  const Find = kunden.find((firma) => firma.ismi === `${valueFirma}`);
  console.log("Find Firma: ", Find);

  const [customerArtikelData, setCustomerArtikelData] = useState({
    artikelNameCu: "",
    artikelPriceCu: "",
    artikelBeschreibungCu: "",
    // artikelRabatCu: "",
    artikelKoduCu: "",
  });
  console.log("Customer Artikel State:", customerArtikelData);

  const {
    artikelNameCu,
    artikelKoduCu,
    artikelPriceCu,
    artikelBeschreibungCu,
  } = customerArtikelData;

  //console.log("Firma data: ", firmaData)
  const FindArtikel = artikel.find(
    (artikel) => artikel.NewartikelName === `${valueArtikel}`
  );

  useEffect(() => {
    setListKunden(listData);
    setListKundenArtikel(listNewArtikel);
  }, [listData, listNewArtikel, valueArtikel]);

  const handleChangeName = (e) => {
    e.preventDefault();
    setCustomerArtikelData(
      {
        ...customerArtikelData,
        [e.target.name]: e.target.value,
        artikelBeschreibungCu: FindArtikel.NewartikelBeschreibung,
        artikelKoduCu: FindArtikel.NewartikelKodu,
      },
      token,
      id
    );
  };
  const handleAddProduct = () => {
    createProduct(
    artikelNameCu,
    artikelKoduCu,
    artikelPriceCu,
    artikelBeschreibungCu, id);
  };

  const handleChangePrice = (e) => {
    e.preventDefault();
    setCustomerArtikelData({
      ...customerArtikelData,
      [e.target.name]: e.target.value,
    });
  };
  // useEffect(() => {
  //   if (id) {
  //     kunden({ id, setCustomerArtikelData, token });
  //     window.scrollTo(0, 0)
  //   }
  // }, [kunden, id, token]);

  console.log("ValueArtikel:", valueArtikel, inputArtikelValue);
  console.log("FindArtikel:", FindArtikel);
  console.log("Firma ID:", id);

  return token ? (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Ürün Dosyasi</h1>
        <Box sx={{ bgcolor: "#EAEDF0", maxHeight: "80%", padding: "1rem" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Box variant="soft" sx={{ py: 0.4 }}>
              <Box className="d-flex p-3 justify-content-around">
                <FormControl id="controllable" sx={{ marginTop: "1rem" }}>
                  <FormLabel>Hier eine Firma wählen</FormLabel>
                  <Autocomplete
                    placeholder="Müsteri ara"
                    value={valueFirma}
                    onChange={(event, newValue) => {
                      setValueFirma(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    key={firmenMap}
                    options={firmenMap}
                    sx={{
                      width: 350,
                      zIndex: 30 + "!important",
                      borderRadius: 50,
                    }}
                    // isOptionEqualToValue={(option, value) =>
                    //   option.newValue === value
                    // }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onSelect={() => {
                          setCustomerId(Find.id);
                        }}
                        label="Ismiyle | Müsteri ara"
                      />
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
                    {Find !== undefined ? <b>{Find.kisi}</b> : " Inchaber"}
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
          <Box sx={{ height: "50%", width: "100%" }}>
            <Table striped bordered hover variant="standart" responsive="sm">
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>Ürün kodu</th>
                  <th style={{ width: "25%" }}>Ürün</th>
                  <th>Zutaten</th>
                  <th style={{ width: "10%" }}>
                    Price
                    <small> /0.00</small>
                  </th>
                  <th style={{ width: "10%" }}>Rabat(beta)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FormText>
                      {FindArtikel !== undefined ? (
                        <b>{FindArtikel.NewartikelKodu}</b>
                      ) : (
                        " Kodu"
                      )}
                    </FormText>
                  </td>
                  <td style={{ height: 3 }}>
                    <Autocomplete
                      placeholder="Artikel"
                      // value={valueArtikel}
                      name="artikelNameCu"
                      onChange={(e, newValueArtikel) => {
                        // handleChangeBeschreibung(e);
                        setValueArtikel(newValueArtikel);
                      }}
                      inputValue={inputArtikelValue}
                      onInputChange={(e, newInputArtikelValue) => {
                        setInputArtikelValue(newInputArtikelValue);
                      }}
                      key={artikelMap}
                      options={artikelMap}
                      sx={{
                        width: 350,
                        zIndex: 30 + "!important",
                        borderRadius: 50,
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          onSelect={(e) => handleChangeName(e)}
                          name="artikelNameCu"
                          value={!artikelNameCu ? { valueArtikel } : "Artikel"}
                          // onChange={(e)=>handleChangeName(e)}
                        />
                      )}
                    />
                    {/* <Updates updates={updates.current} /> */}
                  </td>
                  <td>
                    <FormText>
                      {FindArtikel !== undefined ? (
                        <b>{FindArtikel.NewartikelBeschreibung}</b>
                      ) : (
                        " Zutaten"
                      )}
                    </FormText>
                  </td>
                  <td>
                    <TextField
                      id="input"
                      // label="Price"
                      type="number"
                      placeholder="Price"
                      name="artikelPriceCu"
                      value={artikelPriceCu}
                      multiline
                      maxRows={4}
                      variant="standard"
                      onChange={(e) => handleChangePrice(e)}
                    />
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <hr />
            <Button
              sx={{ margin: 3 }}
              size="md"
              variant="contained"
              color="primary"
              onClick={
                handleAddProduct
                // setTimeout(() => {
                //   window.location.reload(false);
                // }, 500);
              }
            >
              Create
            </Button>
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
