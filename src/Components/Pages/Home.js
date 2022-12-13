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
                  textColor="neutral.500"
                  fontWeight="lg"
                  gutterBottom
                >
                  Einfache Software macht komplexe Aufgaben leicht
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ width: 275 }}>
              <CardContent>
                <Typography
                  fontSize="l"
                  textColor="neutral.500"
                  fontWeight="lg"
                  gutterBottom
                >
                  Einfache Software macht komplexe Aufgaben leicht
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ width: 275 }}>
              <CardContent>
                <Typography
                  fontSize="l"
                  textColor="neutral.500"
                  fontWeight="lg"
                  gutterBottom
                >
                  Einfache Software macht komplexe Aufgaben leicht
                </Typography>
                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Box>
      </Container>
    </Fragment>
  );
}

export default Home;
