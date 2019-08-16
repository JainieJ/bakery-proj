import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectSingleProduct } from "../../../redux/products/products.selectors";
import { addItem } from "../../../redux/cart/cart.actions";
import {
  ImageContainer,
  TitleContainer,
  PriceContainer
} from "./single-product-content.styles";

const SingleProductContent = ({ singleProduct, addItem }) => {
  return (
    <SingleProductWrapper className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto col-lg-6 my-3 text-center mr-5 align-self-center">
          <ImageContainer
            className="img-fluid"
            src={singleProduct.image}
            alt="store product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-6 my-3 ml-3 text-center">
          <TitleContainer>Description: {singleProduct.title}</TitleContainer>
          <PriceContainer>price: ${singleProduct.price}</PriceContainer>
          <p className="my-3 text-muted">{singleProduct.description}</p>
          <div className="d-flex justify-content-center">
            <button
              className="main-link cart-btn d-flex align-items-center"
              onClick={() => addItem(singleProduct)}
            >
              add to cart
            </button>
            <Link
              to="/products"
              className="main-link products-btn d-flex align-items-center"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </SingleProductWrapper>
  );
};

const mapStateToProps = (state, ownProps) => ({
  singleProduct: selectSingleProduct(ownProps.match.params.id)(state)
});

const mapDispatchToProps = dispatch => ({
  addItem: product => dispatch(addItem(product))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleProductContent)
);

const SingleProductWrapper = styled.div`
  .price {
    color: var(--mainPink);
  }
  .products-btn {
    margin-left: 1.5rem;
    text-transform: capitalize;
  }
  .cart-btn:focus {
    outline: none;
  }
  p {
    font-size: 1.5rem;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 3rem !important;
  }

  .product-img {
    border: 8px solid var(--mainYellow);
  }
`;
