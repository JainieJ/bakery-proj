import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";

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
    </>
  );
};

export default CartPageContent;
