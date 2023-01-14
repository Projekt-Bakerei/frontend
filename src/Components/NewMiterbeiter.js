import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import { FormGroup, FormLabel } from "@mui/material";
//import FormControl from "@mui/joy/FormControl";
//import { Checkbox } from "@mui/joy";

import Form from "react-bootstrap/Form";

import { useMiterbeiter } from "../Context/MiterbeiterContext";
import { useUser } from "../Context/UserContext";

function NewMiterbeiter() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const { addMiterbeiter, listData } = useMiterbeiter();
  console.log("List Miterbeiters:", listData);
  const { token } = useUser();

  console.log("User Token:", token);

  const [miterbeiterData, setMiterbeiterData] = useState({
    mName: "",
    mAdres: "",
    tel: "",
    position: "",
    kenzeichen: "",
    extern: "",
  });

  const [listMiterbeitern, setListMiterbeitern] = useState([]);

  useEffect(() => {
    setListMiterbeitern(listData);
  }, [listData]);

  let miterbeitern = listMiterbeitern;
  console.log("Miterbeitern:", miterbeitern);

  const { mName, mAdres, tel, position, extern, kenzeichen } = miterbeiterData;

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

  const handleChangemName = (e) => {
    e.preventDefault();
    setMiterbeiterData({ ...miterbeiterData, [e.target.name]: e.target.value });
  };
  const handleChangemAdres = (e) => {
    e.preventDefault();
    setMiterbeiterData({ ...miterbeiterData, [e.target.name]: e.target.value });
  };

  const handleChangeTel = (e) => {
    e.preventDefault();
    setMiterbeiterData({ ...miterbeiterData, [e.target.name]: e.target.value });
  };

  const handleChangePosition = (e) => {
    e.preventDefault();
    setMiterbeiterData({ ...miterbeiterData, [e.target.name]: e.target.value });
  };

  const handleChangeExtern = (e) => {
    e.preventDefault();
    setMiterbeiterData({ ...miterbeiterData, [e.target.name]: e.target.value });
  };

  const handleChangeKenzeichen = (e) => {
    e.preventDefault();
    setMiterbeiterData({ ...miterbeiterData, [e.target.name]: e.target.value });
  };

  console.log(miterbeiterData);

  return token ? (
    <Container maxWidth="xl">
      <CssBaseline />

      <h1>Neu Miterbeiter anlegen</h1>
      <Box sx={{ bgcolor: "#cfe8fc", height: "75vh", padding: "1rem" }}>
        <Typography textColor="neutral.800" fontSize="xl" fontWeight="lg">
          Yeni Isci
        </Typography>
        <hr />
        <FormGroup>
          <div className="w-55 m-auto ">
            <div className="d-flex flex-sm-wrap justify-content-center p-3">
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
                    margin: "auto",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Isci Ismi:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="mName"
                  placeholder="Ismi"
                  name="mName"
                  onChange={(e) => handleChangemName(e)}
                  required
                />
              </div>
            </div>

            <div className="d-flex flex-sm-wrap justify-content-center p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="mName"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Isci Adresi:
                </Form.Label>

                {/* <TextField size="lx" label='"Bei inge"'/> */}
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="mAdres"
                  placeholder="Isci Adresi"
                  name="mAdres"
                  onChange={(e) => handleChangemAdres(e)}
                />
              </div>
              {/* Isci Adresi */}
            </div>
            <div className="d-flex flex-sm-wrap justify-content-center p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="tel"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Tel:
                </Form.Label>
                {/* <TextField
                     size="lx" label='"inge Taube"'
                   /> */}
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="tel"
                  placeholder="Tel: +90 123 456 78"
                  name="tel"
                  onChange={(e) => handleChangeTel(e)}
                />
              </div>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-center p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="position"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Position:
                </Form.Label>
                {/* <TextField
                     size="lx" label='"Muster Straße 10"'
                   /> */}
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="position"
                  placeholder="Position"
                  name="position"
                  onChange={(e) => handleChangePosition(e)}
                />
              </div>
            </div>
            <div className="d-flex flex-sm-wrap justify-content-center p-3">
              <div className="d-flex">
                <Form.Label
                  htmlFor="kenzeichen"
                  style={{
                    marginRight: "2rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Kenzeichen:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="kenzeichen"
                  placeholder="kenzeichen"
                  name="kenzeichen"
                  onChange={(e) => handleChangeKenzeichen(e)}
                />
              </div>
              <div className="d-flex">
                <Form.Label
                  htmlFor="extern"
                  style={{
                    marginRight: "2rem",
                    marginLeft: "3rem",
                    width: "10rem",
                    fontFamily: "Roboto",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {bull} Extern:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  aria-describedby="extern"
                  placeholder="extern"
                  name="extern"
                  onChange={(e) => handleChangeExtern(e)}
                />
              </div>
            </div>
            <hr />
            <Button
              size="md"
              variant="contained"
              color="primary"
              onClick={() => {
                addMiterbeiter(
                  mName,
                  mAdres,
                  tel,
                  position,
                  extern,
                  kenzeichen
                );
                setTimeout(() => {
                  window.location.reload(false);
                }, 500);
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
            {/* <Autocomplete
                   sx={{ marginTop: ".5rem", width: "20rem" }}
                    options={kunden}
                 /> */}
          </div>
        </div>
        {/* <div>
             Customer:<ul>
             {kunden.map((option, i) => (
                       <li name={option.kunden} key={i}>
                        <a href="{i}"> {JSON.stringify(kunden[i].ismi)}</a>
                       </li>
                     ))}
               </ul>
           </div> */}
      </Box>
    </Container>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
}

export default NewMiterbeiter;
