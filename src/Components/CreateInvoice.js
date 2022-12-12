import React, {Fragment, useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Typography from '@mui/joy/Typography';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
import { FormGroup, Grid, TextField } from '@mui/material';


export const CreateInvoice = () => {
  const kunden=[
    {id:1, label: 'Hans Peter GmbH, Keplerstr. 5, 50823 Köln'},
    {label: 'Firma 2, Keplerstr. 5, 50823 Köln'},
    {label: 'Firma 3, Venloerstr. 234, 58764 Köln'},
  ]
  const artikel=[
    {label: 'Pide'}
  ]
  const [valueKunden, setValueKunden] = useState(kunden['']);
  const [inputValueKunden, setInputValueKunden] = useState('');
  const [valueArtikel, setValueArtikel] = useState(artikel['']);
  const [inputValueArtikel, setInputValueArtikel] = useState('');

  return (
    <Fragment>
      <CssBaseline />
      <FormControl id="controllable-states-demo">
      <Container maxWidth="xl">
        <h1>Rechnung erstellen</h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '75vh', padding: '1rem' }}>
          <Box sx={{bgcolor: '#fff', height: '25vh'}}>
          <Typography
            textColor="neutral.500" fontSize="xl" fontWeight="lg" marginBottom = "2"
          >
            Kundenangaben
            </Typography>
            <Autocomplete   
      placeholder="Kunde suchen oder erfassen"
      value={valueKunden}
          onChange={(event, newValue) => {
            setValueKunden(newValue);
          }}
          inputValue={inputValueKunden}
          onInputChange={(event, newInputValue) => {
            setInputValueKunden(newInputValue);
          }}
      options={kunden}
      sx={{ width: 400, bgcolor: "#fff"}}
    />
    <hr/>
    <Autocomplete   
      placeholder="Produkten suchen oder erfassen"
      value={valueArtikel}
          onChange={(event, newValue) => {
            setValueArtikel(newValue);
          }}
          inputValue={inputValueArtikel}
          onInputChange={(event, newInputValue) => {
            setInputValueArtikel(newInputValue);
          }}
      options={artikel}
      sx={{ width: 400, bgcolor: "#fff"}}
    />
    </Box>
    <Box>
    <Grid container spacing={2}>
      <Typography level="body">
        <code>Firmen Name: </code>
        <Typography variant="soft" sx={{ py: 0.4 }}>
          <FormGroup>
            <strong>{`${inputValueKunden}`}</strong>
          </FormGroup>
        </Typography>
      </Typography>
      <Typography level='body'>
        <code>Produkte: </code>
        <Typography variant='soft' sx={{ py: 0.4 }}>
          <FormGroup>
            <strong>{`${inputValueArtikel}`}</strong>
            <TextField sx={{maxWidth: 65, bgcolor: '#fff'}} size="sm" label="Stuck" placeholder="Menge"/>
          </FormGroup>
        </Typography>
      </Typography>
      </Grid>
      </Box>
        </Box>
      </Container>
      </FormControl>
    </Fragment>
  )
}



