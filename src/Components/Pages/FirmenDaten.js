import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";


function FirmenDaten() {
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
        <h1>Über uns</h1>
        <Box sx={{ bgcolor: "#cfe8fc", maxHeight: "80%", padding: "1rem" }}>
          <Typography textColor="neutral.800" fontSize="xl" fontWeight="lg">
          WIRTSCHAFTSINFO
          </Typography>
          <hr/>
          <Card sx={{ width: 575 }}>
              <CardContent>
                <Typography
                  fontSize="l"
                  textColor="neutral.700"
                  fontWeight="lg"
                  gutterBottom
                >
                  Öz Güven Warenhandelsgesellschaft mbH
                </Typography>
                <Typography variant="body2">
                <b>Kepler Straße 15</b> 
                  <br />
                <b>50823 Köln</b>
                </Typography>
                <hr/>
                <Typography variant="h5" component="div">
                  {bull} Telefon: <b>0221 25 25 25 25</b>
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Mobil: <b>0221 25 25 25 25</b>
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Fax: <b>0221 25 25 25 25</b>
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Email: <b>info@oesgueven.de</b>
                </Typography>
                <hr/>
                <Typography variant="h5" component="div">
                  {bull} Handelsregister beim Amtsgericht: <b>50939 Köln</b>
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Registernummer: <b>HRB 27083</b>
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Umsatzsteuer-ID: <b>DE27083/23/23/23</b>
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Steuernummer: <b>27/23/23/23/23</b>
                </Typography>
                <Typography variant="h5" component="div">
                  {bull} Bankverbindung: <b>DE25 2525 2525 2525 2525</b><b> | Sparkasse Köln</b>
                </Typography>
                
              </CardContent>
              <CardActions>
                <Button size="small">Bearbeiten</Button>
              </CardActions>
            </Card>
        </Box>
      </Container>
    </Fragment>
  );
}

export default FirmenDaten;
