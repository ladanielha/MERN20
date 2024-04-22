import React from 'react'
import { useNavigate } from "react-router-dom";
import useHTTP from "../../libs/hooks/useHTTP";
import useJWT from "../../libs/hooks/useJWT";
import useMessage from "../../libs/hooks/useMessage";
import { useEffect, useState } from "react";
import { PaginationData } from "../../data/PaginationData";
import { BASE_URL } from "../../libs/config/settings";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import WidgetCommonSearch from "../../widgets/commons/WidgetCommonSearch";
import WidgetCommonLimit from "../../widgets/commons/WidgetCommonLimit";
import WidgetCommonLoadingTable from "../../widgets/commons/WidgetCommonLoadingTable";
import useFormatter from "../../libs/hooks/useFormatter";
import { BsInfoCircle } from "react-icons/bs";

const PageOrderDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const http = useHTTP();
  const jwt = useJWT();
  const message = useMessage();
  const formatter = useFormatter();

  const [order, setOrder] = useState(OrderInit);

  const onOrderDetail = () => {
    const url = `${BASE_URL}/order/${state._id}`;
    const config = {
      headers: {
        Authorization: jwt.get()
      }
    };

    http.privateHTTP.get(url, config)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        message.error(error);
        navigate(-1)
      })
  }

  useEffect(() => {
    onOrderDetail();
  }, []);

  return (
    <div style={{fontSize: "12px"}}>
      <small className="fw-bold">{order.nomor}</small>
      <br />
      <small className="fw-bold">{formatter.formatDate(order.tanggal)}</small>
      <hr />
      <div className="fw-bold">
        {order?.items?.map((item) => (
          <>{item.nama} {formatter.formatCurrency(item.hargaJual)}<br /> @{item.qty} {formatter.formatCurrency(item.subtotal)} <br/><br/></>
        ))}
      </div>
      <div className="fw-bold">
        Total: {formatter.formatCurrency(order.total)}
      </div>
      <Row>
        <Col className="d-flex gap-3">
          <Button className="d-print-none" onClick={window.print}>Cetak</Button>
          <Button className="d-print-none" onClick={() => navigate(-1)}>Kembali</Button>
        </Col>
      </Row>
    </div>
  )
}

export default PageOrderDetail