import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

import { useUser } from "./UserContext";
import { useParams } from "react-router-dom";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children, ID }) => {
  const data = "Test Admin";
  const [listData, setListData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [delCustomers, setDelCustomers] = useState([]);
  const [addDataProduct, setAddDataProduct] = useState([]);
  const [delArtikel, setDelArtikel] = useState([]);

  const { token } = useUser();

  const { customerId } = useParams();

  useEffect(() => {
    loadCustomer();
  }, []);

  function CustomerId() {
    axios
      .get(`${process.env.REACT_APP_API}/customers/customer/${customerId}`)
      .then((response) => response.data.customerId)
      .catch((error) => console.log(error));
    console.log("Customer ID: ", CustomerId);
  }

  function loadCustomer() {
    axios
      .get(`${process.env.REACT_APP_API}/customers`)
      .then((res) => {
        setListData(res.data);
        console.log("Load Customer OK");
      })
      .catch((error) => {
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
    mobil,
    artikelsCu,
    artikelNameCu,
    artikelPriceCu,
    artikelBeschreibungCu,
    artikelKoduCu
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
      artikelsCu,
      artikelNameCu,
      artikelPriceCu,
      artikelBeschreibungCu,
      artikelKoduCu,
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
        console.log("Edit Customer OK");
      })
      .catch((error) => {
        console.log("Edit Customer Error:", error);
      });
  };

  // Delete Customer
  const delCustomer = (customerId) => {
    const data = {
      customerId,
    };
    axios
      .delete(
        `${process.env.REACT_APP_API}/customers/deletecustomer/${customerId}`,
        data
      )
      .then((res) => {
        setDelCustomers(res.data);
        console.log("Delete Miterbeiter OK!", customerId);
      })
      .catch((error) => {
        console.log("Delete Miterbeiter Error:", error.message);
      });
  };

  // Add product to customer
  const createProduct = (
    artikelNameCu,
    artikelKoduCu,
    artikelPriceCu,
    artikelBeschreibungCu,
    customerId
  ) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `${token}`,
    //   },
    // };
    // console.log("Token addCustomer:", token);

    const data = {
      artikelNameCu,
      artikelKoduCu,
      artikelPriceCu,
      artikelBeschreibungCu,
      customerId,
    };
    axios
      .post(
        `${process.env.REACT_APP_API}/customerproduct/addproduct/${customerId}`,
        data
      )
      .then((res) => {
        setAddDataProduct(res.data);
      })
      .catch((error) => {
        console.log("Create new Customer Error:", error.message);
      });
  };

  // Delete Product

  const delProduct = (customerId, artikelsId) => {
    const data = {
      customerId,
      artikelsId,
    };
    console.log("ID Delete: ", artikelsId);
    axios
      .delete(
        `${process.env.REACT_APP_API}/customerproduct/deleteproduct/${customerId}/${artikelsId}`,
        data
      )
      .then((res) => {
        setDelArtikel(res.data);
        console.log("Delete Customer Artikel OK!", customerId);
      })
      .catch((error) => {
        console.log("Delete Customer Artikel Error:", error.message);
      });
  };

  // Create Lieferschein beim Customer
  const createLieferschein = (
    artikelLe,
    artikelName,
    artikelKodu,
    artikelMenge,
    artikelZutaten,
    artikelKistenzahl
  ) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };
    console.log("Token addCustomer:", token);

    const data = {
      artikelLe,
      artikelName,
      artikelKodu,
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
        loadCustomer,
        addCustomer,
        editCustomer,
        delCustomer,
        createLieferschein,
        createProduct,
        addDataProduct,
        customerId,
        delProduct,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  return useContext(CustomerContext);
};
