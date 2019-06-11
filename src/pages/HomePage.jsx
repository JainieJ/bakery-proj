import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HomeBanner from "../img/bg-banner.jpg";

const HomePage = () => {
  return (
    <>
      <Hero
        text="welcome to"
        spanText="sweet house"
        img={HomeBanner}
        fullHeight="true"
      >
        <Link to="/products" className="main-link">
          our products
        </Link>
      </Hero>
    </>
  );
};

export default HomePage;
