import React from "react";
import cartPageBcg from "../img/cartPageBcg.jpg";
import Hero from "./../components/Hero";
import CartPageContent from "./../components/CartPage/CartPageContent";

const CartPage = () => {
  return (
    <>
      <Hero img={cartPageBcg} />
      <CartPageContent />
    </>
  );
};

export default CartPage;
