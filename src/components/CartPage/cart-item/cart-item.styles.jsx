import styled, { css } from "styled-components";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash
} from "react-icons/fa";

const chevronIconStyles = css`
  color: var(--mainPink);
  cursor: pointer;
`;

export const ProductImageContainer = styled.img`
  width: 8rem;
  height: 6rem;
`;

export const ChevronIconContainer = styled.div`
  font-size: 1.3rem;
  text-transform: capitalize;
`;

export const ChevronDownContainer = styled(FaChevronCircleDown)`
  ${chevronIconStyles};
  margin-right: 1rem;
`;

export const ChevronUpContainer = styled(FaChevronCircleUp)`
  ${chevronIconStyles};
  margin-left: 1rem;
`;

export const TrashIconContainer = styled(FaTrash)`
  color: var(--mainViolet);
  cursor: pointer;
`;

export const CartItemContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  text-transform: capitalize;
  font-size: 1.3rem;
  @media (max-width: 991px) {
    ${ProductImageContainer} {
      width: 14rem;
      height: 9rem;
      border: 5px solid var(--mainYellow);
    }
  }
`;
