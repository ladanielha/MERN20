import React, { useState } from "react";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    username: "",
    email: "",
    gender: "",
    address: "",
    image: "",
    file: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCustomer((values) => ({ ...values, [name]: value }));
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    console.log(customer);
  };

  return (
    <>
     <div>AddCustomer</div>
      <form onSubmit={handleSubmint}>
        <label>Name : </label>
        <input
          type="text"
          name="username"
          value={customer.username || ""}
          onChange={handleChange}
        />
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={customer.email || ""}
          onChange={handleChange}
        />
        <br />
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={customer.gender === "Male"}
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={customer.gender === "Female"}
          onChange={handleChange}
        /> Female
        <br />
        <label>Address: </label>
        <textarea
          type="text"
          name="address"
          value={customer.address || ""}
          onChange={handleChange}
        />
        <br/>
        <label>Profile Image : </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <br />
        <label>File : </label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>Hasil  = {customer.username}</div>
      <div>Hasil  = {customer.email}</div>
      <div>Hasil  = {customer.gender}</div>
      <div>Hasil  = {customer.image ? customer.image.name : ""}</div>
      <div>Hasil  = {customer.file ? customer.file.name : ""}</div>
    </>
  );
};

export default AddCustomer;
