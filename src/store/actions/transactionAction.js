import axios from "axios";
import {
  SET_TRANSACTIONS,
  SET_LOADING_TRANSACTIONS,
} from "./actionType";

import { url } from "../../urlConfig";

function setLoadingTransactions(data) {
  return {
    type: SET_LOADING_TRANSACTIONS,
    payload: data,
  };
}

function setTransactions(data) {
  return {
    type: SET_TRANSACTIONS,
    payload: data,
  };
}

export function fetchTransactions() {
  return (dispatch) => {
    dispatch(setLoadingTransactions(true));
    axios
      .get(`${url}/transactions?_sort=id&_order=desc`)
      .then((transactions) => {
        dispatch(setTransactions(transactions.data));
        dispatch(setLoadingTransactions(false));
      })
      .catch((error) => {
        dispatch(setLoadingTransactions(false));
      });
  };
}

export function postTransactions(transactions){
  return (dispatch) => {
    dispatch(setLoadingTransactions(true));
    axios
      .post(`${url}/transactions`, transactions)
      .then((transactions) => {
        console.log("berhasil")
        dispatch(fetchTransactions());
        dispatch(setLoadingTransactions(false));
      })
      .catch((error) => {
        dispatch(setLoadingTransactions(false));
      });
  };
}