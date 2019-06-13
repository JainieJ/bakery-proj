import React from "react";
import styled from "styled-components";

const Title = ({ text, spanText }) => {
  return (
    <TitleWrapper>
      {text} <span>{spanText}</span>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.h3`
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--mainBlack);
  span {
    color: var(--mainPink);
  }
`;
