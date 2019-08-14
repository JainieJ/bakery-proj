import React from "react";
import {
  NameSearchInputContainer,
  NameSearchLabelContainer
} from "./name-search-input.styles";

const NameSearchInput = ({ attributeName, children, value, handleChange }) => {
  return (
    <div>
      <NameSearchLabelContainer htmlFor={attributeName}>
        {children}
      </NameSearchLabelContainer>
      <NameSearchInputContainer
        type="text"
        id={attributeName}
        name={attributeName}
        value={value}
        onChange={e => handleChange(e.target)}
      />
    </div>
  );
};

export default NameSearchInput;
