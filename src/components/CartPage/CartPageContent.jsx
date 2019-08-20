import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./cart-list/cart-list.component";
import CartTotal from "./CartTotal";

const CartPageContent = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-4 mx-auto text-center">
            <Title text="cart" spanText="items" />
          </div>
        </div>
      </div>
      <CartColumns />
      <CartList />
      <CartTotal />
    </>
  );
};

export default CartPageContent;
