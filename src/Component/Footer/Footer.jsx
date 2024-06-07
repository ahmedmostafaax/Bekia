// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p><i className="fas fa-map-marker-alt"></i> 123 Street, City, Country</p>
            <p><i className="fas fa-phone"></i> +123 456 7890</p>
            <p><i className="fas fa-envelope"></i> email@example.com</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-linkedin"></i></a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
