import axios from "axios";
import {
  SET_LOADING_CART,
  SET_CART,
  SET_ID_CART,
  SET_TOAST,
  SET_COUNT_CART,
} from "./actionType";

import { url } from "../../urlConfig";

function setLoadingCart(data) {
  return {
    type: SET_LOADING_CART,
    payload: data,
  };
}

function setCart(data) {
  return {
    type: SET_CART,
    payload: data,
  };
}

function setCountCart(data){
  return {
    type: SET_COUNT_CART,
    payload: data,
  }
}

function setIdCart(data) {
  return {
    type: SET_ID_CART,
    payload: data,
  };
}

function setToast(data) {
  return {
    type: SET_TOAST,
    payload: data,
  };
}

export function editCart(carts, index) {
  let data = [...carts];
  data[index].edit = true;
  return (dispatch) => {
    dispatch(setCart(data));
  };
}

export function cancelEditCart(carts, index) {
  let data = [...carts];
  data[index].edit = false;
  return (dispatch) => {
    dispatch(setCart(data));
  };
}

export function deleteCart(carts, idProduct, idCart) {
  const idUser = "U1619243392265";
  let newCart = carts.filter((product) => {
    return product.id !== idProduct;
  });

  let data = {
    id: idCart,
    user: idUser,
    products: newCart,
  };

  return (dispatch) => {
    axios
      .put(`${url}/carts/` + idCart, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteAllCart(idCart, idUser) {
  let data = {
    id: idCart,
    user: idUser,
    products: [],
  };
  return (dispatch) => {
    // console.log(product.id)
    dispatch(setLoadingCart(true));
    axios
      .put(`${url}/carts/` + idCart, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(setLoadingCart(false));
  };
}

export function updateCartItem(cart, product, stock, idCart) {
  let isThere = false;
  const idUser = "U1619243392265";
  let data = {
    id: idCart,
    user: idUser,
    products: cart,
  };

  data.products.forEach((el, index) => {
    if (el.id === product.id) {
      isThere = true;
      data.products[index] = {
        id: el.id,
        product: el.product,
        price: el.price,
        images: el.images,
        quantity: stock,
      };
    }
  });

  if (!isThere) {
    data.products.push({
      id: product.id,
      product: product.product,
      price: product.price,
      images: product.images,
      quantity: stock,
    });
  }
  return (dispatch) => {
    // console.log(product.id)
    dispatch(setLoadingCart(true));
    axios
      .put(`${url}/carts/` + idCart, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(setLoadingCart(false));
  };
}

export function addCartItem(cart, product, stock, idCart) {
  let isThere = false;
  const idUser = "U1619243392265";
  let data = {
    id: idCart,
    user: idUser,
    products: cart,
  };

  data.products.forEach((el, index) => {
    if (el.id === product.id) {
      isThere = true;
      data.products[index] = {
        id: el.id,
        product: el.product,
        price: el.price,
        images: el.images,
        quantity: el.quantity + parseInt(stock),
      };
    }
  });

  if (!isThere) {
    data.products.push({
      id: product.id,
      product: product.product,
      price: product.price,
      images: product.images,
      quantity: stock,
    });
  }
  return (dispatch) => {
    // console.log(product.id)
    dispatch(setLoadingCart(true));
    axios
      .put(`${url}/carts/` + idCart, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(setLoadingCart(false));
  };
}

export function fetchCart() {
  const idUser = "U1619243392265";
  return (dispatch) => {
    dispatch(setLoadingCart(true));
    axios
      .get(`${url}/carts?user=${idUser}`)
      .then((data) => {
        let carts = data.data[0].products.map((el) => {
          return {
            id: el.id,
            product: el.product,
            price: el.price,
            images: el.images,
            quantity: el.quantity,
            edit: false,
          };
        });
        dispatch(setCart(carts));
        dispatch(setIdCart(data.data[0].id));
        dispatch(setLoadingCart(false));
      })
      .catch((error) => {
        dispatch(setLoadingCart(false));
      });
  };
}
