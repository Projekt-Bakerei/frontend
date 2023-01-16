import  {React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';
import { useMiterbeiter } from '../Context/MiterbeiterContext';
import { useUser } from '../Context/UserContext';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
    field: 'mName',
    headerName: 'Name',
    width: 250,
    editable: true,
    sortable: true,
  },
  {
    field: 'mAdres',
    headerName: 'Adresse',
    type: 'text',
    width: 350,
    editable: true,
    sortable: true,
  },
  {
    field: 'tel',
    headerName: 'Telefon',
    type: 'number',
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: 'position',
    headerName: 'Position',
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: 'kennzeichen',
    headerName: 'Bus Kennzeichen',
    width: 120,
    editable: true,
  },
  
];

export default function FirmenNamen() {
  const { token } = useUser();

  const { listData } = useMiterbeiter();
  console.log("List Miterbeiter:", listData)

const [listMiterbeiter, setListMiterbeter] = useState([]);

useEffect(() => {
 setListMiterbeter(listData)
}, [listData]);

let miterbeiter = listMiterbeiter;
console.log("Miterbeitern:", miterbeiter)


  return token ? (
    <Container maxWidth="xl">
        <h1>Miterbeiter Dosyasi</h1>
        <Box sx={{ bgcolor: '#cfe8fc', maxHeight: '80%', padding: '1rem' }}>
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={miterbeiter}
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