import React from "react";
import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { ProductConsumer } from "../../context/context";

const ProductItem = ({ item: { image, price, title } }) => {
  return (
    <ProductConsumer>
      {value => {
        return (
          <ItemWrapper className="col-10 mx-auto my-3 col-sm-6 col-lg-4">
            <div className="card">
              <div className="img-container">
                <img
                  src={image}
                  alt="store item"
                  className="card-img-top product-img"
                />
                <div className="icon-container">
                  <FaSearch className="icon" />
                  <FaShoppingCart className="icon" />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0 text-capitalize">{title}</p>
                <p className="mb-0">${price}</p>
              </div>
            </div>
          </ItemWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductItem;

const ItemWrapper = styled.div`
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .product-img {
    transition: var(--mainTransition);
  }
  .img-container:hover .product-img {
    cursor: pointer;
    transform: scale(1.2);
    opacity: 0.5;
  }
  .icon-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .icon {
    font-size: 2.5rem;
    margin: 0 0.6rem;
    background: var(--mainYellow);
    padding: 0.3rem;
    border-radius: 0.4rem;
    color: var(--mainBlack);
    opacity: 0;
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--mainWhite);
    cursor: pointer;
  }
  .img-container:hover .icon {
    opacity: 1;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
