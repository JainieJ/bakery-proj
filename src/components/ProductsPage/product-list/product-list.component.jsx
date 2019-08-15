import React from "react";
import { ProductConsumer } from "../../../context/context";
import ProductItem from "../ProductItem";

const ProductList = () => {
  return (
    <ProductConsumer>
      {value => {
        const { filteredItems, loading } = value;
        return (
          <div className="row mt-3">
            {loading ? (
              <div className="col-10 mx-auto text-center">
                <h4 className="text-capitalize">loading data...</h4>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="col-10 mx-auto text-center">
                <h4
                  className="text-capitalize"
                  style={{
                    fontFamily: "Open-Sans, sans-serif",
                    letterSpacing: "0.3rem"
                  }}
                >
                  sorry, no items matched your search
                </h4>
              </div>
            ) : (
              filteredItems.map(item => (
                <ProductItem key={item.id} item={item} />
              ))
            )}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductList;
