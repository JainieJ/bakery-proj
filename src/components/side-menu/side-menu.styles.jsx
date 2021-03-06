import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const linkStyles = css`
  display: block;
  color: var(--mainBlack);
  font-size: 2rem;
  text-transform: capitalize;
  padding: 1rem;
  transition: var(--mainTransition);
  &:hover {
    background: var(--mainPink);
    padding-left: 2rem;
    text-decoration: none;
    color: var(--mainBlack);
  }
`;

export const SideMenuContainer = styled.div`
  position: fixed;
  top: 89px;
  width: 100%;
  height: 100%;
  background-color: var(--mainViolet);
  z-index: 1;
  border-right: 3px solid var(--mainPink);
  transition: var(--mainTransition);
  transform: ${props =>
    !props.closed ? "translateX(0)" : "translateX(-100%)"};
  @media (min-width: 768px) {
    width: 22rem;
  }
  ul {
    padding: 0;
  }
`;

export const LinkContainer = styled(Link)`
  ${linkStyles}
`;

export const SignOutButtonContainer = styled.button`
  ${linkStyles}
  background-color:transparent;
  border: none;
  width: 100%;
  text-align: left;
  &:focus {
    outline: none;
  }
`;
