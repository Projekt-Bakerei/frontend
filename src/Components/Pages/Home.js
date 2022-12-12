import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Typography from '@mui/joy/Typography';

function Home() {
  return (

    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="xl">
        <h1>Home</h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '75vh', padding: '1rem' }}>
          <Typography
            textColor="neutral.500" fontSize="xl" fontWeight="lg"
          >Aufgaben</Typography>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Home