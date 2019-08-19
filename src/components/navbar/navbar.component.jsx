import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { toggleMenuHidden } from "../../redux/menu/menu.actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsTotalCount } from "../../redux/cart/cart.selectors";
import logo from "../../img/sweet-house.svg";
import {
  NavContainer,
  NavContentContainer,
  MenuIconContainer,
  ShopIconContainer,
  NavCartContainer,
  ItemsCountContainer
} from "./navbar.styles";

const NavBar = ({ toggleSideCart, toggleSideBar, cartItemsTotal }) => {
  return (
    <NavContainer>
      <NavContentContainer>
        <MenuIconContainer onClick={toggleSideBar} />
        <img
          src={logo}
          alt="company logo"
          style={{ width: "70px", height: "70px" }}
        />
        <NavCartContainer>
          <ShopIconContainer onClick={toggleSideCart} />
          <ItemsCountContainer>{cartItemsTotal}</ItemsCountContainer>
        </NavCartContainer>
      </NavContentContainer>
    </NavContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsTotal: selectCartItemsTotalCount
});

const mapDispatchToProps = dispatch => ({
  toggleSideCart: () => dispatch(toggleCartHidden()),
  toggleSideBar: () => dispatch(toggleMenuHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
