import React, { Component } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import NavBar from "./components/navbar/navbar.component";
import SideCart from "./components/side-cart/side-cart.component";
import SideMenu from "./components/side-menu/side-menu.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { setUser } from "./redux/user/user.actions";

class App extends Component {
  state = {};
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <NavBar />
        <SideMenu />
        <SideCart />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/signin" exact component={SignInAndSignUpPage} />
          <Route component={DefaultPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
