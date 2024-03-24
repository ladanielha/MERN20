import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../Layout";
import { Navigate, useNavigate } from "react-router-dom";

const AddUserPost = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/users", {
        name: name,
        job: job,
      });
      console.log(response.data);
      navigate("/users");
    } catch (error) {
      console.log("Gagal Menambah User", error);
      setError("Gagal Menambahkan User");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleAddUser}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Label>Job</Form.Label>
        <Form.Control
          type="text"
          name="job"
          value={job}
          placeholder="Job"
          onChange={(e) => setJob(e.target.value)}
        />
        <Button type="submit">Add User</Button>
      </Form>
    </Container>
  );
};

export default AddUserPost;
