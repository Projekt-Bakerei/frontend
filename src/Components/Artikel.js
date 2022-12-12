import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'producktName',
    headerName: 'Produkt Name',
    width: 150,
    editable: true,
  },
  {
    field: 'kategorien',
    headerName: 'Kategorien',
    width: 150,
    editable: true,
  },
  {
    field: 'gewicht',
    headerName: 'Gewicht',
    description: 'Fertige Gewicht',
    sortable: true,
    width: 60,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 60,
    editable: true,
    sortable: true,
  },
  {
    field: 'alergen',
    headerName: 'Alergen',
    type: 'number',
    width: 210,
    editable: false,
  },
];

const rows = [
  { id: 1, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 2, producktName: 'Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 3, producktName: 'Pide', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 4, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 5, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 6, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 7, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 8, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 9, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
  { id: 10, producktName: 'Fladen Brot', kategorien: 'Brot', gewicht: '125', price: '0,59 €', alergen: 'Lacktose, Mehl' },
];

export default function Produkte() {
  return (
    <Container maxWidth="xl">
        <h1>Alle Produkte Beckarei</h1>
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