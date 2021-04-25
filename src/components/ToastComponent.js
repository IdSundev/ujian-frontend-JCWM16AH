import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Toast } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function ToastComponent() {
  const toast = useSelector((state) => state.cartReducer.toast);
  const [show, setShow] = useState(false);
  setShow(true);
  return (
    <Container>
      <Row>
        <Col>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={6000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Success</strong>
              <small>1 mins ago</small>
            </Toast.Header>
            <Toast.Body>Anda berhasil menambahkan item ke cart</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}
