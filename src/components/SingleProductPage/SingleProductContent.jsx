import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";
import { Link } from "react-router-dom";

const SingleProductContent = ({ id }) => {
  return (
    <ProductConsumer>
      {value => {
        const { singleProduct, addToCart } = value;
        return (
          <SingleProductWrapper className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto col-lg-6 my-3 text-center mr-5 align-self-center">
                <img
                  src={singleProduct.image}
                  alt="store product"
                  className="img-fluid product-img"
                />
              </div>
              <div className="col-10 mx-auto col-lg-6 my-3 ml-3 text-center">
                <h3 className="text-capitalize">
                  Description: {singleProduct.title}
                </h3>
                <h4 className="price text-capitalize mt-3">
                  price: ${singleProduct.price}
                </h4>
                <p className="my-3 text-muted">{singleProduct.description}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="main-link cart-btn d-flex align-items-center"
                    onClick={() => addToCart(singleProduct.id)}
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
      }}
    </ProductConsumer>
  );
};

export default SingleProductContent;

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
