// import React from 'react'
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import Rak from "./components/Rak";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Rak namaProduk="Makanan ringan" />
  </>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
