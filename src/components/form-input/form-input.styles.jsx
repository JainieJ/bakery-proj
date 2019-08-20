import styled, { css } from "styled-components";

const shrinkStyles = css`
  top: -14px;
  font-size: 12px;
  color: var(--mainBlack);
`;

export const FormInputGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputLabelContainer = styled.label`
  color: var(--mainTextGrey);
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkStyles}
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: var(--mainTextGrey);
  font-size: 1.2rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--mainTextGrey);
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabelContainer} {
    ${shrinkStyles}
  }
`;
