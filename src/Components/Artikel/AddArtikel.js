import React, { useState, useEffect, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import { FormGroup } from "@mui/material";
import FormControl from "@mui/joy/FormControl";
//import { Checkbox } from "@mui/joy";

import Form from "react-bootstrap/Form";
// import Autocomplete from "@mui/joy/Autocomplete";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";

import { useNewArtikel } from "../Context/ArtikelContext";
import { useUser } from "../Context/UserContext";

function AddArtikel() {
  const toastId = useRef();

  const CloseButton = ({ closeToast }) => (
    <b
      className="material-icons"
      onClick={() => {
        closeToast(
          setTimeout(() => {
            window.location.reload(false);
          }, 300)
        );
      }}
    >
      Hier klick!
    </b>
  );

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const { AddNewArtikel, listNewArtikel } = useNewArtikel();
  console.log("List Artikel: ", listNewArtikel);
  const { token } = useUser();

  const [artikelData, setArtikelData] = useState({
    NewartikelName: "",
    NewartikelPrice: "",
    NewartikelBeschreibung: "",
    NewartikelRabat: "",
    NewartikelKodu: "",
  });
  //const [loading, setLoading] = useState(false);

  const [listArtikel, setListArtikel] = useState([]);

  useEffect(() => {
    setListArtikel(listNewArtikel);
  }, [listNewArtikel]);

  let artikel = listArtikel;
  console.log("Artikel:", artikel);

  const {
    NewartikelName,
    NewartikelPrice,
    NewartikelBeschreibung,
    NewartikelRabat,
    NewartikelKodu,
  } = artikelData;

  console.log("Token:", token);

  const handleChangeNewartikelKodu = (e) => {
    let kodu = e.target.value;
    if (artikel.find((newArtikel) => newArtikel.NewartikelKodu === `${kodu}`)) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Dieser Code existiert bereits! / Bu kodu zaten var!",
          {
            autoClose: false,
            position: toast.POSITION.BOTTOM_CENTER,
            theme: "colored",
          },
          setTimeout(() => {
            window.location.reload(false);
          }, 2000)
        );
      }
    } else {
      e.preventDefault();
      setArtikelData({ ...artikelData, [e.target.name]: e.target.value });
    }
  };

  const handleChangeNewartikelName = (e) => {
    e.preventDefault();
    setArtikelData({ ...artikelData, [e.target.name]: e.target.value });
  };
  const handleChangeNewartikelPrice = (e) => {
    e.preventDefault();
    setArtikelData({ ...artikelData, [e.target.name]: e.target.value });
  };

  const handleChangeNewartikelBeschreibung = (e) => {
    e.preventDefault();
    setArtikelData({ ...artikelData, [e.target.name]: e.target.value });
  };

  const handleChangeNewartikelRabat = (e) => {
    e.preventDefault();
    setArtikelData({ ...artikelData, [e.target.name]: e.target.value });
  };

  console.log(artikelData);
  return token ? (
    <Container maxWidth="xl">
      <CssBaseline />

      <h1>Neu Artikel anlegen</h1>
      <Box
        sx={{
          bgcolor: "#EAEDF0",
          minHeight: "100vh",
          padding: "1rem",
          minWidth: "70vw",
        }}
      >
        <Typography textColor="neutral.800" fontSize="xl" fontWeight="lg">
          Ürün
        </Typography>
        <hr />
        <FormGroup style={{ minWidth: "80%" }}>
          <div
            className="m-auto border rounded border-3"
            //style={{width: "50%"}}
          >
            <div className="d-flex flex-column p-3">
              <div className="d-flex flex-column p-3">
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
                  {bull} Artikel kodu:
                </Form.Label>
                <Form.Control
                  style={{ width: "20vw" }}
                  type="text"
                  id="input"
                  aria-describedby="NewartikelKodu"
                  placeholder="Kodu"
                  name="NewartikelKodu"
                  onChange={(e) => handleChangeNewartikelKodu(e)}
                  required
                />
                <FormControl />
              </div>
              <div className="d-flex flex-column p-3">
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
                  {bull} Ürün:
                </Form.Label>
                <Form.Control
                  type="text"
                  id="input"
                  style={{ width: "30vw" }}
                  aria-describedby="NewartikelName"
                  placeholder="Ürün"
                  name="NewartikelName"
                  onChange={(e) => handleChangeNewartikelName(e)}
                  required
                />
              </div>
              <div className="d-flex flex-column p-3">
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
                  {bull} Zutaten:
                </Form.Label>

                <Form.Control
                  type="text"
                  as="textarea"
                  id="input"
                  aria-describedby="NewartikelBeschreibung"
                  placeholder="Zutaten"
                  name="NewartikelBeschreibung"
                  onChange={(e) => handleChangeNewartikelBeschreibung(e)}
                />
              </div>
              <div className="d-flex flex-wrap p-3 gap-3">
                <Box>
                  <Form.Label
                    htmlFor="input"
                    style={{
                      // marginRight: "2rem",
                      // width: "10rem",
                      fontFamily: "Roboto",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    {bull} Price:
                  </Form.Label>
                  <Form.Control
                    style={{ width: "10rem" }}
                    type="text"
                    id="input"
                    aria-describedby="NewartikelPrice"
                    placeholder="Price"
                    name="NewartikelPrice"
                    onChange={(e) => handleChangeNewartikelPrice(e)}
                  />
                </Box>
                <Box>
                  <Form.Label
                    htmlFor="input"
                    style={{
                      // marginRight: "2rem",
                      // width: "10rem",
                      fontFamily: "Roboto",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    {bull} Rabat %:
                  </Form.Label>
                  <Form.Control
                    style={{ width: "10rem" }}
                    type="text"
                    id="input"
                    aria-describedby="NewartikelRabat"
                    placeholder="Rabat %"
                    name="NewartikelRabat"
                    onChange={(e) => handleChangeNewartikelRabat(e)}
                  />
                </Box>
              </div>
            </div>
            <hr />
            <Button
              sx={{ margin: 3 }}
              size="md"
              variant="contained"
              color="primary"
              onClick={() => {
                AddNewArtikel(
                  NewartikelName,
                  NewartikelPrice,
                  NewartikelBeschreibung,
                  NewartikelRabat,
                  NewartikelKodu
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
      </Box>
      <ToastContainer
        closeButton={CloseButton}
        reload
        transition={Zoom}
        style={{ width: "300px", bottom: "25rem" }}
      />
    </Container>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
}

export default AddArtikel;
