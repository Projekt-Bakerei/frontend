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
  const { listMiterbeiter, delMiterbeiter } = useMiterbeiter();

  const [listMiterbeitern, setListMiterbeitern] = useState([]);
  const [selectedMiterbeiter, setSelectedMiterbeiter] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedMiterbeiterName, setSelectedMiterbeiterName] = useState();

  useEffect(() => {
    setListMiterbeitern(listMiterbeiter);
  }, [listMiterbeiter]);

  let miterbeiter = listMiterbeitern;
  let miterbeiterId = selectedMiterbeiter;

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
          Delete
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
    delMiterbeiter(miterbeiterId);
    console.log("Id for delete: ", miterbeiterId);
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  };

  const notify = () => {
    toast.error("Bist du sicher diese Fahrer l??schen?", {
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
          &nbsp;L??schen
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
      <h1>Miterbeiter Dosyasi</h1>
      <Box sx={{ bgcolor: "#EAEDF0", height: "70vh", padding: "1rem" }}>
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={miterbeiter}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[12]}
            // checkboxSelection
            experimentalFeatures={{ newEditingApi: true, editable: false }}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = miterbeiter?.filter((row) =>
                selectedIDs.has(row.id)
              );
              const miterbeiterId = selectedRows.map(({ id }) => id);
              const miterbeiterName = selectedRows.map(({ mName }) => mName);
              setSelectedMiterbeiterName(miterbeiterName);
              setSelectedMiterbeiter(miterbeiterId);
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
              M??chetest du diese Miterbeiter l??schen?
            </Typography>
            {selectedMiterbeiterName}
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
