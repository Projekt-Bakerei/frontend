import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import { FormGroup, FormLabel } from "@mui/material";
import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
//  import FormHelperText from "@mui/joy/FormHelperText";
import { Checkbox } from "@mui/joy";
// import Autocomplete from "@mui/joy/Autocomplete";

import Form from 'react-bootstrap/Form';
import Autocomplete from "@mui/joy/Autocomplete";

function NewCustomer() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
const kunden = [{label: 'Aladdin grill', Kodu: '234', hitab: 'Firma', kategorisi: 'Rechnung', Ismi: 'Aladdin Grill' }]

  return (
    <Container maxWidth="xl">
      <CssBaseline />

      <h1>Neu Kunde anlegen</h1>
      <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh", padding: "1rem" }}>
        <Typography textColor="neutral.800" fontSize="xl" fontWeight="lg">
          Yeni müşteri
        </Typography>
        <hr />
        <FormGroup>
          <div className="w-55 m-auto ">
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
              <div className="d-flex">
                {/* <FormLabel sx={{ paddingRight: "2rem", width: '10rem' }}>
                  {bull} Müsteri kodu:
                </FormLabel>
                <TextField size="5px" label="Kodu" placeholder="123" /> */}
                <Form.Label htmlFor="input" style={{
             marginRight: "2rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Müsteri kodu:</Form.Label>
      <Form.Control
        type="text"
        id="input"
        aria-describedby="Kodu"
        placeholder="Kodu"
      />
              </div>

              <Checkbox label="Müsteri pasiv?" />
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
            <div className="d-flex">
              {/*<FormLabel>{bull} Müsteri hitab:</FormLabel>
               <Autocomplete
                options={["Frau", "Herr", "Firma", "Familie", "An das"]}
                sx={{ zIndex: 1 }}
              />
              <FormLabel>{bull} Müsteri kategorisi:</FormLabel>
              <Autocomplete options={["Bar-Rechnung", "Rechnung"]} /> */}
             <FormControl /> 
          <Form.Label htmlFor="hitab" style={{
             marginRight: "2rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Müsteri hitab:</Form.Label>
          <Form.Select id="hitab" style={{width: '15rem', height: '3rem'}}>
          <option>Firma</option>
            <option>Frau</option>
            <option>Herr</option>
            <option>Familie</option>
            <option>An das</option>
          </Form.Select>
          <Form.Label htmlFor="kategorisi" style={{
             marginRight: "2rem",
             marginLeft: "3rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Müsteri kategorisi:</Form.Label>
          <Form.Select id="kategorisi" style={{width: '15rem', height: '3rem'}}>
            <option>Bar-Rechnung</option>
            <option>Rechnung</option>
          </Form.Select>
          </div>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
            <div className="d-flex">
              <Form.Label  htmlFor="Ismi" style={{
             marginRight: "2rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Müsteri Ismi:</Form.Label>

              {/* <TextField
                size="lx" label='"Bei inge"'
              /> */}
              <Form.Control
        type="text"
        id="input"
        aria-describedby="Ismi"
        placeholder="Bei inge"
      />
            </div>
              {/* <FormLabel>{bull} KDV:</FormLabel>
              <Autocomplete options={["incl", "plus", "sakla"]} /> */}
              <Form.Label htmlFor="enableSelect" style={{
             marginRight: "2rem",
             marginLeft: "3rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} KDV:</Form.Label>
          <Form.Select id="select" style={{width: '15rem', height: '3rem'}}>
            <option>incl</option>
            <option>plus</option>
            <option>sakla</option>
          </Form.Select>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
            <div className="d-flex">
              <Form.Label  htmlFor="Inge" style={{
             marginRight: "2rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Yetkili Kisi:</Form.Label>
              {/* <TextField
                size="lx" label='"inge Taube"'
              /> */}
              <Form.Control
        type="text"
        id="input"
        aria-describedby="Inge"
        placeholder="inge Taube"
      />
            </div>
              <Form.Label htmlFor="enableSelect" style={{
             marginRight: "2rem",
             marginLeft: "3rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Ödeme sekli:</Form.Label>
              {/* <Autocomplete options={["günlük", "haftalik", "aylik"]} /> */}
              <Form.Select id="select" style={{width: '15rem', height: '3rem'}}>
                <option>günlük</option>
                <option>haftalik</option>
                <option>aylik</option>
              </Form.Select>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
            <div className="d-flex">
              <Form.Label  htmlFor="Adresse" style={{
             marginRight: "2rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Cadde ve Ev-Nr:</Form.Label>
              {/* <TextField
                size="lx" label='"Muster Straße 10"'
              /> */}
              <Form.Control
        type="text"
        id="input"
        aria-describedby="Adresse"
        placeholder="Muster Straße 10"
      />
            </div>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
            <div className="d-flex">
              <Form.Label  htmlFor="Plz" style={{
             marginRight: "2rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Posta Kodu:</Form.Label>
              {/* <TextField
                size="lx" label='"Muster Straße 10"'
              /> */}
              <Form.Control
        type="text"
        id="input"
        aria-describedby="Plz"
        placeholder="PLZ"
      />
            </div>
            <div className="d-flex">
              <Form.Label  htmlFor="Stadt" style={{
             marginRight: "2rem",
             marginLeft: "3rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Yer:</Form.Label>
              {/* <TextField
                size="lx" label='"Muster Straße 10"'
              /> */}
              <Form.Control
        type="text"
        id="input"
        aria-describedby="Stadt"
        placeholder="Stadt"
      />
            </div>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
            <div className="d-flex">
              <Form.Label  htmlFor="Telefon" style={{
             marginRight: "2rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Telefon:</Form.Label>
              {/* <TextField
                size="lx" label='"Muster Straße 10"'
              /> */}
              <Form.Control
        type="text"
        id="input"
        aria-describedby="Telefon"
        placeholder="Telefonnummer"
      />
            </div>
            <div className="d-flex">
              <Form.Label  htmlFor="C-telefon" style={{
             marginRight: "2rem",
             marginLeft: "3rem",
              width: '10rem',
              fontFamily: "Roboto",
              fontSize: "0.875rem",
              fontWeight: 500, 
             }}>{bull} Cep-Tel:</Form.Label>
              {/* <TextField
                size="lx" label='"Muster Straße 10"'
              /> */}
              <Form.Control
        type="text"
        id="input"
        aria-describedby="C-telefon"
        placeholder="Cep-Telefon"
      />
            </div>
            </div>
            <hr />
            <Button size="md" variant="contained" color="primary">Create</Button>
          </div>
        </FormGroup>
        <div className="d-flex justify-content-center">
        <div class="d-flex flex-column">
          <FormLabel sx={{width: '20rem'}}>{bull} Ismiyle  |  Müsteri ara  |</FormLabel>
        <Autocomplete sx={{marginTop: '.5rem', width: '20rem'}} options={kunden}/>
        </div>
        </div>
      </Box>
    </Container>
  );
}

export default NewCustomer;
