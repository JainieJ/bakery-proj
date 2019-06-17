import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";

const CartTotal = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
        return (
          <CartTotalWrapper className="container mb-5">
            <div className="row">
              <div className="col-10 mx-auto text-center">
                <button
                  className="btn btn-outline-danger text-capitalize total-btn"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <p className="text-capitalize m-3">subtotal: ${cartSubTotal}</p>
                <p className="text-capitalize m-3">tax: ${cartTax}</p>
                <p className="text-capitalize m-3">total: ${cartTotal}</p>
              </div>
            </div>
          </CartTotalWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default CartTotal;

const CartTotalWrapper = styled.div`
  font-size: 1.3rem;
  font-family: "Open-Sans", sans-serif;
  .total-btn {
    font-size: 1.3rem;
  }
`;
