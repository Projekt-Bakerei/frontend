import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'kontaktName',
    headerName: 'Kontakt Name',
    width: 150,
    editable: true,
  },
  {
    field: 'firmenName',
    headerName: 'Firmen Name',
    width: 150,
    editable: true,
  },
  {
    field: 'adresse',
    headerName: 'Adresse',
    description: 'Rechnung Adresse',
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
    field: 'text',
    headerName: 'Beschreibung',
    type: 'number',
    width: 210,
    editable: false,
  },
];

const rows = [
  { id: 1, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 2, firmenName: 'Aliemsi GmbH', kontaktName: 'Ali', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 3, firmenName: 'Epsi Gmbh', kontaktName: 'Suleaman', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 4, firmenName: 'Dres Gmbh', kontaktName: 'Alali', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 5, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 6, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 7, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 8, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 9, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 10, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 11, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
  { id: 12, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
];

export default function FirmenNamen() {
  return (
    <Container maxWidth="xl">
        <h1>Kunden</h1>
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