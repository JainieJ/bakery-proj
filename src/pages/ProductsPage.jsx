import React from "react";
import productsBcg from "../img/productsBcg.jpg";
import Hero from "./../components/Hero";
import ProductContent from "./../components/ProductsPage/ProductContent";

const ProductsPage = () => {
  return (
    <>
      <Hero img={productsBcg} />
      <ProductContent />
    </>
  );
};

export default ProductsPage;
