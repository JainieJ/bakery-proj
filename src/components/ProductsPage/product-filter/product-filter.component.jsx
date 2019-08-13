// render row with columns
import React from "react";
import { connect } from "react-redux";
import { ProductConsumer } from "../../../context/context";
import NameSearchInput from "../../name-search-input/name-search-input.component";
import SelectInput from "../../select-input/select-input.component";
import PriceRangeInput from "../../price-range/price-range.component";
import CheckBoxInput from "../../checkbox-input/checkbox-input.component";
import { FilterContainer } from "./product-filter.styles";
import { filterByName } from "./../../../redux/filter/filter.actions";

//continue working on NameSearchInput

const ProductFilter = ({ filterByName }) => {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          type,
          price,
          minPrice,
          glutenFree,
          handleChange,
          filteredItems,
          items
        } = value;
        let { maxPrice } = value;
        // getting unique types of products for select element
        let productTypes = items.map(item => item.type);
        const productSet = new Set(productTypes);
        productTypes = [...productSet];
        productTypes.unshift("all");
        // getting the max price
        const prices = items.map(item => item.price);
        maxPrice = Math.max(...prices);
        return (
          <>
            <div className="row mt-5">
              <div className="col-10 mx-auto">
                <FilterContainer>
                  <NameSearchInput>search products</NameSearchInput>
                  <SelectInput options={[]}>type</SelectInput>
                  <PriceRangeInput>{`price: ${5 || maxPrice}`}</PriceRangeInput>
                  <CheckBoxInput>gluten Free</CheckBoxInput>
                </FilterContainer>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-10 mx-auto">
                <h4 className="text-capitalize">
                  total products: {filteredItems.length}
                </h4>
              </div>
            </div>
          </>
        );
      }}
    </ProductConsumer>
  );
};

const mapDispatchToProps = dispatch => ({
  filterByName: eventTarget => dispatch(filterByName(eventTarget))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductFilter);
