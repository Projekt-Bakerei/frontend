import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import { FormGroup, FormLabel } from "@mui/material";
import FormControl from "@mui/joy/FormControl";
import { Checkbox } from "@mui/joy";

import Form from "react-bootstrap/Form";
// import Autocomplete from "@mui/joy/Autocomplete";

import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";

function NewCustomer() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const { addCustomer, listData } = useCustomer();
  console.log("List Costumers:", listData);
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
  // const [loading, setLoading] = useState(false);
  //const [coduCheck, setCoduCheck] = useState([]);

  const [listKunden, setListKunden] = useState([]);

  useEffect(() => {
    setListKunden(listData);
  }, [listData]);

  let kunden = listKunden;
  console.log("Kunden:", kunden);

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

  const optionsHitab = [
    { label: "" },
    { label: "Firma", value: "firma" },
    { label: "Frau", value: "frau" },
    { label: "Herr", value: "herr" },
    { label: "Familie", value: "fmilie" },
    { label: "An das", value: "andas" },
  ];

  const [hitabSelect, setHitabSelect] = useState("");

  const optionsKategory = [
    { label: "" },
    { label: "Bar / Rechnung", value: "bar/rechnung" },
    { label: "Bar", value: "bar" },
    { label: "Rechnung", value: "rechnung" },
  ];

  const [kategorySelect, setKategorySelect] = useState("");

  const optionsKDV = [
    { label: "" },
    { label: "Incl", value: "incl" },
    { label: "Plus", value: "plus" },
    { label: "Sakla", value: "sakla" },
  ];

  const [kdvSelect, setKdvSelect] = useState("");

  const handleCheckClick = (e) => {
    setPassivCheck([e.target.checked]);
    setCustomerData({ ...customerData, [e.target.name]: e.target.checked });
  };

  const optionsSekli = [
    { label: "" },
    { label: "günlük", value: "günlük" },
    { label: "haftalik", value: "haftalik" },
    { label: "aylik", value: "aylik" },
  ];

  const [sekliSelect, setSekliSelect] = useState("");

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
  console.log("Passiv?:", passivCheck);
  console.log("Token:", token);

  const handleChangeKodu = (e) => {
    e.preventDefault();
    let kodu = e.target.value;
    setCustomerData({ ...customerData, kodu });
    //setCoduCheck(kodu)
  };

  const handleChangeKisi = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };
  const handleChangeCadde = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleChangePlz = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleChangeYer = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleChangeTelefon = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleChangeMobil = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const onChangeHitab = (e) => {
    e.preventDefault();
    setHitabSelect(e.target.value);
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const onChangeKategory = (e) => {
    e.preventDefault();
    setKategorySelect(e.target.value);
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleChangeIsmi = (e) => {
    e.preventDefault();
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const onChangeKDV = (e) => {
    e.preventDefault();
    setKdvSelect(e.target.value);
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const onChangeSekli = (e) => {
    e.preventDefault();
    setSekliSelect(e.target.value);
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  console.log(customerData);
  return token ? (
    <Container maxWidth="xl">
      <CssBaseline />

      <h1>Neu Kunde anlegen</h1>
      <Box sx={{ bgcolor: "#EAEDF0", minHeight: "80%", padding: "1rem" }}>
        <Typography textColor="neutral.800" fontSize="xl" fontWeight="lg">
          Yeni müşteri
        </Typography>
        <hr />
        <FormGroup>
          <div
            className="m-auto border rounded border-3"
            //style={{width: "50%"}}
          >
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
                    onChange={(e) => handleChangeKodu(e)}
                    required
                  />
                </div>

                <Checkbox
                  label="Müsteri pasiv?"
                  checked={passivCheck[0]}
                  onChange={handleCheckClick}
                  name="passiv"
                />
              </div>
              <div className="d-flex flex-sm-wrap justify-content-xl-between p-3">
                <div className="d-flex">
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
                    name="hitab"
                    style={{ width: "15rem", height: "3rem" }}
                    onChange={onChangeHitab}
                    value={hitabSelect}
                  >
                    {optionsHitab.map((option, i) => (
                      <option name={option.selectHitab} key={i}>
                        {option.label}
                      </option>
                    ))}
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
                    name="kategory"
                    style={{ width: "15rem", height: "3rem" }}
                    value={kategorySelect}
                    onChange={onChangeKategory}
                  >
                    {optionsKategory.map((option, i) => (
                      <option name={option.selectKategory} key={i}>
                        {option.label}
                      </option>
                    ))}
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
                    name="ismi"
                    onChange={(e) => handleChangeIsmi(e)}
                  />
                </div>
                {/* <FormLabel>{bull} KDV:</FormLabel>
              <Autocomplete options={["incl", "plus", "sakla"]} /> */}
                <Form.Label
                  htmlFor="KDV"
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
                  value={kdvSelect}
                  onChange={onChangeKDV}
                  name="kdv"
                  id="kdv"
                  style={{ width: "15rem", height: "3rem" }}
                >
                  {optionsKDV.map((option, i) => (
                    <option name={option.selectKDV} key={i}>
                      {option.label}
                    </option>
                  ))}
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
                    name="kisi"
                    onChange={(e) => handleChangeKisi(e)}
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
                <Form.Select
                  id="sekli"
                  name="sekli"
                  value={sekliSelect}
                  onChange={onChangeSekli}
                  style={{ width: "15rem", height: "3rem" }}
                >
                  {optionsSekli.map((option, i) => (
                    <option name={option.selectSekli} key={i}>
                      {option.label}
                    </option>
                  ))}
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
                    name="cadde"
                    onChange={(e) => handleChangeCadde(e)}
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
                  <Form.Control
                    type="text"
                    id="input"
                    aria-describedby="Plz"
                    placeholder="PLZ"
                    name="plz"
                    onChange={(e) => handleChangePlz(e)}
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
                  <Form.Control
                    type="text"
                    id="input"
                    aria-describedby="Stadt"
                    placeholder="Stadt"
                    name="yer"
                    onChange={(e) => handleChangeYer(e)}
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
                  <Form.Control
                    type="text"
                    id="input"
                    aria-describedby="Telefon"
                    placeholder="Telefonnummer"
                    name="telefon"
                    onChange={(e) => handleChangeTelefon(e)}
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
                    name="mobil"
                    onChange={(e) => handleChangeMobil(e)}
                  />
                </div>
              </div>
              <hr />
              <Button
                sx={{ margin: 3 }}
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
                  setTimeout(() => {
                    window.location.reload(false);
                  }, 500);
                }}
              >
                Create
              </Button>
            </div>
          </div>
        </FormGroup>
      </Box>
    </Container>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
}

export default NewCustomer;
