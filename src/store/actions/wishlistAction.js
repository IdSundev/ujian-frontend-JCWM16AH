import React from "react";
import axios from "axios";
import { SET_LOADING_WISHLIST, SET_WISHLIST } from "./actionType";

import { url } from "../../urlConfig";

function setLoadingWishlist(data) {
  return {
    type: SET_LOADING_WISHLIST,
    payload: data,
  };
}

function setWishlist(data) {
  return {
    type: SET_WISHLIST,
    payload: data,
  };
}

export function fetchWishlist() {
  const idUser = "U1619243392265";
  return (dispatch) => {
    dispatch(setLoadingWishlist(true));
    axios
      .get(`${url}/wishlists?user=${idUser}`)
      .then((data) => {
        let wishlists = data.data[0].products.map((el) => {
          return {
            id: el.id,
            product: el.product,
            price: el.price,
            images: el.images,
            edit: false,
          };
        });
        dispatch(setWishlist(wishlists));
        dispatch(setLoadingWishlist(false));
      })
      .catch((error) => {
        dispatch(setLoadingWishlist(false));
      });
  };
}
