import React, { createContext, useState } from 'react';
import loadingGif from '../../image/loading.gif';

export const LoadingContext = createContext();

const LoadingProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const showLoading = () => {
        setIsLoading(true);
    }

    const hideLoading = () => {
        setIsLoading(false);
    }

    return (
        <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading, loadingGif }}>
            {props.children}
        </LoadingContext.Provider>
    );
}

export default LoadingProvider;











/*
import { createContext, useContext, useState, useEffect } from "react";
import spiner from '../../image/loading.gif';


export const LoadingContext = createContext({
  loading: false,
  setLoading: null,
});

export function useLoading() {

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setTimeout(function () {
      <div className='d-flex justify-content-center mt-6'><img src={spiner} alt="Spiner" /></div>
      console.log('LoadingContext for 5 second.')
      setLoading(true)
    }, 5000)
  }, [])
  
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error(<div className='d-flex justify-content-center mt-6'><img src={spiner} alt="Spiner" /></div>);
  }
  return context;
};

export const LoadingContextProveider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={{value, useLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};
-------------------------------------------------------------------
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  loading: false,
  setLoading: null,
});

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState("Magari");
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}


*/