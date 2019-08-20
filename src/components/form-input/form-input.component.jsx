import React from "react";
import {
  FormInputGroupContainer,
  FormInputContainer,
  FormInputLabelContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputGroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabelContainer
          className={`${otherProps.value.length ? "shrink" : null}`}
        >
          {label}
        </FormInputLabelContainer>
      ) : null}
    </FormInputGroupContainer>
  );
};

export default FormInput;
