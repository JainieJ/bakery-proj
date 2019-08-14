import React from "react";
import { SelectContainer, SelectLabelContainer } from "./select-input.styles";

const SelectInput = ({
  attributeName,
  children,
  value,
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
        value={value}
        onChange={e => handleChange(e.target)}
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
