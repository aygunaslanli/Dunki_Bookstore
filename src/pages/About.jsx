import "../pages/about.css";
import { Container, Row, Col, Card } from "react-bootstrap";
export default function About() {
  return (
    <main>
      <section className="about">
        <Container className="con-about">
          <div className="about-page-title">
            <h1>About Us</h1>
          </div>
        </Container>
      </section>
      <section className="about-story-area d-flex">
        <div className="con-about">
          <Row>
            <Col sm={12} md={6}>
              <div className="about-img">
                <img
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1289295332794171555/library.webp?ex=67359b19&is=67344999&hm=5feedb5e71b112b5cfd12fd06e19051f979b6b18c92080fc48fae3d79a1a3c86&"
                  alt=""
                />
                <div className="circle-img">
                  <h3>
                    Good Experience
                    <br />
                    In Last
                  </h3>
                  <h4>10</h4>
                  <h5> Years</h5>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="about-story-title ps-5">
                <h2>
                  Since 1987, We have established ourselves with a strong
                  reputation.
                </h2>
                <h4>Win best Book Shop Award At 2023.</h4>
                <p>
                  Accepting the award Dunki visionary founder expressed
                  gratitude for the team's dedication and the patronage of
                  discerning clients who appreciate the finer things in life.
                  This win marks a milestone in Dunki s journey, solidifying its
                  position as a trailblazer in the realm of exquisite
                  adornments.
                </p>
                <button>Explore More</button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="about-founder d-flex pb-5">
        <div className="con-about">
          <Row className="d-flex align-items-center">
            <Col sm={12} md={6}>
              <div className="about-founder-title">
                <h2>
                  “Dunki Are Such Joy To Be Cherished Handled With Pleasure”
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <p> - JOHN SMITH / FOUNDER </p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="about-founder-img d-flex">
                <img
                style={{width:"670px"}}
                  src="https://cdn.discordapp.com/attachments/1091845697462083585/1289320402472013876/ceo.webp?ex=6735b272&is=673460f2&hm=9d23d0fdd10ab0b2a5546e1662ff5a6c5449e4e0974af730f9809aa886949692&"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="client-area">
        <div className="client-area-title">
          <h2>What Our Clients Say</h2>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <div className="card-client d-flex p-0">
                <Card>
                  <Card.Img
                    className="client-img mx-auto my-3"
                    variant="top"
                    src="https://dunki-demo.myshopify.com/cdn/shop/files/4_100x.jpg?v=1697970408"
                  />
                  <Card.Body>
                    <Card.Text className="client-text">
                      "Excellent service. The books were wrapped securely and
                      arrived in nice condition."
                    </Card.Text>
                    <Card.Title className="client-title d-flex">
                      <p>
                        John <span> - Canada </span>
                      </p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="card-client d-flex p-0">
                <Card>
                  <Card.Img
                    className="client-img mx-auto my-3"
                    variant="top"
                    src="https://cdn.discordapp.com/attachments/1091845697462083585/1289350583031173161/1_100x.webp?ex=6735ce8d&is=67347d0d&hm=ef6cbdb368d8de314bdf8121fe9a30a6b23107aa90554e7b1e96349c38a831b3&"
                  />
                  <Card.Body>
                    <Card.Text className="client-text">
                      "Excellent service. The books were wrapped securely and
                      arrived in nice condition."
                    </Card.Text>
                    <Card.Title className="client-title d-flex">
                      <p>
                        Janifa <span> - California </span>{" "}
                      </p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="card-client d-flex p-0 ">
                <Card>
                  <Card.Img
                    className="client-img mx-auto my-3"
                    variant="top"
                    src="https://cdn.discordapp.com/attachments/1091845697462083585/1289350733308756039/2_100x.webp?ex=6735ceb1&is=67347d31&hm=5bfa50f7c294905d72bea7dec7cbbe69eab2b3bf63571f3d4a26d967eb76f5c1&"
                  />
                  <Card.Body>
                    <Card.Text className="client-text">
                      "Excellent service. The books were wrapped securely and
                      arrived in nice condition."
                    </Card.Text>
                    <Card.Title className="client-title d-flex">
                      <p>
                        Perkins <span> - New york </span>{" "}
                      </p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="offer-area">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div>
                <h2>Join the community</h2>
                <p>
                  Enter your email address to receive regular updates, as well
                  as news on upcoming events and specific offers.
                </p>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email@example.com"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button className="offer-input-btn">
                  Subscribe
                </button>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div></div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="shipping-area d-flex">
        <Container>
          <Row>
            <Col sm={12} md={4}>
            <div className="d-flex justify-content-center">
            <div className="me-3">
              <img src="https://dunki-demo.myshopify.com/cdn/shop/files/box_a472e5ae-398d-48f4-af98-9fce43d74bf3_small.png?v=1698145969" alt="" />
            </div>
            <div>
              <h4>Free Shipping</h4>
              <p>Order over $300 More</p>
            </div>
            </div>
            </Col>
            <Col sm={12} md={4}>
            <div className="d-flex justify-content-center">
            <div className="me-3">
              <img src="https://dunki-demo.myshopify.com/cdn/shop/files/credit-card_87d42ab3-a9f5-49c6-b9dc-fca6682d8b28_small.png?v=1698145876" alt="" />
            </div>
            <div >
              <h4>Free Shipping</h4>
              <p>Order over $300 More</p>
            </div>
            </div>
            </Col>
            <Col sm={12} md={4}>
            <div className="d-flex justify-content-center">
            <div className="me-3">
              <img src="https://dunki-demo.myshopify.com/cdn/shop/files/purchase_80d38278-02b1-4f17-b56f-697aa8a86d4f_small.png?v=1698145996 " alt="" />
            </div>
            <div>
              <h4>Free Shipping</h4>
              <p>Order over $300 More</p>
            </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
