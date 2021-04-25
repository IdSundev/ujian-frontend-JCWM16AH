import React, { useEffect } from "react";
import "./DetailProductPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchProduct } from "../store/actions/productAction";
import AddToCartButton from "../components/AddToCartButton";

export default function DetailProdcutPage() {
  let { productId } = useParams();
  const dispatch = useDispatch();

  const { product, isLoadingProduct } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  let detailProduct = JSON.stringify(product)

  if (isLoadingProduct) {
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
      <Container>
        <Row>
          <Col>
            <div className="detail-product-page text-center">
              {/* <img src={product.images[0]} className="img-fluid" alt="" /> */}
              {detailProduct.images}
              <p className="text-center">
                <b>{detailProduct.product}</b>
                <br />
                {detailProduct}
                <br />
                <AddToCartButton product={product} />
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
