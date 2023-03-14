import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";

import { Grid } from "@mui/material";
import { useUser } from "../Context/UserContext";
import { Button } from "@mui/joy";

import { IoMdArrowRoundBack } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { useCustomer } from "../Context/CustomerContext";

import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

function Ausgangsbelege() {
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
  const [listKunden, setListKunden] = useState([]);
  let kunden = listKunden;
  useEffect(() => {
    setListKunden(listData);
  }, [listData]);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const firmenMap = kunden?.map((customer) => {
    return customer;
  });

  // Actuel Datum Heute
  const date = new Date();
    const heute =
      String(date.getDate()).padStart(2, "0") +
      "." +
      String(date.getMonth() + 1).padStart(2, "0") +
      "." +
    date.getFullYear();
  
    const [value, setValue] = useState(date); 
  let celDate = dayjs(value).format('DD.MM.YYYY')

  const filteredData = firmenMap?.filter((obj) => {
    return obj.lieferscheins.find(
      (object) => object.leistungDatum === celDate
    );
  });
  
  const findDate = filteredData?.map(({ lieferscheins }) => {
    return lieferscheins;
  });
  const flatDate = findDate?.flat();

  const listDataLiferchein = filteredData?.map((obj) => obj);

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

  const searchLeistungDatum = search(
    flatDate,
    (obj) => obj?.leistungDatum  === `${value}`
  );
    
  console.log("Filtered Data:", filteredData);
  const handleChangeInput = (e) => {
    e.preventDefault();
    setValue({ [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <CssBaseline />

      <Container maxWidth="xl">
        <Typography textColor="neutral.500" fontSize="xl" fontWeight="lg">
          {bull} Ausgangsbelege: <strong>{heute}</strong>
        </Typography>
        <BackButton />
        <hr />
        {token ? (
          <>
            <div className="d-flex align-items-center flex-wrap">
              <Typography textAlign="left">
                Aufgaben für den heutigen Tag&nbsp;|&nbsp;Tag auswählen:
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack
                  spacing={3}
                  sx={{
                    marginLeft: "1rem",
                    width: "12rem",
                    height: "3rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  <DatePicker
                    mask="__.__.____"
                    views={["day"]}
                    inputFormat="DD.MM.YYYY"
                    label="Leistung Datum"
                    placeholder="Leistung Datum"
                    value={value}
                    onChange={(newValue, e) => {
                      setValue(newValue);
                      handleChangeInput(e);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <hr />
            {/* <LiefersceinMap /> */}
            {searchLeistungDatum !== undefined ? (
              <Box id="Accordion" sx={{ marginTop: "2rem" }}>
                {listDataLiferchein?.map((firma, index) => (
                  <>
                    {firma.lieferscheins.map((lieferschein, i) =>
                      lieferschein.leistungDatum === celDate ? (
                        <>
                          <Accordion
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                          >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography
                                sx={{ width: "20%", color: "text.secondary" }}
                              >
                                <span>an {firma.hitab}:</span>{" "}
                                <b>{firma.ismi}</b>
                              </Typography>

                              <Typography
                                sx={{ width: "20%", color: "text.secondary" }}
                              >
                                vom Datum:{" "}
                                <b>{lieferschein.lieferscheinDatum}</b>
                              </Typography>
                              <Typography sx={{ width: "33%", flexShrink: 1 }}>
                                Lieferschein Nummer:{" "}
                                {lieferschein.leistungDatum === celDate ? (
                                  <b>{lieferschein.lieferscheinNummer}</b>
                                ) : null}
                              </Typography>
                              <Typography
                                sx={{ width: "33%", color: "text.secondary" }}
                              >
                                Leistung Datum:{" "}
                                {lieferschein.leistungDatum === celDate ? (
                                  <b>{lieferschein.leistungDatum}</b>
                                ) : null}
                              </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                              <Box sx={{ width: "100%" }}>
                                <TableContainer component={Paper}>
                                  <Table
                                    sx={{ minWidth: 650 }}
                                    aria-label="caption table"
                                  >
                                    <caption>
                                      Ware ordnungsgemäß erhalten
                                    </caption>
                                    <TableHead>
                                      <TableRow>
                                        <TableCell align="left">Kodu</TableCell>
                                        <TableCell align="left">
                                          Artikel Name
                                        </TableCell>
                                        <TableCell align="right">
                                          Menge
                                        </TableCell>
                                        {/* <TableCell align="right">
                                          Price
                                        </TableCell> */}
                                        <TableCell align="right">
                                          Kisten
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {lieferschein.lieferscheinArtikelsDb.map(
                                        (artikel, i) => (
                                          <TableRow key={i}>
                                            <TableCell
                                              component="th"
                                              scope="row"
                                            >
                                              {artikel.inputArtikelKoduIn}
                                            </TableCell>
                                            <TableCell align="left">
                                              {artikel.inputArtikelNameIn}
                                            </TableCell>
                                            <TableCell align="right">
                                              {artikel.inputArtikelMengeIn} Stk.
                                            </TableCell>
                                            {/* <TableCell align="right">
                                              {formatPrice(
                                                artikel.inputArtikelPriceIn
                                              )}
                                            </TableCell> */}
                                            <TableCell align="right">
                                              {artikel.inputArtikelKistenIn}{" "}
                                              Stk.
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
                      ) : null
                    )}

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
      </Container>
    </Fragment>
  );
}

export default Ausgangsbelege;
