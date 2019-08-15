import React from "react";
import ProductList from "../product-list/product-list.component";
import Title from "../../Title";
import ProductFilter from "../product-filter/product-filter.component";

const ProductContent = () => {
  return (
    <div className="section py-5 grey-bcg">
      <div className="container">
        <div className="row">
          <div className="col mx-auto text-center">
            <Title text="our products" />
          </div>
        </div>
        <ProductFilter />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductContent;
