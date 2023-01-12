import React from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./Context/UserContext";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import { ProductContextProvider } from "./Context/ProductContext";
import App from "./App";
import { CustomerProvider } from "./Context/CustomerContext";
// import { Provider } from 'react-redux';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
     {/* <AdminContextProvider>  */}
     
      <UserContextProvider>
        <CustomerProvider>
        {/* <ProductContextProvider> */}
          {/* <CartContextProvider> */}
          <App />
          {/* </CartContextProvider> */}
        {/* </ProductContextProvider> */}
        </CustomerProvider>
      </UserContextProvider>
    {/* </AdminContextProvider>  */}
    {/* </Provider> */}
  </React.StrictMode>
);