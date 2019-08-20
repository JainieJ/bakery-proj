import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../../redux/cart/cart.selectors";
import { EmptyCartMessageContainer } from "./cart-list.styles";

const CartList = ({ cartItems }) => {
  return (
    <div className="container-fluid">
      {cartItems.length === 0 ? (
        <EmptyCartMessageContainer>
          your cart is empty
        </EmptyCartMessageContainer>
      ) : (
        cartItems.map(item => {
          return <CartItem key={item.id} item={item} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartList);
