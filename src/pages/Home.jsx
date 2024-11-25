import React from "react";
import CarouselHome from "../components/CarouselHome";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SingleCard1 from "../components/SingleCard1";
import products from "../data/favouriteBooks.js";
import "../pages/home.css";

export default function Home() {
  const product = products.map((item) => (
    <SingleCard1
      name={item.name}
      title={item.title}
      photo={item.photo}
      price={item.price}
      key={item.id}
    />
  ));

  return (
    <>
      
<main>
      <section className="first-section">
        <CarouselHome />
      </section>

      <section className="second-section">
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <div className="single-feature d-flex">
                <div className="feature-icon m-4">
                  <i
                    className="fa-solid fa-credit-card"
                    style={{ color: "#000" }}
                  ></i>
                </div>
                <div className="single-feature-text">
                  <h4 className="mt-3">Easy Payment</h4>
                  <p>Have 100% Secure Payments</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="single-feature d-flex">
                <div className="feature-icon m-4">
                  <i
                    className="fa-sharp fa-solid fa-truck"
                    style={{ color: "#000" }}
                  ></i>
                </div>
                <div className="single-feature-text">
                  <h4 className="mt-3">Free Delivery</h4>
                  <p>Order over $300 More</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="single-feature d-flex">
                <div className="feature-icon m-4">
                  <i
                    className="fa-solid fa-book-open-reader"
                    style={{ color: "#000" }}
                  ></i>
                </div>
                <div className="single-feature-text">
                  <h4 className="mt-3">Availability</h4>
                  <p>6 Million Books Available</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="third-section">
        <div className="favourite-book d-flex mx-5">
          <div className="third-section-title">
            <h1>Customer's Favourite</h1>
          </div>
          <div>
            <button className="btn-third-section">View All Books</button>
          </div>
        </div>
        <div className="third-section-product d-flex mx-5">{product}</div>
      </section>
      <section className="fourth-section d-flex mx-5 ">
        <div className="fourth-section-sale me-1">
          <img
            src="https://cdn.discordapp.com/attachments/1091845697462083585/1288475069206761557/chbnr.webp?ex=6735eaeb&is=6734996b&hm=430b42d95a82a1595cc2b62d13e5a470b8ce43b07b6a9fcfa576d8a24e778254&"
            style={{ width: "940.33px", height: "336.56" }}
            alt=""
          />
        </div>
        <div className="ms-4">
          <img
            src="https://cdn.discordapp.com/attachments/1091845697462083585/1288475210084913204/chb2_8cdf0738-7bb1-442e-b0d0-b40e1d298793.webp?ex=6735eb0c&is=6734998c&hm=7ed1bc8a22b68440d253c96d7fb8c95241cf02bb54f51a9b7c8842811fa4d77f&"
            style={{ width: "446.66px", height: "336.48" }}
            alt=""
          />
        </div>
      </section>
      <section className="third-section">
        <div className="favourite-book d-flex mx-5">
          <div className="third-section-title">
            <h1>Bestselling Books</h1>
          </div>
          <div>
            <button className="btn-third-section">View All Books</button>
          </div>
        </div>
        <div className="third-section-product d-flex mx-5">{product}</div>
      </section>
      <section className="sixth-section">
        <Container className="con-section">
          <Row>
            <Col sm={12} md={6}>
              <div className="online-book">
                <h4 > Online Book Copy </h4>
                <h2>
                  We have The largest
                  <br />
                  Book library on the planet
                </h2>
                <span className="d-flex">
                  <ul type="circle" className="first-ul">
                    <li>Scientific Department</li>
                    <li>Technical Literature</li>
                    <li>Global Scholar Library</li>
                  </ul>
                  <ul type="circle" className="second-ul">
                    <li>Audio Books </li>
                    <li>Rare Manuscripts</li>
                    <li>Classic Literature</li>
                  </ul>
                </span>
                <button className="btn-sixth-section mt-3">Shop Now</button>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="img-sixth-section d-flex">
                <img
                 style={{ width: "566px" }}
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1289175785881469050/sthm.webp?ex=6735d483&is=67348303&hm=860a152931ee6302606490003ef8b31996a6f13b1d91e5107652b93a271ce057&"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="seventh-section">
      <div className="d-flex mx-5">
          <div className="seventh-section-title">
            <h2>Read Our Journal</h2>
          </div>
          <div className="btn-seventh">
            <button className="btn-seventh-section">View More Blog</button>
          </div>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1289182257268920320/b5_600x400_crop_center.webp?ex=66f7e409&is=66f69289&hm=3c40f940f880b1d98db4d3deb0df2678b3da61b4d06959530ce7d213fd6ff95a&"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1289182451159007242/b7_600x400_crop_center.webp?ex=66f7e438&is=66f692b8&hm=a596088d45f2685c9ae9991bc224cba4defc21641ff12d90a5ada0aab8f5b07d&"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1289182570436886610/b6_600x400_crop_center.webp?ex=66f7e454&is=66f692d4&hm=fadf7c6fc1c5b7d7d7dc9ad37662546d63b251d60920c45ca60170138203638d&"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      </main>
    </>
  );
}
