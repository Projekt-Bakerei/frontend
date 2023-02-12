import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

export const LieferscheinContext = createContext();

export const LieferscheinProvider = ({ children }) => {
  const data = "Test Admin";
  const [listLieferscheinNummer, setListLieferscheinNummer] = useState([]);
  const [addLieferscheinNummer, setAddLieferscheinNummer] = useState([]);
  const [editLieferscheinNummer, setEditLieferscheinNummer] = useState([]);
  const [delLieferscheinNummer, setDelLieferscheinNummer] = useState([]);
  const { token } = useUser();


useEffect(() => {
    loadLieferscheinNummer();
  }, []);

  function loadLieferscheinNummer() {
    axios
      .get(`${process.env.REACT_APP_API}/lieferscheinsnummer`)
      .then((res) => {
        setListLieferscheinNummer(res.data);
        console.log("Load LieferscheinNummer OK")
      }).catch((error) => {
              console.log("Load LieferscheinNummer Error:", error);
            });
  }

  const addLieferscheinNummerNew = (
    lieferscheinNummerNew
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addLieferscheinNummer:", token);

    const data = {
      lieferscheinNummerNew
    };
    axios
      .post(`${process.env.REACT_APP_API}/lieferscheinsnummer/addnummer`, data, config)
      .then((res) => {
        setAddLieferscheinNummer(res.data);
      })
      .catch((error) => {
        console.log("Create new LieferscheinNummer Error:", error);
      });
  };

  const editLieferscheinNummerNew = (
    lieferscheinNummerNew
  ) => {
    const data = {
      lieferscheinNummerNew
    };
    axios
      .put(`${process.env.REACT_APP_API}/lieferscheinsnummer/editnummer`, data)
      .then((res) => {
        setEditLieferscheinNummer(res.data);
        console.log("Edit LieferscheinNummer OK")
      })
      .catch((error) => {
        console.log("Edit LieferscheinNummer Error:", error);
      });
  };

  const delLieferscheinNummerNew = (
    lieferscheinNummerNew
  ) => {
    const data = {
      lieferscheinNummerNew
    };
    axios
      .get(`${process.env.REACT_APP_API}/lieferscheinsnummer/delnummer`, data)
      .then((res) => {
        setDelLieferscheinNummer(res.data);
        console.log("Delete LieferscheinNummer OK")
      })
      .catch((error) => {
        console.log("Delete LieferscheinNummer Error:", error);
      });
  };

  return (
    <LieferscheinContext.Provider
      value={{
        data,
        listLieferscheinNummer,
        addLieferscheinNummer,
        editLieferscheinNummer,
        delLieferscheinNummer,
        loadLieferscheinNummer,
        addLieferscheinNummerNew,
        editLieferscheinNummerNew,
        delLieferscheinNummerNew,
      }}
    >
      {children}
    </LieferscheinContext.Provider>
  );
};

export const useLieferscheinContext = () => {
  return useContext(LieferscheinContext);
};
