import React from "react";
import {
  SideCartItemContainer,
  ImageContainer,
  TitleContainer,
  AmountContainer
} from "./side-cart-item.styles";

const SideCartItem = ({ image, title, quantity }) => {
  return (
    <SideCartItemContainer>
      <ImageContainer src={image} alt="product in cart" />
      <TitleContainer>{title}</TitleContainer>
      <AmountContainer>amount: {quantity}</AmountContainer>
    </SideCartItemContainer>
  );
};

export default SideCartItem;
