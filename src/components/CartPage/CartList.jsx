import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context/context";

const CartList = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartProducts } = value;
        return (
          <div className="container-fluid">
            {cartProducts.length === 0 ? (
              <div className="row">
                <div
                  className="col 10 mx-auto text-capitalize text-center my-5"
                  style={{ fontSize: "2rem" }}
                >
                  your cart is empty
                </div>
              </div>
            ) : (
              cartProducts.map(product => {
                return <CartItem key={product.id} product={product} />;
              })
            )}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default CartList;
