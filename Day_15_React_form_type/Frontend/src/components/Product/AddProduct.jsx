import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [rakNumber, setRakNumber] = useState("")

  const handleSubmint = (e) => {
    e.preventDefault();
    console.log(productName,rakNumber)
  };
  return (
    <>
      <div>AddProduct</div>
      <form onSubmit={handleSubmint}>
        <label>Nama Produk : </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <br></br>
        <label>Harga : </label>
        <input
          type="text"
          value={rakNumber}
          onChange={(e) => setRakNumber(e.target.value)}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <div>Hasil = {productName}</div>
      <div>Hasil = {parseInt(rakNumber)}</div>
    </>
  );
};

export default AddProduct;
