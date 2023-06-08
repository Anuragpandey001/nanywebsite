import React, { useState } from "react";
import bannerimg1 from "../images/banner1.jpg";
import bannerimg2 from "../images/banner2.jpg";
import bannerimg3 from "../images/banner3.jpg";
import bannerimg4 from "../images/banner4.jpg";
import bannerimg5 from "../images/banner5.jpg";
import MyModal from "./MyModal";

function Banner() {
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
      <section className="banner space">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10">
              <div
                id="carouselExampleControls"
                className="carousel carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6">
                        <div className="w-100">
                          <h3 className="heading">
                            <span className="subheading"> Cooking </span>
                            Services
                          </h3>
                          <p className="text-secondary para">
                            End-to-end payments and financial management in a
                            single solution. Meet the right platform to help
                            realize.
                          </p>
                          <button
                            className="btn btn1 rounded-pill"
                            onClick={openModal}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bannerimg1">
                          <img
                            src={bannerimg4}
                            className="mareketing_img img-fluid bannerimg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6">
                        <div className="w-100">
                          <h3 className="heading">
                            <span className="subheading"> HouseKeeping </span>{" "}
                            Services
                          </h3>
                          <p className="text-secondary para">
                            End-to-end payments and financial management in a
                            single solution. Meet the right platform to help
                            realize.
                          </p>
                          <button
                            className="btn btn1 rounded-pill"
                            onClick={openModal}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bannerimg1">
                          <img
                            src={bannerimg5}
                            className="mareketing_img img-fluid bannerimg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-6">
                        <div className="w-100">
                          <h3 className="heading">
                            <span className="subheading"> ChildCare </span> for
                            Your Busy Life
                          </h3>
                          <p className="text-secondary para">
                            End-to-end payments and financial management in a
                            single solution. Meet the right platform to help
                            realize.
                          </p>
                          <button
                            className="btn btn1 rounded-pill"
                            onClick={openModal}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bannerimg2">
                          <img
                            src={bannerimg2}
                            className="mareketing_img img-fluid bannerimg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EditModal component */}
      {showModal && <MyModal closeModal={closeModal} />}
    </>
  );
}

export default Banner;
