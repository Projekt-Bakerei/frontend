import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

//import { useMiterbeiter } from "../Context/MiterbeiterContext";

export const MiterbeiterContext = createContext();

export const MiterbeiterProvider = ({ children }) => {
  const data = "Test Admin";
  const [listMiterbeiter, setListMiterbeiter] = useState([]);
  const [listFahrer, setListFahrer] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delMiterbeitern, setDelMiterbeitern] = useState([]);
  const [delFahrern, setDelFahrer] = useState([]);
  const { token } = useUser();


useEffect(() => {
  loadMiterbeiter();
  loadFahrer();
  }, []);

  function loadMiterbeiter() {
    axios
      .get(`${process.env.REACT_APP_API}/miterbeiters`)
      .then((res) => {
        setListMiterbeiter(res.data);
        console.log("Load Miterbeiter OK")
      }).catch((error) => {
              console.log("Load Miterbeiter Error:", error);
            });
  }

  function loadFahrer() {
    axios
      .get(`${process.env.REACT_APP_API}/miterbeiters/fahrern`)
      .then((res) => {
        setListFahrer(res.data);
        console.log("Load Fahrer OK")
      }).catch((error) => {
              console.log("Load Fahrer Error:", error);
            });
  }

  const addMiterbeiter = (
    mName, mAdres, tel, position, extern, kenzeichen
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addMiterbeiter:", token);

    const data = {
        mName, mAdres, tel, position, extern, kenzeichen
    };
    axios
      .post(`${process.env.REACT_APP_API}/miterbeiters/addmiterbeiter`, data, config)
      .then((res) => {
        setAddData(res.data);
      })
      .catch((error) => {
        console.log("Create new Miterbeiter Error:", error);
      });
  };

  const editMiterbeiter = (
    mName, mAdres, tel, position, extern, kenzeichen
  ) => {
    const data = {
        mName, mAdres, tel, position, extern, kenzeichen
    };
    axios
      .put(`${process.env.REACT_APP_API}/miterbeiters/addmiterbeiter`, data)
      .then((res) => {
        setEditData(res.data);
        console.log("Edit Miterbeiter OK")
      })
      .catch((error) => {
        console.log("Edit Miterbeiter Error:", error);
      });
  };

// Delete Miterbeiter
const delMiterbeiter = (
  miterbeiterId,
) => {
  const data = {
    miterbeiterId,
  };
  axios
    .delete(`${process.env.REACT_APP_API}/miterbeiters/deletemiterbeiter/${miterbeiterId}`, data)
    .then((res) => {
      setDelMiterbeitern(res.data);
      console.log("Delete Miterbeiter OK!", miterbeiterId);
    })
    .catch((error) => {
      console.log("Delete Miterbeiter Error:", error.message);
    });
}

  const addFahrer = (
    mName, mAdres, tel, position, extern, kenzeichen
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addMiterbeiter:", token);

    const data = {
        mName, mAdres, tel, position, extern, kenzeichen
    };
    axios
      .post(`${process.env.REACT_APP_API}/miterbeiters/addfahrer`, data, config)
      .then((res) => {
        setAddData(res.data);
      })
      .catch((error) => {
        console.log("Create new Fahrer Error:", error);
      });
  };

  const editFahrer = (
    mName, mAdres, tel, position, extern, kenzeichen
  ) => {
    const data = {
        mName, mAdres, tel, position, extern, kenzeichen
    };
    axios
      .put(`${process.env.REACT_APP_API}/miterbeiters/editfahrer`, data)
      .then((res) => {
        setEditData(res.data);
        console.log("Edit Fahrer OK")
      })
      .catch((error) => {
        console.log("Edit Fahrer Error:", error);
      });
  };


// Delete Fahrer
  const delFahrer = (
    fahrerId,
  ) => {
    const data = {
      fahrerId,
    };
    axios
      .delete(`${process.env.REACT_APP_API}/miterbeiters/delfahrer/${fahrerId}`, data)
      .then((res) => {
        setDelFahrer(res.data);
        console.log("Delete Fahrer OK!", fahrerId);
      })
      .catch((error) => {
        console.log("Delete Fahrer Error:", error.message);
      });
  }

  return (
    <MiterbeiterContext.Provider
      value={{
        data,
        listMiterbeiter,
        addData,
        editData,
        delMiterbeiter,
        loadMiterbeiter,
        addMiterbeiter,
        editMiterbeiter,
        listFahrer,
        addFahrer,
        editFahrer,
        delFahrer,
      }}
    >
      {children}
    </MiterbeiterContext.Provider>
  );
};

export const useMiterbeiter = () => {
  return useContext(MiterbeiterContext);
};
