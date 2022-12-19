import React, { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { FormGroup, Grid, TextField } from "@mui/material";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import { Checkbox } from "@mui/joy";
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

  return (
    <>
      <CssBaseline />
      
        <h1>Neu Kunde anlegen</h1>
        <div style={{display: 'flex'}}>
          <Typography textColor="neutral.800" fontSize="xl" fontWeight="lg">
            Yeni müşteri
          </Typography>
          <hr />
          <div className="d-flex flex-xxl-wrap justify-content-xl-around bg-secondary w-75">
            
              
                <FormLabel>{bull} Müsteri kodu:</FormLabel>
                <TextField size="sm" label="Kodu" placeholder="123" />
                
                
                <Checkbox label="Müsteri pasiv?" />
                
             
            </div>
            <div className="d-flex flex-xxl-wrap justify-content-xl-around bg-secondary w-75">
                <FormLabel>{bull} Müsteri hitab:</FormLabel>
                <Autocomplete
                  options={["Frau", "Herr", "Firma", "Familie", "An das"]}
                />
                
                  <FormLabel>{bull} Müsteri kategorisi:</FormLabel>
                  <Autocomplete options={["Bar-Rechnung", "Rechnung"]} />
                </div>
</div>
      
    </>
  );
}

export default NewCustomer;
