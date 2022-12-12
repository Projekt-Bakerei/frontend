import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'vorName',
    headerName: 'Vor- Name',
    width: 150,
    editable: true,
  },
  {
    field: 'familienName',
    headerName: 'Familien Name',
    width: 150,
    editable: true,
  },
  {
    field: 'adresse',
    headerName: 'Adresse',
    description: 'Wohnung Adresse',
    sortable: true,
    width: 260,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'telefon',
    headerName: 'Telefon',
    type: 'number',
    width: 210,
    editable: true,
    sortable: true,
  },
  {
    field: 'position',
    headerName: 'Position',
    type: 'number',
    width: 210,
    editable: false,
  },
];

const rows = [
  { id: 1, vorName: 'Sunai', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 2, vorName: 'Emo', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Shofeur' },
  { id: 3, vorName: 'Ahmed', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 4, vorName: 'Meme', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 5, vorName: 'Rocki', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 6, vorName: 'Lasgo', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 7, vorName: 'Sunai', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 8, vorName: 'Sunai', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 9, vorName: 'Sunai', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 10, vorName: 'Sunai', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  { id: 11, vorName: 'Sunai', familienName: 'Alie', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', position: 'Master Bäcker' },
  
];

export default function Employees() {
  return (
    <Container maxWidth="xl">
        <h1>Alle Miterbeiter Beckarei</h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '75vh', padding: '1rem' }}>
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </Box>
    </Container>
  );
}