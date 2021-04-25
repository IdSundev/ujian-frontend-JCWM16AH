import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItem, cancelEditCart } from "../store/actions/cartAction";
import { fetchProducts } from "../store/actions/productAction";

export default function EditCart(props) {
  const dispatch = useDispatch();
  const { carts, idCart } = useSelector((state) => state.cartReducer);
  const products = useSelector((state) => state.productReducer.products);
  const [stockProduct, setStockProduct] = useState(props.cart.quantity);

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (products.length === 0) {
    dispatch(fetchProducts());
  }
  // console.log(products)
  const idProduct = props.cart.id;
  let product = products.filter((el) => {
    return el.id === idProduct;
  });

  const stock = product.map((el) => el.stock)[0];

  function increaseQuantity() {
    setStockProduct(stockProduct + 1);
    if (stockProduct >= stock) {
      setStockProduct(props.cart.quantity);
      handleShow();
      return;
    }
  }

  function decreaseQuantity() {
    setStockProduct(stockProduct - 1);
    if (stockProduct <= 0) {
      setStockProduct(props.cart.quantity);
      handleShow();
      return;
    }
  }

  function cancelEdit() {
    const idxProduct = props.index;
    dispatch(cancelEditCart(carts, idxProduct));
  }

  function updateCart() {
    // console.log(product2[0])
    const prod = {
      id: product[0].id,
      product: product[0].product,
      price: product[0].price,
      images: product[0].images,
      quantity: product[0].quantity,
    };

    // console.log(product2[0].id)
    dispatch(updateCartItem(carts, prod, stockProduct, idCart));
  }

  return (
    <React.Fragment>
      <tr>
        <td>{props.index + 1}</td>
        <td>
          <img
            src={props.cart.images[0]}
            alt=""
            className="img-responsive img-fluid"
          />
        </td>
        <td>{props.cart.product.toUpperCase()}</td>
        <td>
          <Button variant="primary" size="sm" onClick={decreaseQuantity}>
            &#8592;
          </Button>{" "}
          {stockProduct}{" "}
          <Button variant="primary" size="sm" onClick={increaseQuantity}>
            &#8594;
          </Button>
        </td>
        <td>{props.cart.price * props.cart.quantity}</td>
        <td>
          <Button variant="success" onClick={updateCart}>
            Save
          </Button>{" "}
          <Button variant="danger" onClick={cancelEdit}>
            Cancel
          </Button>
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Maaf anda tidak dapat menambah produk lebih dari stock(${stock}) dan kurang dari 0`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
