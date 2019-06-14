import React, { Component } from "react";
import { links } from "./LinkData";
import { socialLinks } from "./socialLinks";
import { contactInfo } from "./contactInfo";
import { items } from "./productData";

const Product = React.createContext();

class ProductProvider extends Component {
  state = {
    sideCartOPen: false,
    sideBarOpen: false,
    links,
    socialLinks,
    contactInfo,
    items: [],
    filteredItems: [],
    singleProduct: {},
    cartProducts: [],
    totalCartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
    this.setState(
      {
        items: formatedData,
        filteredItems: formatedData,
        singleProduct: this.getSingleProduct(),
        cartProducts: this.getCartProducts()
      },
      () => {
        this.performCalculations();
      }
    );
  };
  setSingleProduct = id => {
    let product = this.state.items.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({ singleProduct: { ...product } });
    //get singleprod from storage in componentDidMount
  };
  getSingleProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  setCartProducts = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cartProducts));
  };
  getCartProducts = () => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  };
  addToCart = id => {
    const { cartProducts } = this.state;
    let updatedCartProducts = [...cartProducts];
    let product = this.state.items.find(item => item.id === id);
    let productInCart = updatedCartProducts.find(
      item => item.id === product.id
    );
    if (productInCart) {
      productInCart.amount++;
      productInCart.total = parseFloat(
        (productInCart.price * productInCart.amount).toFixed(2)
      );
    } else {
      productInCart = { ...product, amount: 1, total: product.price };
      updatedCartProducts.push(productInCart);
    }
    this.setState({ cartProducts: updatedCartProducts }, () => {
      this.performCalculations();
      this.setCartProducts();
      this.openSideCart();
    });
  };
  performCalculations = () => {
    const { cartProducts } = this.state;
    // total items in cart
    const totalAmount = cartProducts.reduce((acc, curr) => {
      acc += curr.amount;
      return acc;
    }, 0);
    //total excluding taxes
    let cartSubTotal = cartProducts.reduce((acc, curr) => {
      acc += curr.total;
      return acc;
    }, 0);
    cartSubTotal = parseFloat(cartSubTotal.toFixed(2));
    //taxes
    const cartTax = parseFloat((cartSubTotal * 0.2).toFixed(2));
    //total including taxes
    let cartTotal = cartSubTotal + cartTax;
    cartTotal = parseFloat(cartTotal.toFixed(2));
    //state update
    this.setState({
      totalCartItems: totalAmount,
      cartSubTotal,
      cartTax,
      cartTotal
    });
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
  openSideCart = () => {
    this.setState({ sideCartOPen: true });
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
