import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductTypes } from "../../../redux/products/products.selectors";
import { selectFilterSelect } from "../../../redux/filter/filter.selectors";
import { filterByType } from "../../../redux/filter/filter.actions";
import { SelectContainer, SelectLabelContainer } from "./select-input.styles";

const SelectInput = ({ productTypes, select, filterByType }) => {
  console.log("SelectInput is rerendering");
  return (
    <div>
      <SelectLabelContainer htmlFor="select">type</SelectLabelContainer>
      <SelectContainer
        name="select"
        id="select"
        value={select}
        onChange={e => filterByType(e.target)}
      >
        {productTypes.map((type, index) => {
          return (
            <option key={index} value={type}>
              {type}
            </option>
          );
        })}
      </SelectContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  productTypes: selectProductTypes,
  select: selectFilterSelect
});

const mapDispatchToProps = dispatch => ({
  filterByType: eventTarget => dispatch(filterByType(eventTarget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectInput);
