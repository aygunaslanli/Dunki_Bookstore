import "../pages/contact.css";
import { Container,Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contact() {
  return (
    <main>
      <section className="contact">
        <Container className="con-contact">
          <div className="contact-page-title">
            <h1>Contact Us</h1>
          </div>
        </Container>
      </section>
      <section className="map-area">
        <Container>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172153.33373691145!2d-122.33979794999999!3d47.608715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2z0KHQuNGN0YLQuywg0JLQsNGI0LjQvdCz0YLQvtC9LCDQodCo0JA!5e0!3m2!1sru!2saz!4v1727549298636!5m2!1sru!2saz"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </Container>
      </section>
      <section style={{paddingBottom:"80px"}} className="form-area">
        <div className="form-title">
            <h2>
            Let's get in touch
            </h2>
        </div>

        <div className=" d-flex mx-3">
          <Container>
            <Row>
          <Col sm={12} md={6}>
          <div className="contact-info d-flex">
            <div className="contact-info-icon">
            <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h6>Address:</h6>
              <p>123 Suspendis eccums american</p>
            </div>
          </div>
          <div className="contact-info d-flex">
          <div className="contact-info-icon">
          <i class="fa-regular fa-envelope"></i>
            </div>
            <div>
              <h6>Email:</h6>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="contact-info d-flex">
          <div className="contact-info-icon">
          <i class="fa-solid fa-mobile-screen"></i>
            </div>
            <div>
              <h6>Call Us:</h6>
              <p>+1 23 445 789 00</p>
            </div>
            
          </div>
          <div>
          <p>
            Opening time: 
            <strong> </strong>
             Our store has re-opened for shopping, exchanges every day
            <br /> 
            11am to 7pm
            </p>
          </div>
          </Col>
          <Col sm={12} md={6}>
          <div className="ms-2">

          <Form>
     
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
          className="mb-3"
            style={{width:"636px", height:"58px"}}
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          
            <Form.Control
            className="mb-3"
           style={{width:"636px", height:"58px"}}
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          
        </Form.Group>
        <Row>
        <Col>
          <Form.Control className="mb-3" style={{width:"636px", height:"58px"}} type="text" placeholder="Subject" />
        </Col>
      </Row>
      
        
        <Form.Control className="mb-3" style={{width:"636px", height:"98px"}} as="textarea" aria-label="With textarea" />
     
      
      <Button type="submit">Submit form</Button>
    </Form>
          </div>
          </Col>
          </Row>
          </Container>
        </div>
      </section>
    </main>
  );
}
