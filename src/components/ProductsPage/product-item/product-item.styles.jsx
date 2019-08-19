import styled, { css } from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const icon = css`
  font-size: 2.5rem;
  margin: 0 0.6rem;
  background: var(--mainYellow);
  padding: 0.3rem;
  border-radius: 0.4rem;
  color: var(--mainBlack);
  opacity: 0;
  transition: var(--mainTransition);
  &:hover {
    color: var(--mainWhite);
    cursor: pointer;
  }
`;

export const ImageContainer = styled.img`
  transition: var(--mainTransition);
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    color: var(--mainWhite);
    cursor: pointer;
  }
`;

export const SearchIconContainer = styled(FaSearch)`
  ${icon}
`;

export const ShoppingCartContainer = styled(FaShoppingCart)`
  ${icon}
`;

export const ProductContainer = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${ImageContainer} {
    cursor: pointer;
    transform: scale(1.2);
    opacity: 0.5;
  }
  &:hover ${SearchIconContainer} {
    opacity: 1;
  }
  &:hover ${ShoppingCartContainer} {
    opacity: 1;
  }
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    text-transform: capitalize;
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
