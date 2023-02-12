import React, { useContext } from 'react';

import { LoadingContext } from '../Context/LoadingContext';

const Loading = () => {
    const { loadingGif } = useContext(LoadingContext);
    return (
        <div className='d-flex justify-content-center md-auto'>
            <img src={loadingGif} alt="Loading..." style={{ with: "10px",
          height: "auto", position: "absolute",
          zIndex: 1, marginTop: "10rem"}}/>
        </div>
    );
}

export default Loading;



/*

import React from 'react'
import spiner from '../../image/loading.gif';


export default function Loading() {
  
  return  (

    <div className='d-flex justify-content-center mt-6'><img src={spiner} alt="Spiner" /></div>
  ) 
}
*/