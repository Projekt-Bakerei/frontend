import React from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./Components/Context/UserContext";
import { MiterbeiterProvider } from "./Components/Context/MiterbeiterContext";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import { ProductContextProvider } from "./Context/ProductContext";
import App from "./App";
import { CustomerProvider } from "./Components/Context/CustomerContext";
import { NewArtikelProvider } from "./Components/Context/ArtikelContext";
// import { Provider } from 'react-redux';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <AdminContextProvider>  */}

    <UserContextProvider>
      <NewArtikelProvider>
        <MiterbeiterProvider>
          <CustomerProvider>
            {/* <ProductContextProvider> */}
            {/* <CartContextProvider> */}
            <App />
            {/* </CartContextProvider> */}
            {/* </ProductContextProvider> */}
          </CustomerProvider>
        </MiterbeiterProvider>
      </NewArtikelProvider>
    </UserContextProvider>

    {/* </AdminContextProvider>  */}
    {/* </Provider> */}
  </React.StrictMode>
);
