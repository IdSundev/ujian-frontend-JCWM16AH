import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import "./ListProducts.css";
import ProductCart from "./ProductCard";

export default function ListProducts(props) {
  let products
  if (props.filterBy === "male" || props.filterBy === "female") {
    products = props.products.filter((product) => {
      return product.gender === props.filterBy;
    });
  } else {
    products = props.products.filter((product) => {
      return product.category === props.filterBy;
    });
  }
  if (props.filterBy === "none") {
    products = props.products;
  }
  
  if (props.isLoadingProduct) {
    return (
      <div className="list-products">
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
      <div className="list-products">
        <Container>
          <Row>
            {products.map((product, index) => {
              return (
                <Col md={3} key={index}>
                  <ProductCart product={product} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
