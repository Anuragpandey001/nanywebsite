import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Banner from "../Component/Banner";
import Offer from "../Component/Offer";
import About from "../Component/About";
import Review from "../Component/Review";
import Counter from "../Component/Counter";

function Home() {
  return (
    <>
      <Header home="/" about="#about" service="#service" />
      <Banner />
      <Offer />
      <Counter />
      <About />
      <Footer />
    </>
  );
}

export default Home;
