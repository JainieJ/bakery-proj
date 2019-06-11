import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/context";

const SideCart = () => {
  return (
    <ProductConsumer>
      {value => {
        const { sideCartOPen } = value;
        return (
          <SideCartWrapper open={sideCartOPen}>
            <h1>hello from sidecart</h1>
          </SideCartWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default SideCart;

const SideCartWrapper = styled.div`
  position: fixed;
  top: 89px;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainViolet);
  z-index: 1;
  border-left: 3px solid var(--mainPink);
  transition: var(--mainTransition);
  transform: ${props => (props.open ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 768px) {
    width: 22rem;
  }
`;
