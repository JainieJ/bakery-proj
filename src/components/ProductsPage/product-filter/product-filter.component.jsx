import React from "react";
import { connect } from "react-redux";
import { ProductConsumer } from "../../../context/context";
import NameSearchInput from "../../name-search-input/name-search-input.component";
import SelectInput from "../../select-input/select-input.component";
import PriceRangeInput from "../../price-range/price-range.component";
import CheckBoxInput from "../../checkbox-input/checkbox-input.component";
import { FilterContainer } from "./product-filter.styles";
import {
  filterByName,
  filterByType,
  filterByPrice,
  filterByGluten
} from "./../../../redux/filter/filter.actions";
import { createStructuredSelector } from "reselect";
import {
  selectFilterSearch,
  selectFilterSelect,
  selectFilterPrice,
  selectFilterGlutenFree
} from "./../../../redux/filter/filter.selectors";
import {
  selectProductTypes,
  selectProductMaxPrice
} from "./../../../redux/products/products.selectors";

const ProductFilter = ({
  search,
  productTypes,
  select,
  maxPrice,
  price,
  glutenFree,
  filterByName,
  filterByType,
  filterByPrice,
  filterByGluten
}) => {
  return (
    <ProductConsumer>
      {value => {
        const {
          // search,
          type,
          // price,
          minPrice,
          // glutenFree,
          handleChange,
          filteredItems,
          items
        } = value;
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

const mapStateToProps = createStructuredSelector({
  search: selectFilterSearch,
  productTypes: selectProductTypes,
  select: selectFilterSelect,
  maxPrice: selectProductMaxPrice,
  price: selectFilterPrice,
  glutenFree: selectFilterGlutenFree
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
