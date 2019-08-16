import React from "react";
import NameSearchInput from "../name-search-input/name-search-input.component";
import SelectInput from "../select-input/select-input.component";
import PriceRangeInput from "../price-range/price-range.component";
import CheckBoxInput from "../checkbox-input/checkbox-input.component";
import FilterTotal from "./../filter-total-products/filter-total.component";
import { FilterContainer } from "./product-filter.styles";

const ProductFilter = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-10 mx-auto">
          <FilterContainer>
            <NameSearchInput />
            <SelectInput />
            <PriceRangeInput />
            <CheckBoxInput />
          </FilterContainer>
        </div>
      </div>
      <FilterTotal />
    </>
  );
};

export default ProductFilter;
