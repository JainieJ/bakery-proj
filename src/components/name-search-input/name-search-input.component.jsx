import React from "react";
import {
  NameSearchInputContainer,
  NameSearchLabelContainer
} from "./name-search-input.styles";

const NameSearchInput = ({ attributeName, children, search, handleChange }) => {
  return (
    <div>
      <NameSearchLabelContainer htmlFor={attributeName}>
        {children}
      </NameSearchLabelContainer>
      <NameSearchInputContainer
        type="text"
        id={attributeName}
        name={attributeName}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default NameSearchInput;
