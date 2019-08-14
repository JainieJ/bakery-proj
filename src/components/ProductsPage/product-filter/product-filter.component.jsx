import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  filterByName,
  filterByType,
  filterByPrice,
  filterByGluten
} from "./../../../redux/filter/filter.actions";
import {
  selectFilterSearch,
  selectFilterSelect,
  selectFilterPrice,
  selectFilterGlutenFree,
  selectFilteredProducts
} from "./../../../redux/filter/filter.selectors";
import {
  selectProductTypes,
  selectProductMaxPrice
} from "./../../../redux/products/products.selectors";
import NameSearchInput from "../../name-search-input/name-search-input.component";
import SelectInput from "../../select-input/select-input.component";
import PriceRangeInput from "../../price-range/price-range.component";
import CheckBoxInput from "../../checkbox-input/checkbox-input.component";
import { FilterContainer } from "./product-filter.styles";

const ProductFilter = ({
  search,
  productTypes,
  select,
  maxPrice,
  price,
  glutenFree,
  filteredProducts,
  filterByName,
  filterByType,
  filterByPrice,
  filterByGluten
}) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-10 mx-auto">
          <FilterContainer>
            <NameSearchInput
              attributeName="search"
              value={search}
              handleChange={filterByName}
            >
              search products
            </NameSearchInput>
            <SelectInput
              attributeName="select"
              value={select}
              options={productTypes}
              handleChange={filterByType}
            >
              type
            </SelectInput>
            <PriceRangeInput
              attributeName="price"
              maxPrice={maxPrice}
              minPrice={0}
              price={price}
              handleChange={filterByPrice}
            >{`price: ${price || maxPrice}`}</PriceRangeInput>
            <CheckBoxInput
              attributeName="glutenFree"
              checked={glutenFree}
              handleChange={filterByGluten}
            >
              gluten Free
            </CheckBoxInput>
          </FilterContainer>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-10 mx-auto">
          <h4 className="text-capitalize">
            total products: {filteredProducts.length}
          </h4>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  search: selectFilterSearch,
  productTypes: selectProductTypes,
  select: selectFilterSelect,
  maxPrice: selectProductMaxPrice,
  price: selectFilterPrice,
  glutenFree: selectFilterGlutenFree,
  filteredProducts: selectFilteredProducts
});

const mapDispatchToProps = dispatch => ({
  filterByName: eventTarget => dispatch(filterByName(eventTarget)),
  filterByType: eventTarget => dispatch(filterByType(eventTarget)),
  filterByPrice: eventTarget => dispatch(filterByPrice(eventTarget)),
  filterByGluten: eventTarget => dispatch(filterByGluten(eventTarget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFilter);
