import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Layout";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    job: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUserData(response.data.data);
      } catch (error) {
        console.log("Failed to fetch user details", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleEditChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`https://reqres.in/api/users/${id}`, userData);
      console.log(response)
      navigate(-1);
    } catch (error) {
      console.log("Failed to update user", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
  
      <Form onSubmit={handleEditChange}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={userData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <Form.Label>Job</Form.Label>
        <Form.Control
          type="text"
          name="job"
          value={userData.job}
          placeholder="Job"
          onChange={handleChange}
        />
        <Button type="submit">Update User</Button>
      </Form>
  );
};

export default EditUser;
