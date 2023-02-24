import React, { Fragment, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/material/Autocomplete";
//import parse from "autosuggest-highlight/parse";
//import match from "autosuggest-highlight/match";
import FormControl from "@mui/joy/FormControl";
import { Button, Input } from "@mui/material";
import TextField from "@mui/material/TextField";
//import { DataGrid } from "@mui/x-data-grid";
import DatePicker from "react-date-picker";

import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";
import { FormLabel } from "@mui/joy";
import { Form, FormText } from "react-bootstrap";

import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { BiSave } from "react-icons/bi";
//import { MdDeleteForever } from "react-icons/md";

//import AddArtikelTask from "../Artikel/AddArtikelTask";
//import ArtikelTaskList from "../Artikel/ListArtikelTask";
import { ArtikelTasksProvider } from "../Context/ArtikelTasksContext";
//import { useNewArtikel } from "../Context/ArtikelContext";
//import Stack from '@mui/material/Stack';
//import { DataGrid } from '@mui/x-data-grid';

import { useLieferscheinContext } from "../Context/LieferscheinContext";
import axios from "axios";
import { useParams } from "react-router-dom";



// Befor Jhre vechseln


export const AddLieferschein = () => {
  let initialYear = 2023;

  // Actuel Datum Heute
  const date = new Date();
  let getYear = date.getFullYear();

  const [heuteIst, setHeuteIst] = useState();
  const HeuteDatum = () => {
    const heute =
      String(date.getDate()).padStart(2, "0") +
      "." +
      String(date.getMonth() + 1).padStart(2, "0") +
      "." +
      date.getFullYear();
    setHeuteIst(heute);
    return <strong>{heute}</strong>;
  };
  const { customerId } = useParams();
  const { token } = useUser();
  const { listData, createLieferschein } = useCustomer();

  const { listLieferscheinNummer, addLieferscheinNummerNew } =
    useLieferscheinContext();
  
  // console.log(listLieferscheinNummer, loadLieferscheinNummer);
  // // LieferscheinNummer
  // const [lieferscheinNummer, setLieferscheinNummer] = useState(
  //   {
  //     lieferscheinNummerNew: "",
  //   }
  // );

  // const {
  //   lieferscheinNummerNew,
  // } = lieferscheinNummer

  //Lieferschein State
  // const [newLieferscheinArtikeln, setNewLieferscheinArtikeln] = useState(

  //   {
  //   artikelKoduLe: "",
  //   artikelNameLe: "",
  //   artikelMengeLe: "",
  //   artikelZutatenLe: "",
  //   artikelKistenzahlLe: "",
  //   artikelPriceLe: "",
  // });

  // const {
  //   artikelKoduLe,
  //   artikelNameLe,
  //   artikelMengeLe,
  //   artikelZutatenLe,
  //   artikelKistenzahlLe,
  //   artikelPriceLe,
  // }= newLieferscheinArtikeln;

  // Customer Daten einladen
  // const [valueArtikel, setValueArtikel] = useState("Artikel");
  // const [inputArtikelValue, setInputArtikelValue] = useState();
  // let artikel = listData;
  // const artikelMap = artikel.map(({ NewartikelName }) => NewartikelName);

  const [listKunden, setListKunden] = useState([]);
  const [customerid, setCustomerId] = useState();
  let id = customerid;

const [lieferscheinNummerNew, setLieferscheinNummerNew] = useState();
  // Lieferschein Aktuelnummer rechnen
  let lieferscheinnummer = listLieferscheinNummer;
  const newNummer = lieferscheinnummer.map(
    (nummer) => nummer.lieferscheinNummerNew
  );
  //console.log("Nummer", newNummer, lieferscheinnummer);
  let newNummerLieferschein = Math.max.apply(null, newNummer);
  if (getYear === initialYear) {
    newNummerLieferschein += 1;
  } else {
    newNummerLieferschein += 1000000;
  }

useEffect(() => {
    setListKunden(listData);
    setLieferscheinNummerNew(newNummerLieferschein)
}, [listData, listLieferscheinNummer, newNummerLieferschein]);
  
  // Customer map
  let kunden = listKunden;
  const firmenMap = kunden.map(({ ismi }) => ismi);

  // Customer value select
  const [value, setValue] = useState("Firma");
  const [inputValue, setInputValue] = useState("");

  // Customer nach Firmen name filter
  const findCustomer = kunden.find((firma) => firma.ismi === `${value}`);
  console.log("Customer : ", findCustomer);

  // Leistungs Datum laden auf Lieferschein ein
  const [startDate, setStartDate] = useState(new Date());
  const [datumLeistung, setDatumLeistung] = useState();
  const LeistungsDatum = () => {
    const dateStart = new Date(startDate);
    const start =
      String(dateStart.getDate()).padStart(2, "0") +
      "." +
      String(dateStart.getMonth() + 1).padStart(2, "0") +
      "." +
      dateStart.getFullYear();
    setDatumLeistung(start);
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            //justifyContent: "space-arownd",
          }}
        >
          <FormText>
            &nbsp; Lieferdatum: <strong>{start}</strong>
          </FormText>
          <br />
          <Box sx={{ display: "flex", gap: 3 }}>
            <DatePicker
              key={1}
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Box>
        </Box>
      </>
    );
  };

  // Laden Artikels von Customer
  const [customerArtikels, setCustomerArtikels] = useState([]);

  const [valueArtikel, setValueArtikel] = useState("Artikel");
  const [inputArtikelValue, setInputArtikelValue] = useState();
  const [inputArtikel, setInputArtikel] = useState([
    {
      inputArtikelNameIn: "",
      inputArtikelMengeIn: "",
      inputArtikelEinheitIn: "",
      inputArtikelKistenIn: "",
    },
  ]);
  

  useEffect(() => {
    if (findCustomer !== undefined) {
      setCustomerId(findCustomer?.id);
      setCustomerArtikels(findCustomer.artikels);
    }
    if (inputArtikel !== null) {
      setInputArtikelLe(inputArtikel);
    }
      
  }, [findCustomer, inputArtikel]);

  const FindArtikel = customerArtikels?.map((artikels) => artikels);
  // const artikelMap = FindArtikel.map(({ artikelName }) => artikelName);
  // const FindArtikelName = FindArtikel.find(
  //   (artikel) => artikel.artikelName === `${valueArtikel}`
  // );
  //const findArtikelName = customerArtikels.map(( artikels ) => artikels);
  // const findArtikelBeschreibung = customerArtikels.map(({ artikelBeschreibung
  // }) => artikelBeschreibung
  // );
  console.log("Find Artikels: ", FindArtikel);




  const [inputArtikelLe, setInputArtikelLe] = useState([]);

  console.log("Input Artikel Array: ",inputArtikelLe);

  const {
    inputArtikelNameIn,
    inputArtikelMengeIn,
    inputArtikelEinheitIn,
    inputArtikelKistenIn,
  } = inputArtikelLe;


  const handleInputChange = (index, event) => {
    const list = [...inputArtikel];
    list[index][event.target.name] = event.target.value;
    setInputArtikel(list);

  };

  const handleRemoveClick = (i) => {
    const list = [...inputArtikel];

    list.splice(i, 1);
    setInputArtikel(list);
  };


  const handleAddClick = (i) => {
    let newFeld = {
      inputArtikelNameIn: "",
      inputArtikelMengeIn: "",
      inputArtikelEinheitIn: "",
      inputArtikelKistenIn: "",
    };
    setInputArtikel([...inputArtikel, newFeld]);
  };
  // const [artikelData, setArtikelData] = useState([]);
  // console.log("Artikel Data: ", artikelData);
  const [addDataLieferschein, setAddDataLieferschein] = useState();
  // Lieferschein State submit
  // const onChangeArtikelLe = (e, index) => {
  //    e.preventDefault();
  //   const { name, value } = e.target;
  //    const list = [...inputArtikel];
  //    list[index][name] = value;
  //   setInputArtikel([{...list, [e.target.name]: e.target.value}]);
  //   //setNewLieferscheinArtikeln({ ...newLieferscheinArtikeln, [e.target.name]: e.target.value });
  // };

  // const handleChangeMenge = (e, index) => {
  //   //e.preventDefault();
  //   const list = [...inputArtikel];
  //   list[index].value = e.target.value;
  //   // const { name, value, } = e.target;
  //   // const list = [...inputArtikel];
  //   // list[index][name] = e.target.value;
  //   setInputArtikel([{...list, [e.target.name]: e.target.value}] );
  //   // setInputArtikel({ ...inputArtikel, [e.target.name]: e.target.value });

  // };
  const submit = (e) => {
    e.preventDefault();
    const data =
      {
         lieferscheinArtikels: [...inputArtikelLe],
        lieferscheinNummer: newNummerLieferschein,
        lieferscheinDatum: heuteIst,
        leistungDatum: datumLeistung,
      lieferant: "",
        id
    }
    axios
      .post(
        `${process.env.REACT_APP_API}/customerlieferschein/addlieferschein/${id}`,
        data
      )
      .then((res) => {
        setAddDataLieferschein(res.data);
        console.log("Push Data: ", data);
      })
      .catch((error) => {
        console.log("Push Data: ", data);
        console.log("Create new Customer Error:", error.message);
      });
    
    addLieferscheinNummerNew(
      lieferscheinNummerNew,
      token
    );
    setTimeout(() => {
      window.location.reload(false);
    }, 200);
  };
  //console.log("LieferscheinNummer Axios:", lieferscheinNummerNew );


  // Print die Lieferschein
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return token ? (
    <Fragment>
      <CssBaseline />
      <ArtikelTasksProvider>
        <Container maxWidth="l">
          <br />
          <Box
            sx={{
              bgcolor: "#EAEDF0",
              maxHeight: "100%",
              minHeight: "75vh",
              padding: "1rem",
            }}
            id="printablediv"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Box variant="soft" sx={{ py: 0.4 }}>
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column">
                    <Typography>Öz Güven Warenhandels GmbH</Typography>
                    <Typography>Keplerstr. 13/15, 50823 Köln</Typography>
                  </div>
                  <div className="d-flex flex-column">
                    <Typography>Tel: 0221/562163</Typography>
                    <Typography>Fax. 0221/525479</Typography>
                  </div>
                </div>
                <hr />
                <h1>Lieferschein</h1>
                <Box className="d-flex p-3 justify-content-between">
                  <Box className="d-flex flex-column">
                    <Typography level="body1">Kundenangaben</Typography>

                    <FormText key={2}>
                      {/* <Typography component="b">Firma: </Typography> */}
                      {findCustomer !== undefined ? (
                        <b>{findCustomer.hitab} </b>
                      ) : (
                        " An das"
                      )}
                      {findCustomer !== undefined ? (
                        <b> {findCustomer.ismi}</b>
                      ) : (
                        " Name"
                      )}
                    </FormText>

                    <FormText key={3}>
                      {findCustomer !== undefined ? (
                        <b>{findCustomer.cadde}</b>
                      ) : (
                        " Straße & Nummer"
                      )}
                    </FormText>
                    <FormText>
                      {findCustomer !== undefined ? (
                        <b>{findCustomer.kisi}</b>
                      ) : (
                        " Straße & Nummer"
                      )}
                    </FormText>

                    <FormText key={4}>
                      {findCustomer !== undefined ? (
                        <b>{findCustomer.plz} </b>
                      ) : (
                        " PLZ"
                      )}
                      {findCustomer !== undefined ? (
                        <b>{findCustomer.yer} </b>
                      ) : (
                        " Stadt"
                      )}
                    </FormText>
                  </Box>
                  <Box className="d-flex flex-column padding-right-6 w-25">
                    <Typography level="body1">
                      Lieferschein -Nr.:
                      {newNummerLieferschein}
                    </Typography>
                    <FormText>
                      Kundennummer{" "}
                      {findCustomer !== undefined ? (
                        <b>{findCustomer.kodu} </b>
                      ) : (
                        "none"
                      )}
                    </FormText>

                    <FormText>
                      Datum:
                      <HeuteDatum />
                    </FormText>
                    <LeistungsDatum />
                    <hr />
                    <Typography>Lieferant: Ali Mehmed</Typography>
                    <Typography>Kennzeichen: K OS 0101</Typography>
                  </Box>
                </Box>
                <hr />
              </Box>
            </Box>
            <br />
            <Box sx={{ height: "50%", width: "100%" }}>
              <div className="d-flex border-top border-bottom">
                <Typography
                  sx={{ paddingLeft: "4rem", width: "12rem", height: "2rem" }}
                >
                  Nr:
                </Typography>
                <Typography sx={{ width: "17rem", height: "2rem" }}>
                  Ware
                </Typography>
                <Typography sx={{ width: "17rem", height: "2rem" }}>
                  Zutaten
                </Typography>
                <Typography sx={{ width: "7rem", height: "2rem" }}>
                  Menge
                </Typography>
                <Typography sx={{ width: "7rem", height: "2rem" }}>
                  Retour
                </Typography>
                <Typography sx={{ width: "7rem", height: "2rem" }}>
                  Kistenanzahl
                </Typography>
              </div>
              {inputArtikel.map((x, index) => {
                return (
                  <>
                    <div className="d-flex flex-wrap justify-content-around">
                      <div
                        key={index}
                        className="d-flex border-top border-bottom"
                      >
                        <TextField
                          style={{ width: "2rem", height: "2rem" }}
                          id="outlined-read-only-input"
                          label={x.artikelKodu}
                          name="artikelKodu"
                          value={x.artikelKodu}
                          defaultValue={index + 1}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                          size="small"
                        ></TextField>
                        <Form.Label
                          // key={i}
                          htmlFor="input"
                          style={{
                            //  marginRight: "2rem",
                            //width: "18.5rem",
                            fontFamily: "Roboto",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                          }}
                        ></Form.Label>
                        <Form.Select
                          // key={i}
                          // onChange={(event, newValue) => {
                          //   setValue(newValue);
                          // }}
                          inputValue={inputArtikelValue}
                          onInputChange={(event, newInputArtikelValue) => {
                            setInputArtikelValue(newInputArtikelValue);
                          }}
                          name="inputArtikelNameIn"
                          style={{ width: "20rem", height: "2rem" }}
                          value={x.inputArtikelNameIn}
                          onChange={(event, newInputArtikelValue) => {
                            handleInputChange(index, event);
                            setValueArtikel(newInputArtikelValue);
                          }}
                          >
                          <option></option>
                          {FindArtikel.map((artikel, k) => (
                            <option
                            value={k.inputArtikelNameIn}
                            name={inputArtikelNameIn}
                            key={k}
                            >
                              {artikel.artikelName}
                            </option>
                          ))}
                        </Form.Select>
                        {/* <div>{`${valueArtikel !== null ? `'${valueArtikel}'` : 'null'}`}</div> */}
                        <TextField
                          key={index}
                          style={{ width: "20rem", height: "2rem" }}
                          id="outlined-read-only-input"
                          //label="Read Only"
                          //defaultValue=
                          //{customerArtikels[index]?.artikelBeschreibung}
                          // {FindArtikel[index + 1]?.artikelBeschreibung}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                          size="small"
                        />
                        <Form.Control
                          // key={x.id}
                          variant="outlined"
                          style={{ width: "7rem", height: "2rem" }}
                          name="inputArtikelMengeIn"
                          placeholder="Menge"
                          value={x.inputArtikelMengeIn}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <div
                          // key={i}


                          className="border border-dark"
                          style={{ width: "7rem", height: "2rem" }}
                        ></div>
                        {/* <Form.Control
                            variant="outlined"
                            
                            name="retour"
                            placeholder="Retour"
                            value={x.artikelEinheitLe}
                            onChange={(e) => handleInputChange(e, i)}
                          /> */}
                        <Form.Control
                          // key={i}
                          style={{ width: "7rem", height: "2rem" }}
                          name="inputArtikelKistenIn"
                          placeholder="Kisten"
                          value={x.inputArtikelKistenIn}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </div>
                      <div
                        // key={i}
                        className="d-flex flex-row gap-1"
                      >
                        {inputArtikel.length !== 1 && (
                          <Button
                            color="error"
                            variant="outlined"
                            style={{ width: "5rem", height: "2rem" }}
                            onClick={() => handleRemoveClick(index)}
                          >
                            Löschen
                          </Button>
                        )}
                      </div>
                    </div>
                    {!findCustomer
                      ? null
                      : inputArtikel.length - 1 === index && (
                          <Button
                            color="success"
                            variant="outlined"
                            style={{ width: "5rem", height: "2rem" }}
                            onClick={() => handleAddClick(index)}
                          >
                            Neue
                          </Button>
                        )}
                  </>
                );
              })}
            </Box>
          </Box>
          <div className="d-flex flex-wrap justify-content-start">
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
            {/* <FormControl sx={{ marginTop: "1rem" }}>
              <FormLabel>Hier eine Artikel wählen</FormLabel>
              <AddArtikelTask />
            </FormControl> */}
          </div>
          <div className="d-flex flex-wrap flex-row-reverse">
            <div className="d-flex flex-wrap mt-3 gap-3 pb-5">
              <Button
                variant="outlined"
                sx={{
                  height: 40,
                }}
                onClick={submit}
              >
                <BiSave />
                &nbsp;Zwischenspeichern
              </Button>

              <Button
                variant="outlined"
                sx={{
                  height: 40,
                }}
              >
                <BsFillFileEarmarkPdfFill />
                &nbsp;Speichern in PDF
              </Button>

              <Button
                variant="contained"
                color="success"
                sx={{
                  height: 40,
                }}
                onClick={Print}
              >
                <AiFillPrinter />
                &nbsp;Drucken
              </Button>
              {/* <Button
                variant="contained"
                color="error"
                sx={{
                  height: 40,
                }}
              >
                <MdDeleteForever />
                &nbsp;Delete
              </Button> */}
            </div>
          </div>
        </Container>
      </ArtikelTasksProvider>
    </Fragment>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
};
