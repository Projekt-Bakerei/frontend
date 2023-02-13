import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import { useMiterbeiter } from "../Context/MiterbeiterContext";
import { useUser } from "../Context/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDeleteForever } from "react-icons/md";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "mName",
    headerName: "Name",
    width: 180,
    editable: true,
    sortable: true,
  },
  {
    field: "mAdres",
    headerName: "Adresse",
    type: "text",
    width: 350,
    editable: true,
    sortable: true,
  },
  {
    field: "tel",
    headerName: "Telefon",
    type: "number",
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: "position",
    headerName: "Position",
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: "kenzeichen",
    headerName: "Bus Kenzeichen",
    width: 120,
    editable: true,
  },
];

export default function ListFahrer() {
  const { token } = useUser();
  const { listFahrer, delFahrer } = useMiterbeiter();

  const [listFahrern, setListFahrern] = useState([]);
  const [selectedFahrer, setSelectedFahrer] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedFahrerName, setSelectedFahrerName] = useState();

  useEffect(() => {
    setListFahrern(listFahrer);
  }, [listFahrer]);

  let miterbeiter = listFahrern;
  let fahrerId = selectedFahrer;

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
    delFahrer(fahrerId);
    console.log("Id for delete: ", fahrerId);
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  };

  const notify = () => {
    toast.error("Bist du sicher diese Fahrer löschen?", {
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
      <h1>Fahrer Dosyasi</h1>
      <Box sx={{ bgcolor: "#EAEDF0", height: "70vh", padding: "1rem" }}>
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={miterbeiter}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[12]}
            experimentalFeatures={{ newEditingApi: true, editable: false }}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = miterbeiter?.filter((row) =>
                selectedIDs.has(row.id)
              );
              const fahrerId = selectedRows.map(({ id }) => id);
              const fahrerName = selectedRows.map(({ mName }) => mName);
              setSelectedFahrerName(fahrerName);
              setSelectedFahrer(fahrerId);
              setSelected(true);
            }}
            {...miterbeiter}
          />
          {/* <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedRows, null, 4)}
      </pre> */}
        </Box>
      </Box>
      {selected === true ? (
        <>
          <Box>
            <Typography variant="h5" component="h5">
              Möchetest du diese Miterbeiter löschen?
            </Typography>
            {selectedFahrerName}
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
