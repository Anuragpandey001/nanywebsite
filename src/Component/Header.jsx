import React, { useState } from "react";
import { Button, Col, Container, NavLink, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import MyModal from "./MyModal";
import { Link } from "react-router-dom";

function Header(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("open");
  };

  const closeModal = () => {
    setShowModal(false);
    console.log("close");
  };
  return (
    <>
      <section className="topHeader">
        <Container>
          <Row>
            <Col md="6">
              <ul className="m-1 p-0 d-flex flex-wrap align-items-center gap-4 ">
                <li className="mail_list">
                  <a
                    href="mailto:domey@gmail.com"
                    className="d-flex gap-1 text-decoration-none align-items-center text-white"
                  >
                    <span className="mail">
                      <i class="fa-solid fa-envelope "></i>
                    </span>{" "}
                    domey@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:domey@gmail.com"
                    className="d-flex gap-1 text-decoration-none align-items-center text-white"
                  >
                    <span className="mail">
                      <i class="fa-solid fa-phone "></i>
                    </span>{" "}
                    9734915314
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:domey@gmail.com"
                    className="d-flex gap-1 text-decoration-none align-items-center text-white"
                  >
                    <span className="mail">
                      <i class="fa-solid fa-phone "></i>
                    </span>{" "}
                    7001086855
                  </a>
                </li>
              </ul>
            </Col>
            <Col md="6">
              <ul className="m-1 p-0 d-flex align-items-center gap-4 justify-content-end">
                <li>
                  <Button className="btn   shadow-none">
                    <Link
                      to={"http://cxp.frantic.in/login"}
                      className="text-decoration-none text-white"
                    >
                      Login
                    </Link>
                  </Button>
                </li>
                {/* <li>
                  <Button className="btn shadow-none">Register</Button>
                </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="header">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" className="img-fluid logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav gap-4  ms-auto">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href={props.home}
                >
                  Home
                </NavLink>
                <NavLink className="nav-link " href={props.about}>
                  About Us
                </NavLink>
                <NavLink className="nav-link" href={props.service}>
                  Service
                </NavLink>
                <Button className="btn" onClick={openModal}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </section>
      {showModal && <MyModal closeModal={closeModal} />}
    </>
  );
}

export default Header;
