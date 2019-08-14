import React from "react";
import {
  PriceRangeContainer,
  PriceRangeLabelContainer
} from "./price-range.styles";

const PriceRangeInput = ({
  attributeName,
  children,
  maxPrice,
  minPrice,
  price,
  handleChange
}) => {
  return (
    <div>
      <PriceRangeLabelContainer htmlFor={attributeName}>
        {children}
      </PriceRangeLabelContainer>
      <PriceRangeContainer
        type="range"
        name={attributeName}
        id={attributeName}
        max={maxPrice}
        min={minPrice}
        value={price || maxPrice}
        onChange={e => handleChange(e.target)}
      />
    </div>
  );
};

export default PriceRangeInput;
