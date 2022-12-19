import React from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./Context/UserContext";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import { ProductContextProvider } from "./Context/ProductContext";
import App from "./App";
// import { Provider } from 'react-redux';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
     {/* <AdminContextProvider>  */}
      <UserContextProvider>
        {/* <ProductContextProvider> */}
          {/* <CartContextProvider> */}
          <App />
          {/* </CartContextProvider> */}
        {/* </ProductContextProvider> */}
      </UserContextProvider>
    {/* </AdminContextProvider>  */}
    {/* </Provider> */}
  </React.StrictMode>
);