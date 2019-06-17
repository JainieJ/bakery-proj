import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash
} from "react-icons/fa";

const CartItem = ({ product: { image, title, price, amount, total } }) => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <CartItemWrapper className="row text-center align-items-center my-3">
            <div className="col-8 mx-auto col-lg-2 my-2">
              <img
                src={image}
                alt="product in cart"
                className="img-fluid product-img"
              />
            </div>
            <div className="col-8 mx-auto col-lg-2 my-2 item-info">
              <span className="d-lg-none">product: </span>
              {title}
            </div>
            <div className="col-8 mx-auto col-lg-2 my-2 item-info">
              <span className="d-lg-none">price: </span>
              {price}
            </div>
            <div className="col-8 mx-auto col-lg-2 my-2 item-info text-center">
              <FaChevronCircleDown className="mr-3 chevron-icon" />
              {amount}
              <FaChevronCircleUp className="ml-3 chevron-icon" />
            </div>
            <div className="col-8 mx-auto col-lg-2 my-2 item-info">
              <FaTrash className="trash-icon" />
            </div>
            <div className="col-8 mx-auto col-lg-2 my-2 item-info text-muted">
              item total: ${total}
            </div>
          </CartItemWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  .product-img {
    width: 8rem;
    height: 6rem;
  }
  .item-info {
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .chevron-icon {
    color: var(--mainPink);
    cursor: pointer;
  }
  .trash-icon {
    color: var(--mainViolet);
    cursor: pointer;
  }
  @media (max-width: 991px) {
    .product-img {
      width: 14rem;
      height: 9rem;
      border: 5px solid var(--mainYellow);
    }
  }
`;
