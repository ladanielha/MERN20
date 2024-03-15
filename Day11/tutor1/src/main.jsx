import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Produk from './Produk.jsx'
import Rak from './Rak.jsx'


// const umur = 18 
// const pesen = "Silahkan masuk"

// let meComponent = <h1> {umur < 18 ? "Belum cukup umur" : "Silakan masuk"}</h1>

ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  // <Produk namaProduk="Wafer Coklat"/>
  // </>
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
