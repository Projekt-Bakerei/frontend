import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { useUser } from "../Context/UserContext";

export const NewArtikelContext = createContext();

export const NewArtikelProvider = ({ children }) => {
  const data = "Test Admin";
  const [listNewArtikel, setListNewArtikel] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delData, setDelData] = useState([]);
  const { token } = useUser();

  useEffect(() => {
    loadNewArtikel();
  }, []);

  function loadNewArtikel() {
    axios
      .get(`${process.env.REACT_APP_API}/newartikels`)
      .then((res) => {
        setListNewArtikel(res.data);
        console.log("Load Artikels OK");
      })
      .catch((error) => {
        console.log("Load Artikels Error:", error);
      });
  }

  const AddNewArtikel = (
    NewartikelName,
    NewartikelPrice,
    NewartikelBeschreibung,
    NewartikelRabat,
    NewartikelKodu,
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addNewArtikel:", token);

    const data = {
      NewartikelName,
      NewartikelPrice,
      NewartikelBeschreibung,
      NewartikelRabat,
      NewartikelKodu,
    };
    axios
      .post(`${process.env.REACT_APP_API}/newartikels/addartikel`, data, config)
      .then((res) => {
        setAddData(res.data);
        console.log("Create new Artikel OK!")
      })
      .catch((error) => {
        console.log("Create new Artikel Error:", error);
      });
  };

  const editNewArtikel = (
    NewartikelName,
    NewartikelPrice,
    NewartikelBeschreibung,
    NewartikelRabat,
    NewartikelKodu,
  ) => {
    const data = {
      NewartikelName,
      NewartikelPrice,
      NewartikelBeschreibung,
      NewartikelRabat,
      NewartikelKodu,
    };
    axios
      .put(`${process.env.REACT_APP_API}/newartikels/addartikel`, data)
      .then((res) => {
        setEditData(res.data);
        console.log("Edit Artikel OK");
      })
      .catch((error) => {
        console.log("Edit Artikel Error:", error);
      });
  };

  const delNewArtikel = (
    NewartikelName,
    NewartikelPrice,
    NewartikelBeschreibung,
    NewartikelRabat,
    NewartikelKodu,
  ) => {
    const data = {
      NewartikelName,
      NewartikelPrice,
      NewartikelBeschreibung,
      NewartikelRabat,
      NewartikelKodu,
    };
    axios
      .get(`${process.env.REACT_APP_API}/newartikels/deleteartikel`, data)
      .then((res) => {
        setDelData(res.data);
        console.log("Delete Artikel OK");
      })
      .catch((error) => {
        console.log("Delete Artikel Error:", error);
      });
  };

  return (
    <NewArtikelContext.Provider
      value={{
        data,
        listNewArtikel,
        addData,
        editData,
        delData,
        loadNewArtikel,
        AddNewArtikel,
        editNewArtikel,
        delNewArtikel,
      }}
    >
      {children}
    </NewArtikelContext.Provider>
  );
};

export const useNewArtikel = () => {
  return useContext(NewArtikelContext);
};
