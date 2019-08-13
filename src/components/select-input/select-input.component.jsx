import React from "react";
import { SelectContainer, SelectLabelContainer } from "./select-input.styles";

const SelectInput = ({
  attributeName,
  children,
  type,
  options,
  handleChange
}) => {
  return (
    <div>
      <SelectLabelContainer htmlFor={attributeName}>
        {children}
      </SelectLabelContainer>
      <SelectContainer
        name={attributeName}
        id={attributeName}
        value={type}
        onChange={handleChange}
      >
        {options.map((type, index) => {
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

export default SelectInput;
