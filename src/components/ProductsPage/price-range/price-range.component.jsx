import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductMaxPrice } from "../../../redux/products/products.selectors";
import { selectFilterPrice } from "../../../redux/filter/filter.selectors";
import { filterByPrice } from "../../../redux/filter/filter.actions";
import {
  PriceRangeContainer,
  PriceRangeLabelContainer
} from "./price-range.styles";

const PriceRangeInput = ({ maxPrice, price, filterByPrice }) => {
  console.log("PriceRangeInput is rerendering");
  return (
    <div>
      <PriceRangeLabelContainer htmlFor="price">
        {`price: ${price || maxPrice}`}
      </PriceRangeLabelContainer>
      <PriceRangeContainer
        type="range"
        name="price"
        id="price"
        max={maxPrice}
        min={0}
        value={price || maxPrice}
        onChange={e => filterByPrice(e.target)}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  maxPrice: selectProductMaxPrice,
  price: selectFilterPrice
});

const mapDispatchToProps = dispatch => ({
  filterByPrice: eventTarget => dispatch(filterByPrice(eventTarget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceRangeInput);
