import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const SettingsContext = createContext();

export const SettingsContextProveider = ({ children }) => {
  const [dataUsers, setDataUsers] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}`);
        setDataUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <SettingsContext.Provider value={{ dataUsers, setDataUsers }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};