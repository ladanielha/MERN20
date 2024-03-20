import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/page404";
import Users from "./pages/Users";
import AddUser from "./pages/User/AddUser";

function App() {
  return (
    <Routes>
      
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<AddUser />} />
        <Route path="*" element={<Page404 />} />
      
    </Routes>
  );
}

export default App;
