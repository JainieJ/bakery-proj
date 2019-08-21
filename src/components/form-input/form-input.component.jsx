import React from "react";
import {
  FormInputContainer,
  FormInputLabelContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabelContainer>{label}</FormInputLabelContainer>
      ) : null}
    </div>
  );
};

export default FormInput;
