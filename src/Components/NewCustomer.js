import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { FormGroup, FormLabel } from "@mui/material";
import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
//  import FormHelperText from "@mui/joy/FormHelperText";
import { Checkbox } from "@mui/joy";
// import Autocomplete from "@mui/joy/Autocomplete";

import Form from "react-bootstrap/Form";
import Autocomplete from "@mui/joy/Autocomplete";

import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";
import jwtdecode from "jwt-decode";

function NewCustomer() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const kunden = [
    {
      label: "Aladdin grill",
      Kodu: "234",
      hitab: "Firma",
      kategorisi: "Rechnung",
      Ismi: "Aladdin Grill",
    },
  ];

  // const nav = useNavigate();
  const { addCustomer } = useCustomer();
  const { token } = useUser();
  const [passivCheck, setPassivCheck] = useState([false, true]);
  const [customerData, setCustomerData] = useState({
    kodu: "",
    passiv: "",
    hitab: "",
    kategory: "",
    ismi: "",
    kdv: "",
    kisi: "",
    sekli: "",
    cadde: "",
    plz: "",
    yer: "",
    telefon: "",
    mobil: "",
  });

  const {
    kodu,
    passiv,
    hitab,
    kategory,
    ismi,
    kdv,
    kisi,
    sekli,
    cadde,
    plz,
    yer,
    telefon,
    mobil,
  } = customerData;

  const handleCheckClick = (e) => {
    setPassivCheck([e.target.checked, e.target.checked]);
  };

  // const handleCreate = (e) => {
  //   e.preventDefault();
  //   // setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  //   setCustomerData(
  //     kodu,
  //     passiv,
  //     hitab,
  //     kategory,
  //     ismi,
  //     kdv,
  //     kisi,
  //     sekli,
  //     cadde,
  //     plz,
  //     yer,
  //     telefon,
  //     mobil,
  //     token
  //   );
  // };
  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    console.log(customerData);
  };

  return token ? (
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
                <Form.Label
                  htmlFor="input"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Müsteri kodu:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="Kodu"
                  placeholder="Kodu"
                  name="kodu"
                  //  value={kodu}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <Checkbox
                label="Müsteri pasiv?"
                checked={passivCheck[0]}
                onChange={handleCheckClick}
                value={passiv}
              />
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
                <Form.Label
                  htmlFor="hitab"
                  style={{
                    //  marginRight: "2rem",
                    width: "8.5rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Müsteri hitab:
                </Form.Label>
                <Form.Select
                  id="hitab"
                  style={{ width: "15rem", height: "3rem" }}
                >
                  <option>Firma</option>
                  <option>Frau</option>
                  <option>Herr</option>
                  <option>Familie</option>
                  <option>An das</option>
                </Form.Select>
                <Form.Label
                  htmlFor="kategorisi"
                  style={{
                    marginRight: "2rem",
                    marginLeft: "4.5rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Müsteri kategorisi:
                </Form.Label>
                <Form.Select
                  id="kategorisi"
                  style={{ width: "15rem", height: "3rem" }}
                  label={kategory}
                >
                  <option>Bar-Rechnung</option>
                  <option>Rechnung</option>
                </Form.Select>
              </div>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="Ismi"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Müsteri Ismi:
                </Form.Label>

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
              <Form.Label
                htmlFor="enableSelect"
                style={{
                  marginRight: "2rem",
                  marginLeft: "3rem",
                  width: "10rem",
                  fontFamily: "Roboto",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {bull} KDV:
              </Form.Label>
              <Form.Select
                id="select"
                style={{ width: "15rem", height: "3rem" }}
              >
                <option>incl</option>
                <option>plus</option>
                <option>sakla</option>
              </Form.Select>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="Inge"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Yetkili Kisi:
                </Form.Label>
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
              <Form.Label
                htmlFor="enableSelect"
                style={{
                  marginRight: "2rem",
                  marginLeft: "3rem",
                  width: "10rem",
                  fontFamily: "Roboto",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                {bull} Ödeme sekli:
              </Form.Label>
              {/* <Autocomplete options={["günlük", "haftalik", "aylik"]} /> */}
              <Form.Select
                id="select"
                style={{ width: "15rem", height: "3rem" }}
              >
                <option>günlük</option>
                <option>haftalik</option>
                <option>aylik</option>
              </Form.Select>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="Adresse"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Cadde ve Ev-Nr:
                </Form.Label>
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
                <Form.Label
                  htmlFor="Plz"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Posta Kodu:
                </Form.Label>
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
                <Form.Label
                  htmlFor="Stadt"
                  style={{
                    marginRight: "2rem",
                    marginLeft: "3rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Yer:
                </Form.Label>
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
                <Form.Label
                  htmlFor="Telefon"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Telefon:
                </Form.Label>
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
                <Form.Label
                  htmlFor="C-telefon"
                  style={{
                    marginRight: "2rem",
                    marginLeft: "3rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Cep-Tel:
                </Form.Label>
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
            <Button
              size="md"
              variant="contained"
              color="primary"
              onClick={() => {
                addCustomer(
                  kodu,
                  passiv,
                  hitab,
                  kategory,
                  ismi,
                  kdv,
                  kisi,
                  sekli,
                  cadde,
                  plz,
                  yer,
                  telefon,
                  mobil
                );
              }}
            >
              Create
            </Button>
          </div>
        </FormGroup>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <FormLabel sx={{ width: "20rem" }}>
              {bull} Ismiyle | Müsteri ara |
            </FormLabel>
            <Autocomplete
              sx={{ marginTop: ".5rem", width: "20rem" }}
              options={kunden}
            />
          </div>
        </div>
      </Box>
    </Container>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
}

export default NewCustomer;
