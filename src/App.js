import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateInvoice } from "./Components/CreateInvoice";
import MenuComponents from "./Components/MenuComponent";
import FirmenNamen from "./Components/FirmenNamen";

import Home from "./Components/Pages/Home";
import Employees from "./Components/Employees";
import Produkte from "./Components/Artikel";
import FirmenDaten from "./Components/Pages/FirmenDaten";

function App() {
  return (
    <>
    <Router>
      <MenuComponents /> 
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/voucher" exact element={<CreateInvoice />} />
      <Route path="/customers" exact element={<FirmenNamen />} />
      <Route path="/employees" exact element={<Employees />} />
      <Route path="/products" exact element={<Produkte />} />
      <Route path="/about" exact element={<FirmenDaten />} />
     </Routes>
     </Router>
    </>
  );
}

export default App;
