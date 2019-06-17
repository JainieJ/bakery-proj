import React from "react";
import ProductList from "./ProductList";
import Title from "./../Title";

const ProductContent = () => {
  return (
    <div className="section py-5 grey-bcg">
      <div className="container">
        {/* title */}
        <div className="row">
          <div className="col mx-auto text-center">
            <Title text="our products" />
          </div>
        </div>
        {/* product list */}
        <ProductList />
      </div>
    </div>
  );
};

export default ProductContent;