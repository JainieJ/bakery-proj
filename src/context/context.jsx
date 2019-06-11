import React, { Component } from "react";

const Product = React.createContext();

class ProductProvider extends Component {
  state = {
    cartTotal: 0
  };
  render() {
    return (
      <Product.Provider value={{ ...this.state }}>
        {this.props.children}
      </Product.Provider>
    );
  }
}

export default ProductProvider;

export const ProductConsumer = Product.Consumer;
