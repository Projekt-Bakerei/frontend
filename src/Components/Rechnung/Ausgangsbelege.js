import React, { Fragment } from "react";
import { useNavigate} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";

import { Grid } from "@mui/material";
import { useUser } from "../Context/UserContext";
import { Button } from "@mui/joy";

import { IoMdArrowRoundBack } from 'react-icons/io';


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

  const { token, user } = useUser();
console.log(user)
  return (
    <Fragment>
      <CssBaseline />

      <Container maxWidth="xl">
        
          <Typography textColor="neutral.500" fontSize="xl" fontWeight="lg">
            {bull} Ausgangsbelege
          </Typography>
          <BackButton />
          <hr />
{token ? (
  <Typography textAlign="center" fontSize="xl" fontWeight="lg">
           Keine Belege vorhanden
            
          </Typography>
          ) :( 
            <Typography textColor="red" fontSize="xl" fontWeight="lg">
            Du bist nicht angemeldet!
          </Typography>
          )}
          <Grid container spacing={2} gap={2} marginTop={5} padding={5} className="d-flex flex-column">
            </Grid>
            
      </Container>
    </Fragment>
  );
}

export default Ausgangsbelege;
