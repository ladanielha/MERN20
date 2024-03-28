import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Toast } from "react-bootstrap"; // Import Toast from react-bootstrap
import { Link } from "react-router-dom";
import Layout from "../Layout";

const GetListUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Gagal ambil data user:", error.response.data);
        setError("Gagal ambil data users");
      }
    };
    fetchUsers();
  }, []);

  const handleModalDelete = (userId) => {
    setDeleteUserId(userId);
    setDeleteModalVisible(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `https://reqres.in/api/users/${deleteUserId}`
      );
      setUsers(users.filter((user) => user.id !== deleteUserId));
      setDeleteModalVisible(false);
      setShowToast(true); // Show toast on successful deletion
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>GetListUser</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to="add">
        <Button variant="primary">Add User</Button>
      </Link>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <Link to={`edit/${user.id}`}>Edit</Link>
                <Button
                  variant="danger"
                  onClick={() => handleModalDelete(user.id)}
                >
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Delete Confirmation Modal */}
      <Modal
        show={deleteModalVisible}
        onHide={() => setDeleteModalVisible(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setDeleteModalVisible(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          minWidth: 200,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>User deleted successfully.</Toast.Body>
      </Toast>
    </div>
  );
};

export default GetListUser;
