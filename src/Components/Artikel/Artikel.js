import  {React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';
import { useNewArtikel } from '../Context/ArtikelContext';
import { useUser } from '../Context/UserContext';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'NewartikelKodu', headerName: 'Ürün kodu', width: 120, sortable: true, },
  {
    field: 'NewartikelName',
    headerName: 'Ürün',
    width: 200,
    editable: true,
    sortable: true,
  },
  {
    field: 'NewartikelBeschreibung',
    headerName: 'Beschreibung',
    type: 'text',
    width: 450,
    editable: true,
    sortable: true,
  },
  {
    field: 'NewartikelPrice',
    headerName: 'Price',
    description: 'Grund Price',
    sortable: true,
    width: 120,
  //   valueGetter: (params) =>
  //     `${params.row.cadde || ''}, ${params.row.plz || ''} ${params.row.yer|| ''}`,
   },
  {
    field: 'NewartikelRabat',
    headerName: 'Rabat %',
    type: 'number',
    width: 120,
    editable: true,
    sortable: true,
  },

  
];

export default function FirmenNamen() {
  const { token } = useUser();

  const { listNewArtikel } = useNewArtikel();
  console.log("List Costumers:", listNewArtikel)

const [listArtikel, setListArtikel] = useState([]);

useEffect(() => {
 setListArtikel(listNewArtikel)
}, [listNewArtikel]);

let artikel = listArtikel;
console.log("Artikel:", artikel)


  return token ? (
    <Container maxWidth="xl">
        <h1>Alle Artikel / Ürün Dosiyes</h1>
        <Box sx={{ bgcolor: '#EAEDF0', height: '75vh', padding: '1rem' }}>
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={artikel}
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