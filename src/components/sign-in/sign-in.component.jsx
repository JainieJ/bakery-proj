import React, { Component } from "react";
import {
  SignInContainer,
  TitleContainer,
  AccountContainer
} from "./sign-in.styles";
import FormInput from "./../form-input/form-input.component";
import { auth } from "./../../firebase/firebase.utils";

class SingIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (e) {
      console.error(e);
    }
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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

export default SingIn;
