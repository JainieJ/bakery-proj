import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectSingleProduct } from "../../../redux/products/products.selectors";
import { addItem } from "../../../redux/cart/cart.actions";
import {
  ImageContainer,
  TitleContainer,
  PriceContainer,
  DescriprionContainer,
  ButtonContainer,
  SingleButtonContainer
} from "./single-product-content.styles";

const SingleProductContent = ({ history, singleProduct, addItem }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto col-lg-6 my-3 text-center mr-5 align-self-center">
          <ImageContainer
            className="img-fluid"
            src={`../${singleProduct.image}`}
            alt="store product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-6 my-3 ml-3 text-center">
          <TitleContainer>Description: {singleProduct.title}</TitleContainer>
          <PriceContainer>price: ${singleProduct.price}</PriceContainer>
          <DescriprionContainer>
            {singleProduct.description}
          </DescriprionContainer>
          <ButtonContainer>
            <SingleButtonContainer
              className="main-link"
              onClick={() => addItem(singleProduct)}
            >
              add to cart
            </SingleButtonContainer>
            <SingleButtonContainer
              className="main-link"
              onClick={() => history.push("/products")}
            >
              Products
            </SingleButtonContainer>
          </ButtonContainer>
        </div>
      </div>
    </div>
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
