import React from 'react'
import Rak from './Rak'

const Produk = (props) => {
  return (<>
  <h2>Component Produk =  {props = props.namaProduk}</h2>
  <Rak props={props}/>
  
  </>
  )
}

export default Produk