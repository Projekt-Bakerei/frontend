import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useUser } from "../Context/UserContext";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const data = "Test Admin";
  const [listData, setListData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delData, setDelData] = useState([]);
  const { token } = useUser();
  const [tokenSet, setTokenSet] = useState();
  // const [authToken, setAuthToken] = useState(() => {
  //   const authToken = localStorage.getItem("token");
  //   return authToken || null;
  // });

  // useEffect(() => {
  //   let timeoutHandle = 0;
  //   if (token) {
  //     localStorage.setItem("token", token);
  //     const decoded = jwt_decode(token);
  //     timeoutHandle = setTimeout(() => {
  //       setToken(null);
  //     }, decoded.exp * 1000 - Date.now());
  //   } else {
  //     localStorage.removeItem("token");
  //   }
  //   return () => {
  //     if (timeoutHandle !== 0) {
  //       clearTimeout(timeoutHandle);
  //     }
  //   };
  // }, [token]);

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
      console.log("Data context", list.data);
    } catch (err) {
      console.log("Load Customer error:", err);
    }
  };

  //   console.log("Token Customer Context:", token);
  //   let authToken = token;
  //   const addCustomer = async (
  //     kodu,
  //     passiv,
  //     hitab,
  //     kategory,
  //     ismi,
  //     kdv,
  //     kisi,
  //     sekli,
  //     cadde,
  //     plz,
  //     yer,
  //     telefon,
  //     mobil
  //   ) => {
  //     try {
  // const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${authToken}`,
  //       },
  //     };
  //     console.log("Token addCustomer:", authToken)
  //       const add = await axios.post(
  //         `${process.env.REACT_APP_API}/customers/addcustomer`,
  //         {
  //           kodu,
  //           passiv,
  //           hitab,
  //           kategory,
  //           ismi,
  //           kdv,
  //           kisi,
  //           sekli,
  //           cadde,
  //           plz,
  //           yer,
  //           telefon,
  //           mobil,
  //         },
  //         config
  //       );

  //       //  setAuthToken(authToken);
  //       setTokenSet(add.data);
  //       setAddData(add.data);
  //     } catch (error) {

  //       console.log("AddData:", addData);
  //       console.log("Add Customer error:", error);
  //     }
  //   };

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
    mobil,
    ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addCustomer:", token);

    const data = 
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
    mobil
    }
    axios
      .post(`${process.env.REACT_APP_API}/customers/addcustomer`, data, config)
      .then((res) => {
        setAddData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
