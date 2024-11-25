import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import '../components/footer.css';

export default function Footer() {
  return (
    <footer>
      <Container >
        <div className="pb-5">
        <Row>
          <Col sm={12} md={6}>
            <div className="footer-about">
              <h3>About Info</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor inci ut labore et dolore.
              </p>
              <p>
                <span>Addresss: 123 Pall Mall, London England</span>
              </p>
              <p>
                <span>Email: hello@example.com</span>
              </p>
              <p>
                <span>Phone: (012) 345 6789</span>
              </p>
            </div>
          </Col>
          <Col sm={12} md={6}>
          <div  className="footer-information d-flex ">
          <Col sm={12} md={4}>
          <div className="px-3">
            <h3>Information</h3>
            <ul>
                <li><a href="">Contact us</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Term & Conditions</a></li>
                <li><a href="">Gift Vouchers</a></li>
                <li><a href="">BestSellers</a></li>
            </ul>
          </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="px-3">
          <h3>Quick Links</h3>
            <ul>
                <li><a href="">My Account</a></li>
                <li><a href="">Shopping cart</a></li>
                <li><a href="">Wishlist</a></li>
                <li><a href="">Custom Link</a></li>
                <li><a href="">Help</a></li>
            </ul>
          </div>
          </Col>
          <Col sm={12} md={4}>
          <div className="px-3">
          <h3>Follow Us On</h3>
            <ul>
                <li><a href="">Facebook</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Youtube</a></li>
            </ul>
          </div>
          </Col>
          </div>
          </Col>
        </Row>
        </div>
      </Container>
    </footer>
  );
}
