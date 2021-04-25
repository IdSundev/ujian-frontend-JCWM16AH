import React, { useState } from "react";
import "./FilteredMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import {
  showProductsBySearch,
  sortByDefault,
  sortByPublishedDate,
  sortHighToLowPrice,
  sortLowToHighPrice,
  filterProductBy,
} from "../store/actions/productAction";

export default function FilteredMenu() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { products, filteredProduct, isFiltered } = useSelector(
    (state) => state.productReducer
  );

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function searchProducts(e) {
    e.preventDefault();
    dispatch(showProductsBySearch(search, products));
  }

  function sortByPublishDate() {
    dispatch(sortByPublishedDate(search, products));
  }

  function sortByHighToLowPrice() {
    dispatch(sortHighToLowPrice(isFiltered, products, filteredProduct));
  }

  function sortByLowToHighPrice() {
    dispatch(sortLowToHighPrice(isFiltered, products, filteredProduct));
  }

  function filterByNone() {
    const category = "none";
    dispatch(filterProductBy(category));
  }

  function filterByMale() {
    const category = "male";
    dispatch(filterProductBy(category));
  }

  function filterByFemale() {
    const category = "female";
    dispatch(filterProductBy(category));
  }

  function filterByShirt() {
    const category = "shirt";
    dispatch(filterProductBy(category));
  }

  function filterByTshirt() {
    const category = "t-shirt";
    dispatch(filterProductBy(category));
  }

  function filterByJacket() {
    const category = "jacket";
    dispatch(filterProductBy(category));
  }

  function filterByHoodie() {
    const category = "hoodie";
    dispatch(filterProductBy(category));
  }

  function filterByPants() {
    const category = "pants";
    dispatch(filterProductBy(category));
  }

  function filterByBags() {
    const category = "bags";
    dispatch(filterProductBy(category));
  }

  function filterByAccessories() {
    const category = "accessories";
    dispatch(filterProductBy(category));
  }

  function sortDefault() {
    setSearch("");
    dispatch(sortByDefault());
    const category = "none";
    dispatch(filterProductBy(category));
  }

  return (
    <div className="filtered-menu">
      <Container>
        <Row>
          <Col>
            <div className="d-flex filter-list-products">
              <div className="mr-auto p-2">
                <h1>Products</h1>
              </div>
              <div className="p-2">
                <Form onSubmit={searchProducts}>
                  <Row>
                    <Col className="d-flex">
                      <div className="mr-auto p-1">
                        <Form.Control
                          placeholder="Search"
                          value={search}
                          onChange={handleSearch}
                        />
                      </div>
                      <div className="p-1">
                        <Button variant="outline-success" type="submit">
                          Search
                        </Button>
                      </div>
                      <div className="p-1">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Sort By
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item onClick={sortByPublishDate}>
                              Publish Date
                            </Dropdown.Item>
                            <Dropdown.Item onClick={sortByHighToLowPrice}>
                              Price High to Low
                            </Dropdown.Item>
                            <Dropdown.Item onClick={sortByLowToHighPrice}>
                              Price Low to High
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="p-1">
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Filter By
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item onClick={filterByNone}>
                              None
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByMale}>
                              Male
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByFemale}>
                              Female
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByShirt}>
                              Shirt
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByTshirt}>
                              T-Shirt
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByJacket}>
                              Jacket
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByHoodie}>
                              Hoodie
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByPants}>
                              Pants
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByBags}>
                              Bags
                            </Dropdown.Item>
                            <Dropdown.Item onClick={filterByAccessories}>
                              Accessories
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="p-1">
                        <Button variant="warning" onClick={sortDefault}>
                          Refresh
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
