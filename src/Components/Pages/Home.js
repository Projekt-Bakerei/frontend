import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useUser } from "../Context/UserContext";
import { Image } from "react-bootstrap";
import MiniDrawer from "../Menu/Drawer";


function Home() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const { token, user } = useUser();
console.log(user)
  return (
    <Fragment>
      <CssBaseline />

      <Container maxWidth="xl">
        <h1>Home</h1>
        <Box sx={{ bgcolor: "#EAEDF0", maxHeight: "80%", padding: "1rem" }}>
          <Typography textColor="neutral.500" fontSize="xl" fontWeight="lg">
            Aufgaben
          </Typography>
          {token ? (
            <Box>
  <Typography textColor="#184B29" fontSize="xl" fontWeight="lg">
              Hallo! -{bull} {user.name}
              </Typography>
              <small>Update:</small>
              <div className="d-flex flex-wrap gap-1">
              <Card sx={{width: 220, padding: 1}}>
                <small>12.02.23 - </small>
                  <code>
                    <ul>
                      <li>Mitterbeiter und Fahrer getrennt, fixiert kann löschen von liste und DB.</li>
                      <li>Lieferschein Nummer fixiert begin von 2023000001</li>
                    </ul> 
                  </code>
              </Card>
              <Card sx={{width: 220, padding: 1}}>
                <small>13.02.23 - </small>
                  <code>
                    <ul>
                      <li>Kunden und Artikel list, fixiert kann löschen von liste und DB.</li>
                      <li>Lieferschein Feld fix.</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li> Muliple array muss nach documentation suchen!</li>
                      <li>ArtikelBeschreibung muss fixiert!</li>
                    </ul>
                  </code>
                </Card>
                <Card sx={{width: 220, padding: 1}}>
                <small>21.02.23 - </small>
                  <code>
                    <ul>
                      <li>Lieferschein nur erste array push</li>
                      <li>Lieferscein backend fix</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li>Subdocuments dokumention suchen!</li>
                      <li>dokumention für Population!</li>
                    </ul>
                  </code>
                </Card>
                <Card sx={{width: 220, padding: 1}}>
                <small>24.02.23 - </small>
                  <code>
                    <ul>
                      <li>Lieferschein fix</li>
                      <li>Lieferscein Nummer fix</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li>Alle Lieferscheins list!</li>
                      <li>Lieferschein Delete und Edit!</li>
                    </ul>
                  </code>
                </Card>
                <Card sx={{width: 220, padding: 1}}>
                <small>04.03.23 - </small>
                  <code>
                    <ul>
                      <li>Lieferschein fix Zutaten und Price</li>
                      <li>Lieferscein Kodu fix</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li>Prüfen wenn Passiv mit Preis zeigen!</li>
                      <li>Lieferschein Kisten!</li>
                      <li>Alle Lieferscheins list!</li>
                      <li>Lieferschein Delete und Edit!</li>
                    </ul>
                  </code>
                </Card>
                <Card sx={{width: 220, padding: 1}}>
                <small>05.03.23 - </small>
                  <code>
                    <ul>
                      <li>Alle Lieferschein List erstelt</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li>Prüfen wenn Passiv mit Preis zeigen!</li>
                      <li>Lieferschein Kisten!</li>
                      <li>Lieferschein Delete und Edit!</li>
                    </ul>
                  </code>
                </Card>
                <Card sx={{width: 220, padding: 1}}>
                <small>06.03.23 - </small>
                  <code>
                    <ul>
                      <li>Fahrer Services erstelt</li>
                      <li>Filter nach Name der Fahrer</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li>FahrerSrevice muss filter in genau Array nach name suchen!</li>
                      <li>Prüfen wenn Passiv mit Preis zeigen!</li>
                      <li>Lieferschein Kisten!</li>
                      <li>Lieferschein Delete und Edit!</li>
                    </ul>
                  </code>
                </Card>
                <Card sx={{width: 220, padding: 1}}>
                <small>11.03.23 - </small>
                  <code>
                    <ul>
                      <li>Fahrer Services Search fix</li>
                      <li>Filter nach Name der Fahrer und Lieferscheins</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li>Samlen von Lieferscheins für Tag!</li>
                      <li>Lieferschein Delete und Edit!</li>
                    </ul>
                  </code>
                </Card>
                <Card sx={{width: 220, padding: 1}}>
                <small>12.03.23 - </small>
                  <code>
                    <ul>
                      <li>Fahrer Services fix</li>
                      <li>Filter nach Name der Fahrer und Lieferscheins fix</li>
                      <li>Samlen von Lieferscheins für Tag fix</li>
                    </ul>
                  </code>
                  <code>TODO:</code>
                  <code>
                    <ul>
                      <li>Alle Lieferschein in Ausgangsbelege erstellen!</li>
                      <li>Summe von Artikels!</li>
                      <li>Lieferschein Delete und Edit!</li>
                      <li>Produktions Liste erstellen!</li>
                    </ul>
                  </code>
                </Card>


              </div>
            </Box> 
          ) :( 
            <Typography textColor="red" fontSize="xl" fontWeight="lg">
            Du bist nicht angemeldet!
          </Typography>
          )}
          <Grid container spacing={2} gap={2} padding={5} className="d-flex flex-column">
            <Typography fontSize="xl" fontWeight="lg">Öz Güven Warenhandelsgesellschaft mbH</Typography>
<Typography fontSize="xl" fontWeight="m">
Kepler Straße 15
50823 Köln</Typography>
<Box className="h-50">
            <Image src="../../image/2023-01-13_07-44-38.png" thumbnail responsive="true" style={{height:"auto", width:"550px"}}/>
            </Box>
            {/* <Card sx={{ width: 275 }}>
              <CardContent>
                <Typography
                  fontSize="l"
                  textColor="neutral.700"
                  fontWeight="lg"
                  gutterBottom
                >
                  Einfache Rechnung erstellen
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Aktuel Rechnung {bull}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {bull} 20221221045
                </Typography>
                <Typography variant="body2">
                  Bei Firma: 
                  <br />
                  FirmenNamen[1]
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Weiter</Button>
              </CardActions>
            </Card>
            <Card sx={{ width: 275 }}>
              <CardContent>
                <Typography
                  fontSize="1"
                  textColor="neutral.700"
                  fontWeight="lg"
                  gutterBottom
                >
                  Einfache Lieferschein erstellen
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Aktuel Lieferschein {bull}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {bull} 20221221222
                </Typography>
                <Typography variant="body2">
                  Fahrer:
                  <br />
                  {'"Name - Kennzeichen"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Weiter</Button>
              </CardActions>
            </Card>
            <Card sx={{ width: 275 }}>
              <CardContent>
                <Typography
                  fontSize="l"
                  textColor="neutral.700"
                  fontWeight="lg"
                  gutterBottom
                >
                  Einfache Angebot erstellen
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Angeboten {bull}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {bull} 25.12.2022
                </Typography>
                <Typography variant="body2">
                  Unser Angebot
                  <br />
                  {'"Black Friday"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Weiter</Button>
              </CardActions>
            </Card> */}
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
