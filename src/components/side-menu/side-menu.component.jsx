import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuHidden } from "../../redux/menu/menu.selectors";
import { closeMenu } from "../../redux/menu/menu.actions";
import { links } from "../../context/LinkData";
import { SideMenuContainer, LinkContainer } from "./side-menu.styles";

const SideMenu = ({ hidden, closeMenu }) => {
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
      </ul>
    </SideMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectMenuHidden
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => dispatch(closeMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
