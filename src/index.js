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

//import { LoadingContextProveider } from './Components/Context/LoadingContext'

// import { Provider } from 'react-redux';
//import { LoadingContext, LoadingProvider } from "../src/Components/Context/LoadingContext";

import LoadingProvider from "../src/Components/Context/LoadingContext";
import { LieferscheinProvider } from "./Components/Context/LieferscheinContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}

    {/* <AdminContextProvider>  */}

    <LoadingProvider>
      <UserContextProvider>
        <NewArtikelProvider>
          <MiterbeiterProvider>
            <CustomerProvider>

              <LieferscheinProvider>
                {/* <ProductContextProvider> */}
                {/* <CartContextProvider> */}
                <App />
                {/* </CartContextProvider> */}
                {/* </ProductContextProvider> */}
              </LieferscheinProvider>

            </CustomerProvider>
          </MiterbeiterProvider>
        </NewArtikelProvider>
      </UserContextProvider>
    </LoadingProvider>

    {/* </AdminContextProvider>  */}
    {/* </Provider> */}
  </React.StrictMode>
);
