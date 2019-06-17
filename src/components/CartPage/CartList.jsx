import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context/context";

const CartList = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartProducts } = value;
        console.log(cartProducts);
        return (
          <div className="container-fluid">
            {cartProducts.map(product => {
              return <CartItem key={product.id} product={product} />;
            })}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default CartList;
