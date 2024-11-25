import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";

export default function Header() {
  return (
    <header>
      <Navbar className="navbar-area" expand="lg">
        <Navbar.Brand className="navbar-logo" href="#home">
          <img
            src="https://dunki-demo.myshopify.com/cdn/shop/files/logo1_130x.png?v=1697996490"
            alt=" "
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav-area" navbarScroll>
            <Nav.Link as={NavLink} to="/" className="nav-link mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shop" className="nav-link mx-3">
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="nav-link mx-3">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pages" className="nav-link mx-3">
              Pages
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link mx-3">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link mx-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="icon-button">
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
          <button><i class="fa-solid fa-cart-shopping"></i></button>
          <button><i class="fa-regular fa-user"></i></button>
        </div>
      </Navbar>
    </header>
  );
}
