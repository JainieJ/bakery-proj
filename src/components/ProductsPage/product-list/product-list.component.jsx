import React from "react";
import { connect } from "react-redux";
import { ProductConsumer } from "../../../context/context";
import ProductItem from "../ProductItem";
import { createStructuredSelector } from "reselect";
import { selectFilteredProducts } from "./../../../redux/filter/filter.selectors";

const ProductList = ({ filteredProducts }) => {
  return (
    <ProductConsumer>
      {value => {
        const { loading } = value;
        return (
          <div className="row mt-3">
            {loading ? (
              <div className="col-10 mx-auto text-center">
                <h4 className="text-capitalize">loading data...</h4>
              </div>
            ) : filteredProducts.length === 0 ? (
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
              filteredProducts.map(item => (
                <ProductItem key={item.id} item={item} />
              ))
            )}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

const mapStateToProps = createStructuredSelector({
  filteredProducts: selectFilteredProducts
});

export default connect(mapStateToProps)(ProductList);
