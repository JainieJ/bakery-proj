import React from "react";
import singleProductBcg from "../img/singleProductBcg.jpg";
import Hero from "./../components/Hero";
import SingleProductContent from "./../components/SingleProductPage/SingleProductContent";

const SingleProductPage = () => {
  return (
    <>
      <Hero img={singleProductBcg} />
      <SingleProductContent />
    </>
  );
};

export default SingleProductPage;
