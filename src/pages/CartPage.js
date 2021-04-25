import React, { useEffect, useState } from "react";
import "./CartPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../store/actions/cartAction";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

import ListCart from "../components/ListCarts";
import { postTransactions } from "../store/actions/transactionAction";
import { deleteAllCart } from "../store/actions/cartAction";
import { useHistory } from "react-router-dom";
import moment from "moment";

export default function CartPage() {
  const dispatch = useDispatch();
  const { carts, isLoadingCart, idCart } = useSelector(
    (state) => state.cartReducer
  );
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  function checkOut() {
    const user = "U1619243392265";
    const idTransaction = "T" + Date.now();
    let totalBayar = 0;
    carts.forEach((el) => {
      totalBayar += el.quantity * el.price;
    });
    let data = {
      id: idTransaction,
      user: user,
      status: "belum di bayar",
      total: totalBayar,
      products: carts,
      created_at: moment().format("M/D/YYYY")
    };
    dispatch(postTransactions(data));
    dispatch(deleteAllCart(idCart, user));
    history.push("/transactions");
    handleClose();
  }

  return (
    <div className="cart-page">
      <ListCart carts={carts} isLoadingCart={isLoadingCart} />
      <Container>
        <Row>
          <Col>
            <Button onClick={handleShow}>Checkout</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Alert</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure to process this section?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={checkOut}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
