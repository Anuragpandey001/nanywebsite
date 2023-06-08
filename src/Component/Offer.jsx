import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyModal from "./MyModal";

function Offer() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("open");
  };

  const closeModal = () => {
    setShowModal(false);
    console.log("close");
  };
  const boxes = [
    {
      img: "https://themecrafter.com/bebicare/wp-content/uploads/2022/12/info-box-img1-min.jpg",
      title: "Evening Sitter",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ad! Ducimus, commodi ipsam architecto perspiciatis nihilquos quae aut sequi.",
    },
    {
      img: "https://themecrafter.com/bebicare/wp-content/uploads/2022/12/info-box-img2-min.jpg",
      title: "Daytime Help",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ad! Ducimus, commodi ipsam architecto perspiciatis nihilquos quae aut sequi.",
    },
    {
      img: "https://themecrafter.com/bebicare/wp-content/uploads/2022/12/info-box-img3-min.jpg",
      title: "After School",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ad! Ducimus, commodi ipsam architecto perspiciatis nihilquos quae aut sequi.",
    },
    {
      img: "https://themecrafter.com/bebicare/wp-content/uploads/2022/12/info-box-img4-min.jpg",
      title: "Health care",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ad! Ducimus, commodi ipsam architecto perspiciatis nihilquos quae aut sequi.",
    },
  ];
  return (
    <>
      <section className="space offer" id="about">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center">
                <h3 className="subheading mb-4">What Can We Offer</h3>
              </div>
            </Col>
            {boxes.map((item, index) => {
              const { img, title, para } = item;
              return (
                <Col md="3">
                  <div className={`boxes${index + 1} box`}>
                    <img src={img} alt="" className="rounded-circle" />
                    <h3 className="title">{title}</h3>
                    <p>{para}</p>
                    <button className="btn " onClick={openModal}>
                      Book Now
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      {/* EditModal component */}
      {showModal && <MyModal closeModal={closeModal} />}
    </>
  );
}

export default Offer;
