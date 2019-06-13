import React, { Component } from "react";
import { links } from "./LinkData";
import { socialLinks } from "./socialLinks";
import { contactInfo } from "./contactInfo";
import { items } from "./productData";

const Product = React.createContext();

class ProductProvider extends Component {
  state = {
    cartTotal: 0,
    sideCartOPen: false,
    sideBarOpen: false,
    links,
    socialLinks,
    contactInfo,
    items: [],
    filteredItems: [],
    singleProduct: {}
  };
  componentDidMount() {
    //ajax request here
    this.setProducts(items);
  }
  setProducts = products => {
    //formating data for easy reading
    const formatedData = products.map(product => {
      return {
        id: product.sys.id,
        ...product.fields,
        image: product.fields.image.fields.file.url
      };
    });
    this.setState({ items: formatedData, filteredItems: formatedData }, () =>
      console.log(this.state.filteredItems)
    );
  };
  setSingleProduct = id => {
    let product = this.state.items.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({ singleProduct: { ...product } });
    //get singleprod from storage in componentDidMount
  };
  addToCart = id => {
    console.log(id);
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
          closeSideCart: this.closeSideCart,
          setSingleProduct: this.setSingleProduct,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </Product.Provider>
    );
  }
}

export default ProductProvider;

export const ProductConsumer = Product.Consumer;
