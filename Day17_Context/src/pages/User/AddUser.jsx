import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AddUser = () => {
  const [newuser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    hobby: [],
    makanan: [],
    image: "",
    file: "",
    bool: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedHobbies = checked
        ? [...newuser.hobby, value]
        : newuser.hobby.filter((hobby) => hobby !== value);
      setNewUser({ ...newuser, hobby: updatedHobbies });
    } else {
      setNewUser({ ...newuser, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table("data user:", newuser);
  };

  return (
    <Container>
      <h1>Add User</h1>
      <Form onSubmit={handleSubmit}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={newuser.username}
            placeholder="username"
            onChange={handleChange}
          />
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Group controlId="exampleForm.ControlInput1"></Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={newuser.email}
            placeholder="name@example.com"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={newuser.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <Form.Text muted>Your password must be 8 characters long</Form.Text>
          </Form.Group>
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              inline
              label="Male"
              type="radio"
              name="gender"
              id="gender-male"
              value="Male"
              checked={newuser.gender === "Male"}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              name="gender"
              id="gender-female"
              value="Female"
              checked={newuser.gender === "Female"}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            value={newuser.address}
            rows={3}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Photo Profile</Form.Label>
          <Form.Control
            name="file"
            type="file"
            value={newuser.image}
            accept="*/image"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Label>Hobby</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="formHobbiesCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check
              name="hobby"
              type="checkbox"
              label="Main"
              value="Main"
              checked={newuser.hobby.includes("Main")}
              onChange={handleChange}
            />
          </Col>
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check
              name="hobby"
              type="checkbox"
              label="Makan"
              value="Makan"
              checked={newuser.hobby.includes("Makan")}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Label>Makanan </Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="formHFoodCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check
              name="makanan"
              type="checkbox"
              label="Nasi"
              value="Nasi"
              checked={newuser.makanan.includes("Nasi")}
              onChange={handleChange}
            />
          </Col>
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check
              name="makanan"
              type="checkbox"
              label="Jagung"
              value="Jagung"
              checked={newuser.makanan.includes("Jagung")}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formRemember">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check
              name="bool"
              type="checkbox"
              label="Agree"
              value={true}
              checked={newuser.bool}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddUser;