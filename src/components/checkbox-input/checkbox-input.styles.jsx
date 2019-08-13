import styled from "styled-components";

export const CheckBoxLabelContainer = styled.label`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2rem;
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 1.5rem 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CheckBoxInputContainer = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ .checkmark:after {
    display: block;
  }
`;

export const CheckMarkContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--mainPink);
  &:hover {
    background-color: var(--mainBlack);
    cursor: pointer;
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 10px;
    top: 7px;
    width: 8px;
    height: 10px;
    border: solid var(--mainWhite);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
