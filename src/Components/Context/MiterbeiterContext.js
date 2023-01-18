import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

//import { useMiterbeiter } from "../Context/MiterbeiterContext";

export const MiterbeiterContext = createContext();

export const MiterbeiterProvider = ({ children }) => {
  const data = "Test Admin";
  const [listData, setListData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delData, setDelData] = useState([]);
  const { token } = useUser();


useEffect(() => {
    loadMiterbeiter();
  }, []);

  function loadMiterbeiter() {
    axios
      .get(`${process.env.REACT_APP_API}/miterbeiters`)
      .then((res) => {
        setListData(res.data);
        console.log("Load Miterbeiter OK")
      }).catch((error) => {
              console.log("Load Miterbeiter Error:", error);
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

  const delMiterbeiter = (
    mName, mAdres, tel, position, extern, kenzeichen
  ) => {
    const data = {
        mName, mAdres, tel, position, extern, kenzeichen
    };
    axios
      .get(`${process.env.REACT_APP_API}/miterbeiters/addmiterbeiter`, data)
      .then((res) => {
        setDelData(res.data);
        console.log("Delete Miterbeiter OK")
      })
      .catch((error) => {
        console.log("Delete Miterbeiter Error:", error);
      });
  };

  return (
    <MiterbeiterContext.Provider
      value={{
        data,
        listData,
        addData,
        editData,
        delData,
        loadMiterbeiter,
        addMiterbeiter,
        editMiterbeiter,
        delMiterbeiter,
      }}
    >
      {children}
    </MiterbeiterContext.Provider>
  );
};

export const useMiterbeiter = () => {
  return useContext(MiterbeiterContext);
};
