import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, fetchCart, editCart } from "../store/actions/cartAction";

export default function ItemCart(props) {
  const dispatch = useDispatch();
  const { carts, idCart } = useSelector((state) => state.cartReducer);
  function deleteCartItem() {
    let idProduct = props.cart.id;
    dispatch(deleteCart(carts, idProduct, idCart));
    dispatch(fetchCart());
  }

  function editCartItem() {
    const idxProduct = props.index;
    dispatch(editCart(carts, idxProduct));
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
        <td>{props.cart.quantity}</td>
        <td>{props.cart.price * props.cart.quantity}</td>
        <td>
          <Button variant="success" onClick={editCartItem}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={deleteCartItem}>
            Delete
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
}
