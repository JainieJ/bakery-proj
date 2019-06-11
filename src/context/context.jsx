import React, { Component } from "react";
import { links } from "./LinkData";

const Product = React.createContext();

class ProductProvider extends Component {
  state = {
    cartTotal: 0,
    sideCartOPen: false,
    sideBarOpen: false,
    links
  };
  toggleSideBar = () => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen });
  };
  toggleSideCart = () => {
    this.setState({ sideCartOPen: !this.state.sideCartOPen });
  };
  closeSideBar = () => {
    this.setState({ sideBarOpen: false });
  };
  closeSideCart = () => {
    this.setState({ sideCartOPen: false });
  };
  render() {
    return (
      <Product.Provider
        value={{
          ...this.state,
          toggleSideBar: this.toggleSideBar,
          toggleSideCart: this.toggleSideCart,
          closeSideBar: this.closeSideBar,
          closeSideCart: this.closeSideCart
        }}
      >
        {this.props.children}
      </Product.Provider>
    );
  }
}

export default ProductProvider;

export const ProductConsumer = Product.Consumer;
