import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const data = "Test Admin";
  const [listData, setListData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delData, setDelData] = useState([]);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("token");
    return token || null;
  });

  useEffect(() => {
    let timeoutHandle = 0;
    if (token) {
      localStorage.setItem("token", token);
      const decoded = jwt_decode(token);
      timeoutHandle = setTimeout(() => {
        setToken(null);
      }, decoded.exp * 1000 - Date.now());
    } else {
      localStorage.removeItem("token");
    }
    return () => {
      if (timeoutHandle !== 0) {
        clearTimeout(timeoutHandle);
      }
    };
  }, [token]);

  const loadCustomer = async (
    id,
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
    try {
      const list = await axios.get(
        `${process.env.REACT_APP_API}/customer/${id}`,
        {
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
        }
      );
      setListData(list.data);
      console.log("Data context",list.data)
    } catch (err) {
      console.log("Load Customer error:", err);
    }
  };

  const addCustomer = async (
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
    try {
      const add = await axios.post(`${process.env.REACT_APP_API}/addcustomer`, {
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
      });
      setAddData(add.data);
    } catch (err) {
      console.log("Add Customer error:", err);
    }
  };

  const editCustomer = async (
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
    try {
      const edit = await axios.put(
        `${process.env.REACT_APP_API}/editcustomer`,
        {
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
        }
      );
      setEditData(edit.data);
    } catch (err) {
      console.log(err);
    }
  };

  const delCustomer = async (
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
    try {
      const del = await axios.delete(`${process.env.REACT_APP_API}/customer`, {
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
      });
      setDelData(del.data);
    } catch (err) {
      console.log(err);
    }
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
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  return useContext(CustomerContext);
};
