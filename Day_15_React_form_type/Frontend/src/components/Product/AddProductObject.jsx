import React, { useState } from "react";

const AddProductObject = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProduct((values) => ({ ...values, [name]: value }));
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <>
      <div>AddProductObject</div>
      <form onSubmit={handleSubmint}>
        <label>Nama Produk : </label>
        <input
          type="text"
          name="name"
          value={product.name || ""}
          onChange={handleChange}
        />
        <br></br>
        <label>Kategori: </label>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="Gaming">PC Gaming</option>
          <option value="Kantor">PC Kantor</option>
          <option value="Server">PC Server</option>
        </select>
        <br></br>
        <label>Deskripsi : </label>
        <input
          type="text"
          name="description"
          value={product.description || ""}
          onChange={handleChange}
        />
        <br></br>
        <label>Harga : </label>
        <input
          type="number"
          name="price"
          value={product.price || ""}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <div>Hasil = {product.name}</div>
      <div>Hasil = {product.category}</div>
      <div>Hasil = {product.description}</div>
      <div>Hasil = {parseInt(product.price)}</div>
    </>
  );
};

export default AddProductObject;
