import styled from "styled-components";

export const ImageContainer = styled.img`
  border: 8px solid var(--mainYellow);
`;

export const TitleContainer = styled.h3`
  text-transform: capitalize;
`;

export const PriceContainer = styled.h4`
  text-transform: capitalize;
  color: var(--mainPink);
  margin-top: 1rem;
`;

export const DescriprionContainer = styled.p`
  margin: 2rem 0 2rem 0;
  color: var(--mainTextGrey);
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

export const SingleButtonContainer = styled.button`
  text-align: center;
  &:focus {
    outline: none;
  }
`;

//TODO! FIX BUTTONS RESPONSIVENESS
