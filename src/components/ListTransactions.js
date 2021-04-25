import React from "react";
import "./ListTransactions.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";

import ItemTransaction from "./ItemTransaction";

export default function ListTransactions(props) {
  if (props.isLoadingTransactions) {
    return (
      <div className="list-cart">
        <Container>
          <Row>
            <Col className="text-center">
              <Spinner animation="grow" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="list-transactions">
        <Container>
          <Row>
            <Col>
              <Table className="table-list-cart">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {props.transactions.map((transaction, index) => {
                    return (
                      <ItemTransaction transaction={transaction.products} index={index} key={index} />
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
