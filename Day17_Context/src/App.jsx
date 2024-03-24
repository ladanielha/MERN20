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
import GetListUser from "./pages/User/GetListUser";
import AddUserPost from "./pages/User/AddUserPost";
import EditUser from "./pages/User/EditUser";
import Product from "./pages/Product/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="tambahuser" element={<AddUser />} />
      <Route path="users" element={<GetListUser />}>
        <Route index element={<GetListUser />} />
      </Route>
      <Route path="add" element={<AddUserPost />} />
      <Route path="products" element={<Product />} />
      <Route path="users/edit/:id" element={<EditUser />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
