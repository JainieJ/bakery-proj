import styled, { css } from "styled-components";

const captionStyles = css`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const SideCartItemContainer = styled.div`
  margin: 1rem 0 3rem 0;
`;

export const ImageContainer = styled.img`
  border: 3px solid var(--mainYellow);
  width: 9rem;
  height: 7.5rem;
`;

export const TitleContainer = styled.p`
  margin-top: 1rem;
  ${captionStyles}
`;

export const AmountContainer = styled.p`
  color: var(--mainPink);
  ${captionStyles}
`;
