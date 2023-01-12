import  {React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';
import { useCustomer } from '../Context/CustomerContext';
import { useUser } from '../Context/UserContext';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'kodu', headerName: 'Müsteri kodu', width: 100, sortable: true, },
  {
    field: 'ismi',
    headerName: 'Firmen Name',
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: 'kisi',
    headerName: 'Kontakt Name',
    type: 'text',
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: 'cadde',
    headerName: 'Adresse',
    description: 'Rechnung Adresse',
    sortable: true,
    width: 250,
    valueGetter: (params) =>
      `${params.row.cadde || ''}, ${params.row.plz || ''} ${params.row.yer|| ''}`,
  },
  {
    field: 'telefon',
    headerName: 'Telefon',
    type: 'number',
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: 'mobil',
    headerName: 'Cep-Tel',
    type: 'number',
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: 'kategory',
    headerName: 'Bar / Rechnung',
    width: 120,
    editable: true,
  },
  {
    field: 'kdv',
    headerName: 'KDV',
    width: 120,
    editable: true,
  },
  {
    field: 'sekli',
    headerName: 'Ödeme sekli',
    width: 120,
    editable: true,
  },
  
];

// const rows = [
//   { id: "8756958975789687b8b707808070n7n", firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 2, firmenName: 'Aliemsi GmbH', kontaktName: 'Ali', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 3, firmenName: 'Epsi Gmbh', kontaktName: 'Suleaman', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 4, firmenName: 'Dres Gmbh', kontaktName: 'Alali', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 5, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 6, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 7, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 8, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 9, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 10, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 11, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
//   { id: 12, firmenName: 'Snow Düner GmbH', kontaktName: 'Petar Smith', telefon: '0152525252535', adresse: 'Venoerstr. 275, 50823 Köln', text: 'Firmen sitzt bla bla' },
// ];



export default function FirmenNamen() {
  const { token } = useUser();

  const { listData } = useCustomer();
  console.log("List Costumers:", listData)

const [listKunden, setListKunden] = useState([]);

useEffect(() => {
 setListKunden(listData)
}, [listData]);

let kunden = listKunden;
console.log("Kunden:", kunden)


  return token ? (
    <Container maxWidth="xl">
        <h1>Kunden</h1>
        <Box sx={{ bgcolor: '#cfe8fc', height: '75vh', padding: '1rem' }}>
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={kunden}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[12]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </Box>
    </Container>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
}