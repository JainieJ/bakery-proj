import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartHidden,
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart.selectors";
import { closeCart } from "../../redux/cart/cart.actions";
import SideCartItem from "../side-cart-item/side-cart-item.component";
import {
  CartTotalContainer,
  ButtonContainer,
  SideCartContainer
} from "./side-cart.styles";

const SideCart = ({
  history,
  hidden,
  cartItems,
  cartItemsTotal,
  closeCart
}) => {
  return (
    <SideCartContainer closed={hidden}>
      {cartItems.map(({ id, ...product }) => {
        return <SideCartItem key={id} {...product} />;
      })}
      <CartTotalContainer>cart total: ${cartItemsTotal}</CartTotalContainer>
      <ButtonContainer
        onClick={() => {
          closeCart();
          history.push("/cart");
        }}
      >
        cart page
      </ButtonContainer>
    </SideCartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal
});

const mapDispatchToProps = dispatch => ({
  closeCart: () => dispatch(closeCart())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideCart)
);
