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
  ItemsCountContainer,
  GreetingAndShopIconContainer,
  LogoContainer
} from "./navbar.styles";
import Greeting from "../greeting/greeting.component";
import { selectLoggedInUser } from "./../../redux/user/user.selectors";

const NavBar = ({
  toggleSideCart,
  toggleSideBar,
  cartItemsTotal,
  loggedInUser
}) => {
  return (
    <NavContainer>
      <NavContentContainer>
        <MenuIconContainer onClick={toggleSideBar} />
        <LogoContainer>
          <img
            src={logo}
            alt="company logo"
            style={{ width: "70px", height: "70px" }}
          />
        </LogoContainer>
        <GreetingAndShopIconContainer>
          {loggedInUser && <Greeting />}
          <NavCartContainer>
            <ShopIconContainer onClick={toggleSideCart} />
            <ItemsCountContainer>{cartItemsTotal}</ItemsCountContainer>
          </NavCartContainer>
        </GreetingAndShopIconContainer>
      </NavContentContainer>
    </NavContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsTotal: selectCartItemsTotalCount,
  loggedInUser: selectLoggedInUser
});

const mapDispatchToProps = dispatch => ({
  toggleSideCart: () => dispatch(toggleCartHidden()),
  toggleSideBar: () => dispatch(toggleMenuHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
