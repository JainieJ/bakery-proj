import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <HomePage />
      <DefaultPage />
      <AboutPage />
      <ProductsPage />
      <SingleProductPage />
      <ContactPage />
      <CartPage />
    </>
  );
}

export default App;
