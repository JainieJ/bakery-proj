import React from "react";
import {
  CheckBoxLabelContainer,
  CheckBoxInputContainer,
  CheckMarkContainer
} from "./checkbox-input.styles";

const CheckBoxInput = ({ attributeName, children, checked, handleChange }) => {
  return (
    <div>
      <CheckBoxLabelContainer htmlFor={attributeName}>
        {children}
        <CheckBoxInputContainer
          type="checkbox"
          name={attributeName}
          id={attributeName}
          checked={checked && true}
          onChange={e => handleChange(e.target)}
        />
        <CheckMarkContainer />
      </CheckBoxLabelContainer>
    </div>
  );
};

export default CheckBoxInput;
