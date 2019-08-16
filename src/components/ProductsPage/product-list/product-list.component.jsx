import React from "react";
import { connect } from "react-redux";
import ProductItem from "../ProductItem";
import { createStructuredSelector } from "reselect";
import { selectFilteredProducts } from "./../../../redux/filter/filter.selectors";
import { NoMatchNotificationContainer } from "./product-list.styles";

const ProductList = ({ filteredProducts }) => {
  return (
    <div className="row mt-3">
      {filteredProducts.length === 0 ? (
        <div className="col-10 mx-auto text-center">
          <NoMatchNotificationContainer>
            sorry, no items matched your search
          </NoMatchNotificationContainer>
        </div>
      ) : (
        filteredProducts.map(item => <ProductItem key={item.id} item={item} />)
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  filteredProducts: selectFilteredProducts
});

export default connect(mapStateToProps)(ProductList);
