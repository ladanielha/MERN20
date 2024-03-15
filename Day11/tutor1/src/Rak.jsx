import React from 'react'

const Rak = (props) => {
    console.log(props)
    const infoProduk = {
        nama: "Wafer Coklat",
        harga: 2000,
        }
        
  return (
    <div>Compnent rak : {infoProduk.nama}</div>
  )
}

export default Rak