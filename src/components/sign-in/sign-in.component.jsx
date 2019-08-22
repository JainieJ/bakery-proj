import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  SignInContainer,
  TitleContainer,
  AccountContainer
} from "./sign-in.styles";
import FormInput from "./../form-input/form-input.component";
import { auth, firestore } from "./../../firebase/firebase.utils";
import { connect } from "react-redux";
import { setUser } from "./../../redux/user/user.actions";

class SingIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { setUser } = this.props;
    try {
      const {
        user: { uid }
      } = await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" }, async () => {
        setUser(await this.getLoggedInUser(uid));
        this.props.history.push("/");
      });
    } catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      switch (errorCode) {
        case "auth/user-not-found":
          alert("User with this email was not found");
          break;
        case "auth/wrong-password":
          alert("You entered a wrong password");
          break;
        default:
          console.log(errorMessage);
      }
      console.log(e);
    }
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getLoggedInUser = async id => {
    try {
      const userRef = firestore.doc(`users/${id}`);
      const snapShot = await userRef.get();
      return snapShot.data();
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <AccountContainer>I already have an account</AccountContainer>
        <TitleContainer>Sign in with your email and password</TitleContainer>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="email"
            placeholder="Email address"
          />
          <FormInput
            type="password"
            name="password"
            id="password"
            value={password}
            required
            handleChange={this.handleChange}
            label="password"
            placeholder="Password"
          />
          <button type="submit" className="main-link">
            Sign In
          </button>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SingIn)
);
