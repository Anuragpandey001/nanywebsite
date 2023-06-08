import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import child from "../images/childcare.jpg";

function About() {
  return (
    <section className="space" id="service">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md="6">
            <div className="childCare">
              <img src={child} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col md="6">
            <div className="">
              <h3 className="subheading">Childcare for Your Busy Life</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                aut inventore nemo dolor numquam voluptatibus quo unde quam
                nostrum recusandae quae! Sed, omnis minus? Magni, libero maiores
                odit accusantium possimus quisquam impedit obcaecati hic enim
                quibusdam commodi sit id eaque.
              </p>
            </div>
            <div className="aboutList">
              <ul className="list-style-none p-0 m-0">
                <li className="">
                  <span className="whitebox">
                    <i class="fa-solid fa-check fs-5"></i>
                  </span>
                  Best Babysitter or Nanny​ Services for Your Kids
                </li>
                <li className="">
                  <span className="whitebox">
                    <i class="fa-solid fa-check fs-5"></i>
                  </span>
                  Experienced Team of Babysitter or Nanny​
                </li>
                <li className="">
                  <span className="whitebox">
                    <i class="fa-solid fa-check fs-5"></i>
                  </span>
                  Contact the ones you like
                </li>
                <li className="">
                  <span className="whitebox">
                    <i class="fa-solid fa-check fs-5"></i>
                  </span>
                  Hire Babysitters or nanny
                </li>
              </ul>
            </div>
            <div className="call d-flex align-items-center">
              <button className=" callingbtn shadow-none border-0 mt-md-4 mt-2">
                <i class="fa-solid fa-phone"></i>
              </button>
              <div className="">
                <h3 className="subheading ">7001086855</h3>
                <p className="mb-0">Call for Enquiry</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
