import React from "react";
import styled from "styled-components";
import { FaBars, FaCartPlus } from "react-icons/fa";
import logo from "../img/sweet-house.svg";
import { ProductConsumer } from "../context";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../redux/cart/cart.action";

const NavBar = ({ toggleSideCart }) => {
  return (
    <ProductConsumer>
      {value => {
        const { totalCartItems, toggleSideBar } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="navbar-icon" onClick={toggleSideBar} />
              <img
                src={logo}
                alt="company logo"
                style={{ width: "70px", height: "70px" }}
              />
              <div className="nav-cart">
                <FaCartPlus className="navbar-icon" onClick={toggleSideCart} />
                <div className="cart-items">{totalCartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleSideCart: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--mainWhite);
  padding: 0.5rem 0rem;
  border-bottom: 3px solid var(--mainPink);
  z-index: 1;
  .nav-center {
    max-width: 2000px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
  }
  .navbar-icon {
    font-size: 1.5rem;
    color: var(--mainPink);
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    position: absolute;
    background-color: var(--mainYellow);
    color: var(--mainWhite);
    padding: 0.1rem 0.5rem;
    font-size: 0.8rem;
    top: -8px;
    right: -15px;
    border-radius: 50%;
  }
`;
