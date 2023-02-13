import  {React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';
import { useNewArtikel } from '../Context/ArtikelContext';
import { useUser } from '../Context/UserContext';

import { Button, Typography } from "@mui/material";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDeleteForever } from "react-icons/md";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const { listNewArtikel, delArtikel } = useNewArtikel();

  const [listArtikel, setListArtikel] = useState([]);
  const [selectedArtikel, setSelectedArtikel] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedArtikelName, setSelectedArtikelName] = useState();

useEffect(() => {
 setListArtikel(listNewArtikel)
}, [listNewArtikel]);

let artikel = listArtikel;
  let artikelId = selectedArtikel;
  const CloseButton = ({ closeToast }) => (
    <>
      {/* <div className="d-flex flex-column"> */}
      <i className="material-icons" onClick={closeToast}></i>
      <div className="d-flex flex-wrap gap-2">
        <Button
          variant="contained"
          color="success"
          onClick={onClickNein && closeToast}
        >
          Nein
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Löschen
        </Button>
      </div>
      {/* </div> */}
    </>
  );

  const onClickNein = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  };
  const handleDelete = () => {
    delArtikel(artikelId);
    console.log("Id for delete: ", artikelId);
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  };

  const notify = () => {
    toast.error("Bist du sicher diese Artikel löschen?", {
      closeButton: true,
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    });
  };
  const deleteButton = () => {
    return (
      <>
        <Button
          variant="contained"
          color="error"
          sx={{
            marginTop: 2,
            height: 35,
          }}
          onClick={() => {
            notify();

            // handleDeleteArtikel()
          }}
        >
          <MdDeleteForever />
          &nbsp;Löschen
        </Button>
        <ToastContainer
          transition={Zoom}
          style={{ marginTop: "10rem", width: "300px", bottom: "25rem" }}
          closeButton={CloseButton}
          autoClose={false}
          limit={1}
          toastClassName={
            " relative flex flex-column gap-1 p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
        />
      </>
    );
  };

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
        experimentalFeatures={{ newEditingApi: true, editable: false }}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = artikel?.filter((row) =>
                selectedIDs.has(row.id)
              );
              const artikelId = selectedRows.map(({ id }) => id);
              const artikelName = selectedRows.map(({ NewartikelName }) => NewartikelName);
              setSelectedArtikelName(artikelName);
              setSelectedArtikel(artikelId);
              setSelected(true);
            }}
            {...artikel}
      />
    </Box>
      </Box>
      {selected === true ? (
        <>
          <Box>
            <Typography variant="h5" component="h5">
              Möchetest du diese Produkt löschen?
            </Typography>
            {selectedArtikelName}
          </Box>
          {deleteButton()}
        </>
      ) : null}
    </Container>
  ) : (
    <div>
      <h1>Du bist nicht angemeldet!</h1>
    </div>
  );
}