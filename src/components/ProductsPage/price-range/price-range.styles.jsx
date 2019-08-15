import styled from "styled-components";

export const PriceRangeLabelContainer = styled.label`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2rem;
`;
export const PriceRangeContainer = styled.input`
  display: block;
  width: 100%;
  color: var(--mainPink) !important;
  -webkit-appearance: none;
  height: 0.8rem;
  border-radius: 0.3rem;
  background: var(--mainPink);
  opacity: 0.7;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #a663cc;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #a663cc;
    cursor: pointer;
  }
`;
