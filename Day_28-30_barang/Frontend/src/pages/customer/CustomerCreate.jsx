import { useState } from "react";
import useChangeListener from "../../libs/hooks/useChangeListener";
import useHTTP from "../../libs/hooks/useHTTP";
import useJWT from "../../libs/hooks/useJWT";
import { CustomerInit } from "../../data/CustomerData";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { BASE_URL } from "../../libs/config/settings";
import { useNavigate } from "react-router-dom";
import useMessage from "../../libs/hooks/useMessage";

const PageCustomerCreate = () => {
  const navigate = useNavigate();
  const http = useHTTP();
  const jwt = useJWT();
  const onChangeListener = useChangeListener();
  const message = useMessage();

  const [customer, setCustomer] = useState(CustomerInit);

  const onCreateCustomer = () => {
    const url = `${BASE_URL}/customer/`;
    const config = {
      headers: {
        Authorization: jwt.get(),
      },
    };

    http.privateHTTP
      .post(url, customer, config)
      .then((response) => {
        message.success(response);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
        message.error(error);
      });
  };

  return (
    <Container className="mt-4 mb-4">
      <Row className="mb-3">
        <Col>
          <h2>Buat Customer</h2>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <FormGroup>
            <FormLabel>Nomor</FormLabel>
            <FormControl
              name="nomor"
              value={customer.nomor}
              onChange={(e) =>
                onChangeListener.onChangeText(e, customer, setCustomer)
              }
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <FormGroup>
            <FormLabel>Nama</FormLabel>
            <FormControl
              name="nama"
              value={customer.nama}
              onChange={(e) =>
                onChangeListener.onChangeText(e, customer, setCustomer)
              }
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <FormLabel>Alamat</FormLabel>
            <FormControl
              name="alamat"
              value={customer.alamat}
              onChange={(e) =>
                onChangeListener.onChangeText(e, customer, setCustomer)
              }
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <FormGroup>
            <FormLabel>No Telp</FormLabel>
            <FormControl
              name="telepon"
              value={customer.telepon}
              type="number"
              onChange={(e) =>
                onChangeListener.onChangeNumber(e, customer, setCustomer)
              }
            />
          </FormGroup>
        </Col>
        <Col></Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={onCreateCustomer}>Simpan</Button>
          <Button variant="outline-dark" onClick={() => navigate(-1)}>
              Batal
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageCustomerCreate;
