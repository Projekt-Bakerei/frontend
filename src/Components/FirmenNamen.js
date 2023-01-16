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
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', padding: '1rem' }}>
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