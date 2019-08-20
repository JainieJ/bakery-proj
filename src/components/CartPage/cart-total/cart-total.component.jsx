import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemsSubTotal,
  selectCartItemsSubTotalWithTaxes,
  selectCartItemsTotal
} from "../../../redux/cart/cart.selectors";
import {
  CartTotalContainer,
  ClearButtonContainer,
  SumCalculationContainer
} from "./cart-total.styles";

const CartTotal = ({ cartSubTotal, cartTax, cartTotal, clearCart }) => {
  return (
    <CartTotalContainer className="container mb-5">
      <div className="row">
        <div className="col-10 mx-auto text-center">
          <ClearButtonContainer
            className="btn btn-outline-danger"
            onClick={clearCart}
          >
            clear cart
          </ClearButtonContainer>
          <SumCalculationContainer>
            subtotal: ${cartSubTotal}
          </SumCalculationContainer>
          <SumCalculationContainer>tax: ${cartTax}</SumCalculationContainer>
          <SumCalculationContainer>total: ${cartTotal}</SumCalculationContainer>
        </div>
      </div>
    </CartTotalContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartSubTotal: selectCartItemsSubTotal,
  cartTax: selectCartItemsSubTotalWithTaxes,
  cartTotal: selectCartItemsTotal
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTotal);
