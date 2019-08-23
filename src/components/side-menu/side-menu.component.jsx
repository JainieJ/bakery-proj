import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuHidden } from "../../redux/menu/menu.selectors";
import { closeMenu } from "../../redux/menu/menu.actions";
import { links } from "../../context/LinkData";
import { selectLoggedInUser } from "./../../redux/user/user.selectors";
import { auth } from "./../../firebase/firebase.utils";
import {
  SideMenuContainer,
  LinkContainer,
  SignOutButtonContainer
} from "./side-menu.styles";

const SideMenu = ({ hidden, loggedInUser, closeMenu }) => {
  const SignInSignOut = loggedInUser ? (
    <SignOutButtonContainer
      onClick={() => {
        closeMenu();
        auth.signOut();
      }}
    >
      Sign Out
    </SignOutButtonContainer>
  ) : (
    <LinkContainer to="signin" onClick={closeMenu}>
      SignIn
    </LinkContainer>
  );
  return (
    <SideMenuContainer closed={hidden}>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <LinkContainer to={link.path} onClick={closeMenu}>
                {link.text}
              </LinkContainer>
            </li>
          );
        })}
        <li>{SignInSignOut}</li>
      </ul>
    </SideMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectMenuHidden,
  loggedInUser: selectLoggedInUser
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
