import React, { Fragment, useState, useEffect } from "react";
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
import { FormText, Placeholder } from "react-bootstrap";

import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@mui/icons-material/Delete";

export const NewArtikel = () => {
  const { token } = useUser();

  const { listData, delProduct } = useCustomer();
  const { listNewArtikel } = useNewArtikel();
  const [listKunden, setListKunden] = useState([]);
  const [listKundenArtikel, setListKundenArtikel] = useState([]);

  let kunden = listKunden;

  
  const firmenMap = kunden.map(({ ismi }) => ismi);
  console.log("FirmenMap: ", firmenMap);
  
  let artikel = listKundenArtikel;
  const artikelMap = artikel.map(({ NewartikelName }) => NewartikelName);

  const [valueFirma, setValueFirma] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [valueArtikel, setValueArtikel] = useState("Artikel");
  const [inputArtikelValue, setInputArtikelValue] = useState();
  //const [inputArtikel, setInputArtikel] = useState("");

  const [customerId, setCustomerId] = useState();
  let id = customerId;

  const [customerArtikels, setCustomerArtikels] = useState();

  const { createProduct } = useCustomer();
  // const [firmaData, setFirmaData] = useState([]);

  const Find = kunden.find((firma) => firma.ismi === `${valueFirma}`);
  console.log("Find Firma: ", Find);

  // const FindCustomerArtikel = kunden.map(({artikels}) => artikels.artikelName
  // //  === `${valueArtikles}`
  //  );
  // console.log("Find Firma Artikles: ", FindCustomerArtikel);

  const [customerArtikelData, setCustomerArtikelData] = useState({
    artikelNameCu: "",
    artikelPriceCu: "",
    artikelBeschreibungCu: "",
    artikelKoduCu: "",
  });

  const {
    artikelNameCu,
    artikelKoduCu,
    artikelPriceCu,
    artikelBeschreibungCu,
  } = customerArtikelData;

  const FindArtikel = artikel.find(
    (artikel) => artikel.NewartikelName === `${valueArtikel}`
  );

  // const artikelCustomerMap =  customerArtikels?.map(({_id}) =>
  //     _id
  // )
  // const [customerDeleteArtikelData, setCustomerDeleteArtikelData] = useState({

  //   });

  const [artikelsId, setArtikelsId] = useState();
  const handleDeleteArtikel = () => {
    delProduct(customerId, artikelsId);
    // deleteArtikel()
    console.log("Id Customer Delete", customerId, artikelsId);
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  };
  //   let Id = artikelsId

  // const deleteArtikel = async ()=> {await axios
  // .delete(`${process.env.REACT_APP_API}/customerproduct/deleteproduct/${Id}`, customerId)
  // .then((res) => {

  //   console.log("Delete Customer Artikel OK!");
  // })
  // .catch((error) => {
  //   console.log("Delete Customer Artikel Error:", error.message);
  // });}
  const onClickNein = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  };

  const CloseButton = ({ closeToast }) => (
    <>
      {/* <div className="d-flex flex-column"> */}
      <i className="material-icons" onClick={closeToast}></i>
      <div className="d-flex flex-wrap gap-2">
        <Button
          variant="contained"
          color="success"
          onClick={onClickNein && closeToast}
        >
          Nein
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteArtikel}
        >
          Delete
        </Button>
      </div>
      {/* </div> */}
    </>
  );

  //const toastId = useRef(null);

  const notify = () => {
    toast.error("Bist du sicher diese Artikel löschen?", {
      closeButton: true,
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    });
  };

  useEffect(() => {
    setListKunden(listData);
    setListKundenArtikel(listNewArtikel);
  }, [listData, listNewArtikel]);

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
      artikelBeschreibungCu,
      id
    );

    //const reload = document.querySelector('#reload');
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  };

  const handleChangePrice = (e) => {
    e.preventDefault();
    setCustomerArtikelData({
      ...customerArtikelData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };
  console.log("ValueArtikel:", valueArtikel, inputArtikelValue);
  // console.log("FindArtikel:", FindArtikel);
  console.log("Firma ID:", id);
  console.log("Customer Artikel State:", customerArtikelData);
  console.log("List Costumers:", listData);
  console.log("List Alle Artikel: ", listNewArtikel);
  // console.log("Map Artikel: ", kunden.artikels[0])
  console.log("Kustomer Artikels Array: ", customerArtikels);
  console.log("Kustomer Artikels ID: ", artikelsId);

  //   const reload = document.querySelector('#reload');
  //   const componentDidMount = () => {
  //     reload.window.onbeforeunload = function() {
  //         return true;
  //     };
  // }

  const CustomerArtikelsMap = customerArtikels?.map((artikels, index) => (
    <tr key={index}>
      {/* {artikels !== undefined ? setArtikelsId(artikels.id) : setArtikelsId(undefined)} */}

      <td>{artikels.artikelKodu}</td>
      <td>{artikels.artikelName}</td>
      <td>{artikels.artikelBeschreibung}</td>
      <td>{formatPrice(artikels.artikelPrice)}</td>
      <td>
        <Button
          variant="contained"
          color="error"
          sx={{
            height: 30,
          }}
          onClick={() => {
            setArtikelsId(artikels.id);
            notify();

            // handleDeleteArtikel()
          }}
        >
          <MdDeleteForever />
          &nbsp;Löschen
        </Button>
        <ToastContainer
          transition={Zoom}
          style={{ marginTop: "10rem", width: "300px", bottom: "25rem" }}
          closeButton={CloseButton}
          autoClose={false}
          limit={1}
          toastClassName={
            " relative flex flex-column gap-1 p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
        />
      </td>
    </tr>
  ));

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
                          setCustomerArtikels(Find.artikels);
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
                  <th>Grund Price</th>
                  <th style={{ width: "10%" }}>
                    Price
                    <small> /0.00</small>
                  </th>
                  <th style={{ width: "10%" }}></th>
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
                    <FormText>
                      {FindArtikel !== undefined ? (
                        <b>{formatPrice(FindArtikel.NewartikelPrice)}</b>
                      ) : (
                        " Grund Price"
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
                  <td>
                    <Button
                      id="reload"
                      sx={{ margin: 3 }}
                      size="md"
                      variant="contained"
                      color="primary"
                      onClick={
                        handleAddProduct

                        //   setTimeout(() => {
                        //     window.location.reload(false);
                        //   }, 500);
                        // }
                      }
                    >
                      Create
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* <hr style={{height: ".2rem", backgroundColor:"red"}}/> */}
            <Placeholder as="p" animation="wave">
              <Placeholder xs={12} size="xs" />
            </Placeholder>
            {Find !== undefined ? (
              <b>
                {" "}
                {Find.ismi} &nbsp;|&nbsp; {Find.kisi} &nbsp;|&nbsp;Tel:{" "}
                {Find.telefon} &nbsp;|&nbsp;Mobil: {Find.mobil}
              </b>
            ) : (
              ""
            )}
            <hr />
            {Find !== undefined ? (
              <Box>
                <table className="table">
                  <thead className="dark">
                    <tr>
                      <th scope="col">Kodu</th>
                      <th scope="col">Ürün</th>
                      <th scope="col">Zutaten</th>
                      <th scope="col">Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {CustomerArtikelsMap}
                    {/* {customerArtikels?.map((artikels, index) => (
                      
                    ))} */}
                  </tbody>
                </table>
              </Box>
            ) : (
              "Firma Name"
            )}
            <hr />
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
