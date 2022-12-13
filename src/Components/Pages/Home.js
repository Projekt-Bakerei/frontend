import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";


function Home() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <h1>Home</h1>
        <Box sx={{ bgcolor: "#cfe8fc", height: "75vh", padding: "1rem" }}>
          <Typography textColor="neutral.500" fontSize="xl" fontWeight="lg">
            Aufgaben
          </Typography>
          <Grid container spacing={2} gap={2} marginTop={5} padding={5}>
            <Card sx={{ width: 275 }}>
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
            </Card>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
