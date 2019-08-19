import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import NavBar from "./components/navbar/navbar.component";
import SideCart from "./components/side-cart/side-cart.component";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route component={DefaultPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
