import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem } from "../../../redux/cart/cart.actions";
import {
  ImageContainer,
  IconContainer,
  SearchIconContainer,
  ShoppingCartContainer,
  ProductContainer,
  ProductDescriptionContainer
} from "./product-item.styles";

const ProductItem = ({ item, history, match, addItem }) => {
  const { image, price, title, id } = item;
  return (
    <div className="col-10 mx-auto my-3 col-sm-6 col-lg-4">
      <div className="card">
        <ProductContainer>
          <ImageContainer
            src={image}
            alt="store item"
            className="card-img-top"
          />
          <IconContainer>
            <SearchIconContainer
              onClick={() => history.push(`${match.path}/${id}`)}
            />
            <ShoppingCartContainer onClick={() => addItem(item)} />
          </IconContainer>
        </ProductContainer>
        <ProductDescriptionContainer className="card-body ">
          <p>{title}</p>
          <p>${price}</p>
        </ProductDescriptionContainer>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ProductItem)
);
