import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  decreaseItem
} from "../../../redux/cart/cart.actions";
import {
  ProductImageContainer,
  ChevronIconContainer,
  ChevronDownContainer,
  ChevronUpContainer,
  TrashIconContainer,
  CartItemContainer
} from "./cart-item.styles";

const CartItem = ({ item, addItem, removeItem, decreaseItem }) => {
  const { image, title, price, quantity } = item;
  return (
    <CartItemContainer className="row text-center align-items-center my-3">
      <div className="col-8 mx-auto col-lg-2 my-2">
        <ProductImageContainer
          src={image}
          alt="product in cart"
          className="img-fluid"
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
      <ChevronIconContainer className="col-8 mx-auto col-lg-2 my-2 text-center">
        <ChevronDownContainer onClick={() => decreaseItem(item)} />
        {quantity}
        <ChevronUpContainer onClick={() => addItem(item)} />
      </ChevronIconContainer>
      <div className="col-8 mx-auto col-lg-2 my-2 item-info">
        <TrashIconContainer onClick={() => removeItem(item)} />
      </div>
      <div className="col-8 mx-auto col-lg-2 my-2 item-info text-muted">
        item total: ${quantity * price}
      </div>
    </CartItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);

// const CartItemWrapper = styled.div`
//   font-family: "Open Sans", sans-serif;
//   .product-img {
//     width: 8rem;
//     height: 6rem;
//   }
//   .item-info {
//     font-size: 1.3rem;
//     text-transform: capitalize;
//   }
//   .chevron-icon {
//     color: var(--mainPink);
//     cursor: pointer;
//   }
//   .trash-icon {
//     color: var(--mainViolet);
//     cursor: pointer;
//   }
//   @media (max-width: 991px) {
//     .product-img {
//       width: 14rem;
//       height: 9rem;
//       border: 5px solid var(--mainYellow);
//     }
//   }
// `;
