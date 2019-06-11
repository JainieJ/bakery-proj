import React, { Component } from "react";

const Product = React.createContext();

class ProductProvider extends Component {
  state = {};
  render() {
    return (
      <Product.Provider value={"hello from context"}>
        {this.props.children}
      </Product.Provider>
    );
  }
}

export default ProductProvider;

export const ProductConsumer = Product.Consumer;
