import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route component={DefaultPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
