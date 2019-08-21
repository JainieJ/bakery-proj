import styled from "styled-components";

export const FormInputLabelContainer = styled.label`
  color: var(--mainTextGrey);
  font-size: 1rem;
  transition: 300ms ease all;
  display: block;
  margin-left: 1.5rem;
  transform: translateY(-0.5rem);
`;

export const FormInputContainer = styled.input`
  display: block;
  padding: 1rem 1.5rem;
  width: 90%;
  border: none;
  border-radius: 2px;
  background-color: rgba(250, 151, 167, 0.4);
  border-bottom: 3px solid transparent;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
  }

  &:placeholder-shown + ${FormInputLabelContainer} {
    transform: translateY(-4rem);
    opacity: 0;
    visibility: hidden;
  }

  &:focus:invalid {
    border-bottom: 3px solid #ff7730;
  }
`;
