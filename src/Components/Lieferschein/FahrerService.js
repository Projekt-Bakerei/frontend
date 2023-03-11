import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";

import {
  Autocomplete,
  FormControl,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useUser } from "../Context/UserContext";
import { Button } from "@mui/joy";

import { IoMdArrowRoundBack } from "react-icons/io";
import { useCustomer } from "../Context/CustomerContext";
import { useMiterbeiter } from "../Context/MiterbeiterContext";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
        Zurück
      </Button>
    </>
  );
};

function FahrerService() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const { token } = useUser();
  const { listData } = useCustomer();
  const { listFahrer } = useMiterbeiter();
  const [listKunden, setListKunden] = useState([]);
  const [listFahrerService, setListFahrerService] = useState([]);

  let kunden = listKunden;

  const [valueFahrer, setValueFahrer] = useState("");
  const [inputValue, setInputValue] = useState("");

  let fahrer = listFahrerService;
  const fahrerMap = fahrer.map(({ mName }) => mName);
  //console.log(firmenMap, kunden);
  const firmenMap = kunden?.map((customer) => {
    return customer;
  });
  const filteredData = firmenMap?.filter((obj) => {
    return obj.lieferscheins.find(
      (object) => object.lieferant
    );
  });

  const findFahrer = filteredData?.map(({ lieferscheins }) => {
    return lieferscheins
  });
  const flatFahrer = findFahrer?.flat()


  useEffect(() => {
    setListKunden(listData);
    setListFahrerService(listFahrer);
  }, [listData, listFahrer]);


  function search(array, condition) {
    if (array.length === 0) {
      return [];
    }
    const [head, ...tail] = array;
    if (condition(head)) {
      return [head, ...search(tail, condition)];
    }
    return search(tail, condition);
  }

  const searchLieferscheins = search(
    flatFahrer,
    (fahrer) => fahrer?.lieferant === `${valueFahrer}`
  );

  //  console.log("Search: ", searchLieferscheins);
  // console.log("FilterData: ", filteredData);
  // console.log("Flat Fahrer Lieferscheins:", flatFahrer);
  // console.log("Array: ", arrayLieferscheins);
  // filteredData?.forEach(element => console.log(element.lieferscheins.find(obj => obj.lieferant === `${valueFahrer}`)));

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };
  return (
    <Fragment>
      <CssBaseline />

      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: "5vw !important",
          paddingRight: "5vw !important",
          marginTop: "5vw !important",
        }}
      >
        <Typography textColor="neutral.500" fontSize="xl" fontWeight="lg">
          {bull} Fahrer Service
        </Typography>
        <BackButton />

        <hr />
        {token ? (
          <>
            {/* <BelegeMenu /> */}
            <FormControl
              id="controllable"
              sx={{ marginTop: "1rem", marginLeft: "1rem" }}
            >
              <FormLabel sx={{ margin: "1rem" }}>
                Hier ein Fahrer wählen
              </FormLabel>
              <Autocomplete
                placeholder="Fahrer Name"
                value={valueFahrer}
                onChange={(event, newValue) => {
                  setValueFahrer(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                key={fahrerMap}
                options={fahrerMap}
                sx={{
                  width: 350,
                  zIndex: 30 + "!important",
                  borderRadius: 50,
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onSelect={() => {
                      //setCustomerId(Find.id);
                      // setCustomerArtikels(Find.artikels);
                    }}
                    label="Fahrer Name"
                  />
                )}
              />
            </FormControl>
            <hr />
            {searchLieferscheins !== undefined ? (
              <Box id="Accordion" sx={{ marginTop: "2rem" }}>
                {searchLieferscheins.map((lieferschein, i) => (
                  <>
                    <Accordion
                      expanded={expanded === i}
                      onChange={handleChange(i)}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography
                          sx={{ width: "20%", color: "text.secondary" }}
                        >
                          vom Datum: <b>{lieferschein.lieferscheinDatum}</b>
                        </Typography>
                        <Typography sx={{ width: "33%", flexShrink: 1 }}>
                          Lieferschein Nummer:{" "}
                          <b>{lieferschein.lieferscheinNummer}</b>
                        </Typography>
                        <Typography
                          sx={{ width: "33%", color: "text.secondary" }}
                        >
                          Leistung Datum: <b>{lieferschein.leistungDatum}</b>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box sx={{ width: "100%" }}>
                          <TableContainer component={Paper}>
                            <Table
                              sx={{ minWidth: 650 }}
                              aria-label="caption table"
                            >
                              <caption>Ware ordnungsgemäß erhalten</caption>
                              <TableHead>
                                <TableRow>
                                  <TableCell align="left">Kodu</TableCell>
                                  <TableCell align="left">
                                    Artikel Name
                                  </TableCell>
                                  <TableCell align="right">Menge</TableCell>
                                  <TableCell align="right">Price</TableCell>
                                  <TableCell align="right">Kisten</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {lieferschein.lieferscheinArtikelsDb.map(
                                  (artikel, i) => (
                                    <TableRow key={i}>
                                      <TableCell component="th" scope="row">
                                        {artikel.inputArtikelKoduIn}
                                      </TableCell>
                                      <TableCell align="left">
                                        {artikel.inputArtikelNameIn}
                                      </TableCell>
                                      <TableCell align="right">
                                        {artikel.inputArtikelMengeIn} Stk.
                                      </TableCell>
                                      <TableCell align="right">
                                        {formatPrice(
                                          artikel.inputArtikelPriceIn
                                        )}
                                      </TableCell>
                                      <TableCell align="right">
                                        {artikel.inputArtikelKistenIn} Stk.
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </>
                ))}
              </Box>
            ) : null}
          </>
        ) : (
          <Typography textColor="red" fontSize="xl" fontWeight="lg">
            Du bist nicht angemeldet!
          </Typography>
        )}
        <Grid
          container
          spacing={2}
          gap={2}
          marginTop={5}
          padding={5}
          className="d-flex flex-column"
        ></Grid>
      </Container>
    </Fragment>
  );
}

export default FahrerService;
