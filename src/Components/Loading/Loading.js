import React from 'react'
import spiner from '../../image/loading.gif';


export default function Loading() {
  
  return  (

    <div className='d-flex justify-content-center mt-6'><img src={spiner} alt="Spiner" /></div>
  ) 
}
