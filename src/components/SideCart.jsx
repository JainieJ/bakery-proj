import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/context";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "./../redux/cart/cart.selectors";

const SideCart = ({ hidden }) => {
  return (
    <ProductConsumer>
      {value => {
        const { closeSideCart, cartProducts, cartTotal } = value;
        return (
          <SideCartWrapper open={hidden}>
            <div className="column">
              {cartProducts.map(product => {
                return (
                  <div key={product.id} className="mt-3 mb-5">
                    <img
                      src={product.image}
                      alt="product in cart"
                      className="product-img"
                    />
                    <h5 className="text-capitalize mt-3">{product.title}</h5>
                    <h5 className="product-amount">amount: {product.amount}</h5>
                  </div>
                );
              })}
              <h5 className="cart-total">cart total: ${cartTotal}</h5>
              <Link to="/cart" className="main-link" onClick={closeSideCart}>
                cart page
              </Link>
            </div>
          </SideCartWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(SideCart);

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
  overflow-y: scroll;
  .column {
    text-align: center;
    margin: 3rem 2rem 8rem 2rem;
  }
  .product-img {
    border: 3px solid var(--mainYellow);
    width: 9rem;
    height: 7.5rem;
  }
  .product-amount {
    color: var(--mainPink);
    text-transform: capitalize;
    font-weight: bold;
  }
  .cart-total {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 768px) {
    max-width: 22rem;
  }
`;
