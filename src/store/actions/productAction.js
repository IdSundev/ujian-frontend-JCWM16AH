import axios from "axios";
import {
  SET_LOADING_PRODUCTS,
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_IS_FILTERED,
  SET_FILTERED_PRODUCTS,
  SET_FILTER_BY,
} from "./actionType";
import { url } from "../../urlConfig";

function setLoadingProducts(data) {
  return {
    type: SET_LOADING_PRODUCTS,
    payload: data,
  };
}

function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
}

function setProduct(data) {
  return {
    type: SET_PRODUCT,
    payload: data,
  };
}

function setIsFiltered(data) {
  return {
    type: SET_IS_FILTERED,
    payload: data,
  };
}

function setFilterBy(data) {
  return {
    type: SET_FILTER_BY,
    payload: data,
  };
}

function setFilteredProducts(data) {
  return {
    type: SET_FILTERED_PRODUCTS,
    payload: data,
  };
}

export function filterProductBy(category) {
  return (dispatch) => {
    dispatch(setFilterBy(category));
  };
}

export function sortLowToHighPrice(isFiltered, products, filteredProduct) {
  return (dispatch) => {
    dispatch(setLoadingProducts(true));
    if (isFiltered) {
      let sortedProduct = filteredProduct.sort((a, b) => a.price - b.price);
      dispatch(setFilteredProducts(sortedProduct));
    } else {
      let sortedProduct = products.sort((a, b) => a.price - b.price);
      dispatch(setFilteredProducts(sortedProduct));
    }
    dispatch(setIsFiltered(true));
    dispatch(setLoadingProducts(false));
  };
}

export function sortHighToLowPrice(isFiltered, products, filteredProduct) {
  return (dispatch) => {
    dispatch(setLoadingProducts(true));
    if (isFiltered) {
      let sortedProduct = filteredProduct.sort((a, b) => b.price - a.price);
      dispatch(setFilteredProducts(sortedProduct));
    } else {
      let sortedProduct = products.sort((a, b) => b.price - a.price);
      dispatch(setFilteredProducts(sortedProduct));
    }
    dispatch(setIsFiltered(true));
    dispatch(setLoadingProducts(false));
  };
}

export function sortByPublishedDate(search, products) {
  return (dispatch) => {
    if (search !== "") {
      dispatch(setIsFiltered(true));
      let filteredProducts = products.filter((product) => {
        return product.product.toLowerCase().includes(search.toLowerCase());
      });
      dispatch(setFilteredProducts(filteredProducts));
    } else {
      dispatch(setIsFiltered(false));
      dispatch(fetchProducts());
    }
  };
}

export function sortByDefault() {
  return (dispatch) => {
    dispatch(setLoadingProducts(true));
    dispatch(setIsFiltered(false));
    dispatch(fetchProducts());
    dispatch(setLoadingProducts(false));
  };
}

export function showProductsBySearch(inputData, products) {
  return (dispatch) => {
    dispatch(setLoadingProducts(true));
    if (inputData === "") {
      dispatch(setFilteredProducts(products));
    } else {
      dispatch(setIsFiltered(true));
      let filteredProducts = products.filter((product) => {
        return product.product.toLowerCase().includes(inputData.toLowerCase());
      });
      dispatch(setFilteredProducts(filteredProducts));
    }
    dispatch(setLoadingProducts(false));
  };
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(setLoadingProducts(true));
    axios
      .get(`${url}/products`)
      .then((products) => {
        dispatch(setProducts(products.data));
        dispatch(setLoadingProducts(false));
      })
      .catch((error) => {
        dispatch(setLoadingProducts(false));
      });
  };
}

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch(setLoadingProducts(true));
    axios
      .get(`${url}/products/${id}`)
      .then((product) => {
        dispatch(setProduct(product.data));
        dispatch(setLoadingProducts(false));
      })
      .catch((error) => {
        dispatch(setLoadingProducts(false));
      });
  };
}
