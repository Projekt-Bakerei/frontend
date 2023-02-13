import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import { useCustomer } from "../Context/CustomerContext";
import { useUser } from "../Context/UserContext";

import { Button, Typography } from "@mui/material";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDeleteForever } from "react-icons/md";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "kodu", headerName: "Müsteri kodu", width: 100, sortable: true },
  {
    field: "ismi",
    headerName: "Firmen Name",
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: "kisi",
    headerName: "Kontakt Name",
    type: "text",
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: "cadde",
    headerName: "Adresse",
    description: "Rechnung Adresse",
    sortable: true,
    width: 250,
    valueGetter: (params) =>
      `${params.row.cadde || ""}, ${params.row.plz || ""} ${
        params.row.yer || ""
      }`,
  },
  {
    field: "telefon",
    headerName: "Telefon",
    type: "number",
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: "mobil",
    headerName: "Cep-Tel",
    type: "number",
    width: 120,
    editable: true,
    sortable: true,
  },
  {
    field: "kategory",
    headerName: "Bar / Rechnung",
    width: 120,
    editable: true,
  },
  {
    field: "kdv",
    headerName: "KDV",
    width: 120,
    editable: true,
  },
  {
    field: "sekli",
    headerName: "Ödeme sekli",
    width: 120,
    editable: true,
  },
];

export default function FirmenNamen() {
  const { token } = useUser();

  const { listData, delCustomer } = useCustomer();
  console.log("List Costumers:", listData);

  const [listKunden, setListKunden] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedCustomerName, setSelectedCustomerName] = useState();

  useEffect(() => {
    setListKunden(listData);
  }, [listData]);

  let kunden = listKunden;
  let customerId = selectedCustomer;

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
    delCustomer(customerId);
    console.log("Id for delete: ", customerId);
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  };

  const notify = () => {
    toast.error("Bist du sicher diese Kunde löschen?", {
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
      <h1>Alle Kunden</h1>
      <Box sx={{ bgcolor: "#EAEDF0", height: "75vh", padding: "1rem" }}>
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={kunden}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[12]}
            experimentalFeatures={{ newEditingApi: true, editable: false }}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = kunden?.filter((row) =>
                selectedIDs.has(row.id)
              );
              const customerId = selectedRows.map(({ id }) => id);
              const customerName = selectedRows.map(({ ismi }) => ismi);
              setSelectedCustomerName(customerName);
              setSelectedCustomer(customerId);
              setSelected(true);
            }}
            {...kunden}
          />
        </Box>
      </Box>
      {selected === true ? (
        <>
          <Box>
            <Typography variant="h5" component="h5">
              Möchetest du diese Kunden löschen?
            </Typography>
            {selectedCustomerName}
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
