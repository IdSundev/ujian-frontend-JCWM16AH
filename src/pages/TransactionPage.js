import React,{useEffect} from 'react'
import './TransactionPage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTransactions } from "../store/actions/transactionAction";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

import ListTransactions from "../components/ListTransactions";
import { useHistory } from "react-router-dom";

export default function TransactionPage() {
  const dispatch = useDispatch();
  const { transactions, isLoadingTransaction } = useSelector(
    (state) => state.transactionReducer
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <div className="transaction-page">
      <ListTransactions transactions={transactions} isLoadingTransaction={isLoadingTransaction} />
    </div>
  )
}
