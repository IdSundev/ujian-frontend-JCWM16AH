import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Toast } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, fetchCart } from "../store/actions/cartAction";

export default function AddToCartButton(props) {
  const dispatch = useDispatch();
  const { carts, idCart } = useSelector((state) => state.cartReducer);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleQuantity(e) {
    setQuantity(parseInt(e.target.value));
  }

  function addCart() {
    let qty = quantity;
    if (!qty) {
      // guard close
      return;
    }
    if (qty <= 0 || qty > props.product.stock) {
      alert(
        "Jumlah stock tidak boleh kurang dari sama dengan 0 dan tidak boleh lebih dari " +
          props.product.stock
      );
      return;
    }
    dispatch(addCartItem(carts, props.product, quantity, idCart));
    dispatch(fetchCart());
    handleClose();
    setShowToast(true);
  }

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Add to Cart
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantity}
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addCart}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={6000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Produk sudah ditambah ke cart</Toast.Body>
      </Toast>
    </React.Fragment>
  );
}
