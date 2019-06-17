// render row with columns
import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

const ProductFilter = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          type,
          price,
          minPrice,
          glutenFree,
          handleChange,
          filteredItems,
          items
        } = value;
        let { maxPrice } = value;
        // getting unique types of products for select element
        let productTypes = items.map(item => item.type);
        const productSet = new Set(productTypes);
        productTypes = [...productSet];
        productTypes.unshift("all");
        // getting the max price
        const prices = items.map(item => item.price);
        maxPrice = Math.max(...prices);
        console.log(maxPrice);
        return (
          <>
            <div className="row mt-5">
              <div className="col-10 mx-auto">
                <FilterWrapper>
                  {/* search by name */}
                  <div>
                    <label htmlFor="search">search products</label>
                    <input
                      type="text"
                      id="search"
                      name="search"
                      value={search}
                      onChange={handleChange}
                      className="filter-item"
                    />
                  </div>
                  {/* search by type */}
                  <div>
                    <label htmlFor="type">type</label>
                    <select
                      name="type"
                      id="type"
                      onChange={handleChange}
                      value={type}
                      className="filter-item"
                    >
                      {productTypes.map((type, index) => {
                        return (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {/* price range */}
                  <div>
                    <label htmlFor="price">price: ${price || maxPrice}</label>
                    <input
                      type="range"
                      name="price"
                      id="price"
                      className="filter-price"
                      max={maxPrice}
                      min={minPrice}
                      value={price || maxPrice}
                      onChange={handleChange}
                    />
                  </div>
                  {/* gluten free */}
                  <div>
                    <label htmlFor="gluten-free" className="check-box">
                      gluten free
                      <input
                        type="checkbox"
                        name="glutenFree"
                        id="gluten-free"
                        onChange={handleChange}
                        checked={glutenFree && true}
                        className="checkbox-input"
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </FilterWrapper>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-10 mx-auto">
                <h4 className="text-capitalize">
                  total products: {filteredItems.length}
                </h4>
              </div>
            </div>
          </>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductFilter;

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 1.2rem;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
  }
  .filter-item {
    border: 2px solid var(--mainViolet);
    border-radius: 0.3rem;
    background: transparent;
    outline: none;
  }
  .filter-price {
    color: var(--mainPink) !important;
    -webkit-appearance: none;
    height: 0.8rem;
    border-radius: 0.3rem;
    background: var(--mainPink);
    opacity: 0.7;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }
  .filter-price::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #a663cc;
    cursor: pointer;
  }
  .filter-price::-moz-range-thumb {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: #a663cc;
    cursor: pointer;
  }
  .check-box {
    display: block;
    position: relative;
    padding-left: 35px;
    margin: 1.5rem 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--mainPink);
  }
  .checkmark:hover {
    background-color: var(--mainBlack);
    cursor: pointer;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .checkbox-input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 10px;
    top: 7px;
    width: 8px;
    height: 10px;
    border: solid var(--mainWhite);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
