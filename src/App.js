import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Pages/Home";
import MenuComponents from "./Components/Menu/MenuComponent";
import { LoginForm } from "./Components/Login/SignIn";
import { Register } from "./Components/Login/Signup";

import FirmenDaten from "./Components/Pages/FirmenDaten";

import Employees from "./Components/Miterbeiter/Employees";
import NewMiterbeiter from "./Components/Miterbeiter/NewMiterbeiter";

import { NewArtikel } from "./Components/Customer/NewArtikel";
import Produkte from "./Components/Artikel/Artikel";

import FirmenNamen from "./Components/Customer/FirmenNamen";
import NewCustomer from "./Components/Customer/NewCustomer";
import AddArtikel from "./Components/Artikel/AddArtikel";

import { CreateInvoice } from "./Components/Rechnung/CreateInvoice";
import BelegeMenu from "./Components/Menu/Belege";
import Ausgangsbelege from "./Components/Belege/Ausgangsbelege";
import Eingagngsbelege from "./Components/Rechnung/Eingangsbelege";
import { AddLieferschein } from "./Components/Lieferschein/AddLieferschein";
import NewFahrer from "./Components/Miterbeiter/NewFahrer";
import ListFahrer from "./Components/Miterbeiter/ListFahrer";
import ListLieferschein from "./Components/Lieferschein/ListLieferschein";
import FahrerService from "./Components/Lieferschein/FahrerService";


function App() {
  return (
    <>
      <Router>
        <MenuComponents />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/createinvoice" exact element={<CreateInvoice />} />
          <Route path="/customers" exact element={<FirmenNamen />} />
          <Route path="/newcustomer" exact element={<NewCustomer />} />
          <Route path="/newmiterbeiter" exact element={<NewMiterbeiter />} />
          <Route path="/newfahrer" exact element={<NewFahrer />} />
          <Route path="/listfahrer" exact element={<ListFahrer />} />

          <Route path="/employees" exact element={<Employees />} />
          <Route path="/products" exact element={<Produkte />} />
          <Route path="/about" exact element={<FirmenDaten />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/newartikel" exact element={<NewArtikel />} />
          <Route path="/addartikel" exact element={<AddArtikel />} />
          <Route path="/belege" exact element={<BelegeMenu />} />
          <Route path="/ausgangsbelege" exact element={<Ausgangsbelege />} />
          <Route path="/eingangsbelege" exact element={<Eingagngsbelege />} />
          <Route path="/lieferschein" exact element={<AddLieferschein />} />
          <Route path="/listlieferschein" exact element={<ListLieferschein />} />
          <Route path="/fahrerservice" exact element={<FahrerService />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
