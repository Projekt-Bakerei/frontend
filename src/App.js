import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateInvoice } from "./Components/CreateInvoice";
import MenuComponents from "./Components/Menu/MenuComponent";
import FirmenNamen from "./Components/FirmenNamen";

import Home from "./Components/Pages/Home";
import Employees from "./Components/Employees";
import Produkte from "./Components/Artikel";
import FirmenDaten from "./Components/Pages/FirmenDaten";
import { LoginForm } from "./Components/Login/SignIn";
import NewCustomer from "./Components/NewCustomer";
import NewMiterbeiter from "./Components/NewMiterbeiter";
import { Register } from "./Components/Login/Signup";
import { NewArtikel } from "./Components/NewArtikel";
import AddArtikel from "./Components/AddArtikel";

function App() {
  return (
    <>
    <Router>
      <MenuComponents /> 
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/voucher" exact element={<CreateInvoice />} />
      <Route path="/customers" exact element={<FirmenNamen />} />
      <Route path="/newcustomer" exact element={<NewCustomer />} />
      <Route path="/newmiterbeiter" exact element={<NewMiterbeiter />} />
      <Route path="/employees" exact element={<Employees />} />
      <Route path="/products" exact element={<Produkte />} />
      <Route path="/about" exact element={<FirmenDaten />} />
      <Route path="/login" exact element={<LoginForm />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/newartikel" exact element={<NewArtikel />} />
      <Route path="/addartikel" exact element={<AddArtikel />} />

     </Routes>
     </Router>
    </>
  );
}

export default App;
