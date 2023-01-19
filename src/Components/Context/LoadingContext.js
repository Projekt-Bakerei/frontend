import { createContext, useContext } from "react";

export const LoadingContext = createContext();

export const LoadingContextProveider = ({ children }) => {

    return (
    <LoadingContext.Provider value={{}}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};