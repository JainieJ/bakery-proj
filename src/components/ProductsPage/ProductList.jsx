import React from "react";
import { ProductConsumer } from "../../context/context";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <ProductConsumer>
      {value => {
        const { filteredItems } = value;
        return (
          <div className="row mt-3">
            {filteredItems.map(item => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductList;
