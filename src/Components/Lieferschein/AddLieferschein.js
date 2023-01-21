import React, { Fragment, useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/material/Autocomplete";
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
import { MdDeleteForever } from "react-icons/md";

//import AddArtikelTask from "../Artikel/AddArtikelTask";
//import ArtikelTaskList from "../Artikel/ListArtikelTask";
import { ArtikelTasksProvider } from "../Context/ArtikelTasksContext";
import { useNewArtikel } from "../Context/ArtikelContext";


// const columns = [
//   { field: "id", headerName: "ID", width: 60 },
//   // { field: 'kodu', headerName: 'Müsteri kodu', width: 100, sortable: true, },
//   {
//     field: "artikelName",
//     headerName: "Artikel",
//     width: 150,
//     editable: true,
//     sortable: true,
//   },
//   {
//     field: "artikelBeschreibung",
//     headerName: "Beschreibung",
//     type: "text",
//     width: 150,
//     editable: true,
//     sortable: true,
//   },
//   {
//     field: "artikelPrice",
//     headerName: "Price",
//     description: "Einzel Price",
//     sortable: true,
//     width: 250,
//     //   valueGetter: (params) =>
//     //     `${params.row.cadde || ''}, ${params.row.plz || ''} ${params.row.yer|| ''}`,
//   },
//   {
//     field: "artikelMenge",
//     headerName: "Menge",
//     type: "number",
//     width: 120,
//     editable: true,
//     sortable: true,
//   },
// ];

// const artikel = [
//   {
//     id: "1",
//     artikelName: "Brot pide",
//     artikelBeschreibung: "250 gr",
//     artikelPrice: "0.80",
//     artikelMenge: "25",
//   },
//   {
//     id: 2,
//     artikelName: "Lachmadgun",
//     artikelBeschreibung: "Halbar",
//     artikelPrice: "1.80",
//     artikelMenge: "120",
//   },
//   {
//     id: 3,
//     artikelName: "Börek klein",
//     artikelBeschreibung: "Hackfleisch, Zwiebel, Petersilie",
//     artikelPrice: "2.50",
//     artikelMenge: "80",
//   },
//   {
//     id: 4,
//     artikelName: "Döner Pide",
//     artikelBeschreibung: "180 gr",
//     artikelPrice: "3.50",
//     artikelMenge: "250",
//   },
// ];
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

export const AddLieferschein = () => {
  const { token } = useUser();
  const { createLieferschein, listData } = useCustomer();

  const [newLieferschein, setNewLieferschein] = useState({
    artikelKodu: "",
    artikelName: "",
    artikelMenge: "",
    artikelZutaten: "",
    artikelKistenzahl: "",
  });

const {
  artikelKodu,
  artikelName,
  artikelMenge,
  artikelZutaten,
  artikelKistenzahl,
  } = newLieferschein;
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

    const dateStart = new Date(startDate);
    const start =
      String(dateStart.getDate()).padStart(2, "0") +
      "." +
      String(dateStart.getMonth() + 1).padStart(2, "0") +
      "." +
      dateStart.getFullYear();

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
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Box>
        </Box>
      </>
    );
  };
  const { listNewArtikel } = useNewArtikel();

  const [listArtikel, setListArtikel] = useState([]);
  useEffect(() => {
    setListArtikel(listNewArtikel);
  }, [listNewArtikel]);

  let artikel = listArtikel;
  console.log("Artikel:", artikel);
  const [inputArtikel, setInputArtikel] = useState([
    {
      artikelNameLe: "",
      artikelMengeLe: "",
      artikelEinheitLe: "",
      artikelKistenLe: "",
    },
  ]);
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputArtikel];
  //   list[index][name] = value;
  //   setInputArtikel(list);
  // };
  const handleRemoveClick = (index) => {
    const list = [...inputArtikel];
    list.splice(index, 1);
    setInputArtikel(list);
  };
  const handleAddClick = () => {
    setInputArtikel([
      ...inputArtikel,
      {
        artikelNameLe: "",
        artikelMengeLe: "",
        artikelEinheitLe: "",
        artikelKistenLe: "",
      },
    ]);
  };
  const Print = () =>{     
    //console.log('print');  
    let printContents = document.getElementById('printablediv').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  }
  const onChangeArtikelLe = (e, index) => {
    // e.preventDefault();
    const { name, value } = e.target;
    const list = [...inputArtikel];
    list[index][name] = value;
    setInputArtikel(list);
    setNewLieferschein({ ...newLieferschein, [e.target.name]: e.target.value });
  };

  const handleCheckMenge = (e) => {
    e.preventDefault();
    setNewLieferschein({ ...newLieferschein, [e.target.name]: e.target.value });
  };
  console.log("Lieferschein: ", newLieferschein);

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
            }} id='printablediv'
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
                      Lieferschein -Nr.: {"012225325"}
                    </Typography>
                    <FormText>
                      Kundennummer{" "}
                      {Find !== undefined ? <b>{Find.kodu} </b> : "none"}
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
                        <Typography sx={{paddingLeft:"4rem", width: "12rem", height: "2rem" }}>
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
                {inputArtikel.map((x, i) => {
                  return (
                    <>
                      
                      <div className="d-flex flex-wrap justify-content-around">
                        <div className="d-flex border-top border-bottom">
                          
                          <TextField
                          key={i}
                            style={{ width: "2rem", height: "2rem" }}
                            id="outlined-read-only-input"
                            label={x.artikelKodu}
                            name="artikelKodu"
                            defaultValue={artikel.NewartikelKodu !== undefined ? `${artikel.NewartikelKodu}` : i}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                            size="small"
                          />
                          <Form.Label
                          key={i}
                            htmlFor="input"
                            style={{
                              //  marginRight: "2rem",
                              //width: "18.5rem",
                              fontFamily: "Roboto",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                            }}
                          >
                            <Form.Select
                            key={i}
                              name="artikelNameLe"
                              style={{ width: "20rem", height: "2rem" }}
                              value={x.artikelName}
                              onChange={onChangeArtikelLe}
                              // onChange={e => {
                              //   dispatch({
                              //     type: 'changed',
                              //     task: {
                              //       ...task,
                              //       NewartikelName: e.target.value
                              //     }
                              //   });
                              // }}
                            >
                              {listArtikel.map((artikel, k) => (
                                <option name={artikel.NewartikelName} key={k}>
                                  {artikel.NewartikelName}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Label>
                          <TextField
                          key={i}
                            style={{ width: "20rem", height: "2rem" }}
                            id="outlined-read-only-input"
                            //label="Read Only"
                            defaultValue="Mehl, Zucker, Wasser"
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="standard"
                            size="small"
                          />
                          <Form.Control
                          key={i}
                            variant="outlined"
                            style={{ width: "7rem", height: "2rem" }}
                            name="artikelMengeLe"
                            placeholder="Menge"
                            value={x.artikelMenge}
                            onChange={(e) => handleCheckMenge(e)}
                          />
                          <div 
                          className="border border-dark"
                          style={{ width: "7rem", height: "2rem" }}
                          >
                          </div>
                          {/* <Form.Control
                            variant="outlined"
                            
                            name="retour"
                            placeholder="Retour"
                            value={x.artikelEinheitLe}
                            onChange={(e) => handleInputChange(e, i)}
                          /> */}
                          <Form.Control
                          key={i}
                            style={{ width: "7rem", height: "2rem" }}
                            name="kisten"
                            placeholder="Kisten"
                            value={"artikelKistenLe"}
                            //onChange={(e) => handleKistenChange()}
                          />
                        </div>
                        <div className="d-flex flex-row gap-1">
                          {inputArtikel.length !== 1 && (
                            <Button
                              color="error"
                              variant="outlined"
                              style={{ width: "5rem", height: "2rem" }}
                              onClick={() => handleRemoveClick(i)}
                            >
                              Löschen
                            </Button>
                          )}
                        </div>
                      </div>
                      {inputArtikel.length - 1 === i && (
                        <Button
                          color="success"
                          variant="outlined"
                          style={{ width: "5rem", height: "2rem" }}
                          onClick={handleAddClick}
                        >
                          Neue
                        </Button>
                      )}
                    </>
                  );
                })}
              
              {/* <DataGrid
              rows={artikel}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              // checkboxSelection
              // disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            /> */}

              {/* <ArtikelTaskList /> */}
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

              <Button
                variant="contained"
                color="success"
                sx={{
                  height: 40,
                }}
                onClick={Print}
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
      </ArtikelTasksProvider>
    </Fragment>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
};
