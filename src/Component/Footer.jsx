import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const url = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    scrollToTop();
  }, [url]);
  return (
    <>
      <section className="footer ">
        <Container>
          <Row>
            <Col md="4">
              <div className="">
                <img src={logo} alt="" className="img-fluid logo" />
                <p className="text-white fw-bold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime, hic! Fugiat nihil qui in officia quisquam distinctio
                  provident modi quam.
                </p>
                <ul className="social_icons m-0 p-0">
                  <li>
                    <a href="" className="text-decoration-none">
                      <i class="fa-brands fa-facebook text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none">
                      <i class="fa-brands fa-instagram text-white"></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none">
                      <i class="fa-brands fa-twitter text-white"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="4 offset-md-1">
              <div className="">
                <h3 className="heading">Details</h3>
                <ul className="m-0 p-0 text-white footer-spacing">
                  <li>
                    <Link className="text-decoration-none text-white" to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-decoration-none text-white"
                      to={"/terms"}
                    >
                      Terms And Condition
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-decoration-none text-white"
                      to={"/privacy"}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="3">
              <div className="">
                <h3 className="heading">Contacts</h3>
                <ul className="m-0 p-0 text-white footer-spacing">
                  <li>
                    <a href="" class="text-decoration-none text-white">
                      <i class="fa-solid fa-phone"></i>
                      <span className="ms-2">7001086855 / 9734915314 </span>
                    </a>
                  </li>

                  <li>
                    <a href="" class="text-decoration-none text-white">
                      <i class="fa-solid fa-location-dot"></i>{" "}
                      <span className="ms-3">A-1, Envanto HQ, Australia</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto: jfjfjf@gmail.com"
                      class="text-decoration-none text-white"
                    >
                      <i class="fa-solid fa-envelope"></i>
                      <span className="ms-3">jfjfjf@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
