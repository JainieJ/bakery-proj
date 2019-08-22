import styled, { css } from "styled-components";
import { FaBars, FaCartPlus } from "react-icons/fa";

const navIconStyles = css`
  font-size: 1.5rem;
  color: var(--mainPink);
  cursor: pointer;
`;

export const NavContainer = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--mainWhite);
  padding: 0.5rem 0rem;
  border-bottom: 3px solid var(--mainPink);
  z-index: 1;
`;

export const NavContentContainer = styled.div`
  max-width: 2000px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

export const MenuIconContainer = styled(FaBars)`
  width: 30%;
  ${navIconStyles}
`;

export const ShopIconContainer = styled(FaCartPlus)`
  ${navIconStyles}
`;

export const NavCartContainer = styled.div`
  position: relative;
`;

export const ItemsCountContainer = styled.div`
  position: absolute;
  background-color: var(--mainYellow);
  color: var(--mainWhite);
  padding: 0.1rem 0.5rem;
  font-size: 0.8rem;
  top: -8px;
  right: -15px;
  border-radius: 50%;
`;

export const GreetingAndShopIconContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 30%;
  text-align: center;
`;
