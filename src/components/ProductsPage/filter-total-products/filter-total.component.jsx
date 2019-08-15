import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFilteredProducts } from "./../../../redux/filter/filter.selectors";

const FilterTotal = ({ filteredProducts }) => {
  console.log("filtertotal is rerendering");
  return (
    <div className="row mt-3">
      <div className="col-10 mx-auto">
        <h4 className="text-capitalize">
          total products: {filteredProducts.length}
        </h4>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  filteredProducts: selectFilteredProducts
});

export default connect(mapStateToProps)(FilterTotal);
