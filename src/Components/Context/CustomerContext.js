import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { useUser } from "./UserContext";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const data = "Test Admin";
  const [listData, setListData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delData, setDelData] = useState([]);
  const { token } = useUser();


useEffect(() => {
    loadCustomer();
  }, []);

  function loadCustomer() {
    axios
      .get(`${process.env.REACT_APP_API}/customers`)
      .then((res) => {
        setListData(res.data);
        console.log("Load Customer OK")
      }).catch((error) => {
              console.log("Load Customer Error:", error);
            });
  }

  const addCustomer = (
    kodu,
    passiv,
    hitab,
    kategory,
    ismi,
    kdv,
    kisi,
    sekli,
    cadde,
    plz,
    yer,
    telefon,
    mobil
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addCustomer:", token);

    const data = {
      kodu,
      passiv,
      hitab,
      kategory,
      ismi,
      kdv,
      kisi,
      sekli,
      cadde,
      plz,
      yer,
      telefon,
      mobil,
    };
    axios
      .post(`${process.env.REACT_APP_API}/customers/addcustomer`, data, config)
      .then((res) => {
        setAddData(res.data);
      })
      .catch((error) => {
        console.log("Create new Customer Error:", error);
      });
  };

  const editCustomer = (
    kodu,
    passiv,
    hitab,
    kategory,
    ismi,
    kdv,
    kisi,
    sekli,
    cadde,
    plz,
    yer,
    telefon,
    mobil
  ) => {
    const data = {
      kodu,
      passiv,
      hitab,
      kategory,
      ismi,
      kdv,
      kisi,
      sekli,
      cadde,
      plz,
      yer,
      telefon,
      mobil,
    };
    axios
      .put(`${process.env.REACT_APP_API}/customers/addcustomer`, data)
      .then((res) => {
        setEditData(res.data);
        console.log("Edit Customer OK")
      })
      .catch((error) => {
        console.log("Edit Customer Error:", error);
      });
  };

  const delCustomer = (
    kodu,
    passiv,
    hitab,
    kategory,
    ismi,
    kdv,
    kisi,
    sekli,
    cadde,
    plz,
    yer,
    telefon,
    mobil
  ) => {
    const data = {
      kodu,
      passiv,
      hitab,
      kategory,
      ismi,
      kdv,
      kisi,
      sekli,
      cadde,
      plz,
      yer,
      telefon,
      mobil,
    };
    axios
      .get(`${process.env.REACT_APP_API}/customers/addcustomer`, data)
      .then((res) => {
        setDelData(res.data);
        console.log("Delete Customer OK")
      })
      .catch((error) => {
        console.log("Delete Customer Error:", error);
      });
  };

  // Create Lieferschein beim Customer
  const createLieferschein = (
    artikelKodu,
    artikelName,
    artikelMenge,
    artikelZutaten,
    artikelKistenzahl,
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addCustomer:", token);

    const data = {
    artikelKodu,
    artikelName,
    artikelMenge,
    artikelZutaten,
    artikelKistenzahl,
    };
    axios
      .post(`${process.env.REACT_APP_API}/customers/addcustomer`, data, config)
      .then((res) => {
        setAddData(res.data);
      })
      .catch((error) => {
        console.log("Create new Customer Error:", error);
      });
  };


  return (
    <CustomerContext.Provider
      value={{
        data,
        listData,
        addData,
        editData,
        delData,
        loadCustomer,
        addCustomer,
        editCustomer,
        delCustomer,
        createLieferschein,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  return useContext(CustomerContext);
};
