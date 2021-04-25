import React, { useEffect } from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Badge,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HeartFill,
  Cart4,
  ClockHistory,
} from "react-bootstrap-icons";

import { fetchCart } from "../store/actions/cartAction";
import { fetchWishlist } from "../store/actions/wishlistAction";
import { useSelector, useDispatch } from "react-redux";

export default function Navigation() {
  const { carts, isLoadingCart } = useSelector((state) => state.cartReducer);
  const wishlists = useSelector((state) => state.wishlistReducer.wishlists);
  const ctCarts = carts.length;
  const ctWishlists = wishlists.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchWishlist());
  }, []);

  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="ligth"
        variant="light"
        fixed="top"
        className="navbar-style-custom"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://proshoporiginal.com/img/footer_logo_2.png"
              className="navbar-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto link-router">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
            </Nav>
            <Nav>
              <Link to="/wishlist" className="nav-link">
                <HeartFill size={20} />
                <Badge variant="danger">{ctWishlists}</Badge>
              </Link>
              <Link to="/carts" className="nav-link">
                <Cart4 size={20} />
                <Badge variant="danger">{!isLoadingCart ? ctCarts : '0'}</Badge>
              </Link>
              <NavDropdown
                title="cef.syarif@gmail.com"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/wishlist" className="nav-dropdown-custom">
                    <HeartFill size={20} /> Wishlist
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/carts" className="nav-dropdown-custom">
                    <Cart4 size={20} /> Cart
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/transactions" className="nav-dropdown-custom">
                    <ClockHistory size={20} /> Transaction
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Button variant="secondary">Secondary</Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
