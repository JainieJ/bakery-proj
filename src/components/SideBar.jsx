import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/context";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuHidden } from "./../redux/menu/menu.selectors";

const SideBar = ({ hidden }) => {
  return (
    <ProductConsumer>
      {value => {
        const { links, closeSideBar } = value;
        return (
          <SideBarWrapper closed={hidden}>
            <ul>
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={closeSideBar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideBarWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectMenuHidden
});

export default connect(mapStateToProps)(SideBar);

const SideBarWrapper = styled.div`
  position: fixed;
  top: 89px;
  width: 100%;
  height: 100%;
  background-color: var(--mainViolet);
  z-index: 1;
  border-right: 3px solid var(--mainPink);
  transition: var(--mainTransition);
  transform: ${props =>
    !props.closed ? "translateX(0)" : "translateX(-100%)"};
  @media (min-width: 768px) {
    width: 22rem;
  }
  ul {
    padding: 0;
  }
  .sidebar-link {
    display: block;
    color: var(--mainBlack);
    text-decoration: none;
    font-size: 2rem;
    text-transform: capitalize;
    padding: 1rem;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--mainPink);
    padding-left: 2rem;
  }
`;
