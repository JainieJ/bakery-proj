import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/context";
import { Link } from "react-router-dom";

const SingleProductContent = () => {
  return (
    <ProductConsumer>
      {value => {
        const { singleProduct } = value;
        return (
          <SingleProductWrapper className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto col-lg-6 my-3 text-center mr-5 align-self-center">
                <img
                  src={`../${singleProduct.image}`}
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
                <button className="main-link cart-btn">add to cart</button>
                <Link to="/products" className="main-link products-btn">
                  Products
                </Link>
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
  }
  .product-img {
    border: 8px solid var(--mainYellow);
  }
`;
