import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../../redux/user/user.actions";
import FormInput from "./../form-input/form-input.component";
import {
  auth,
  createUserProfileDocument
} from "./../../firebase/firebase.utils";
import {
  SignUpContainer,
  AccountContainer,
  TitleContainer
} from "./sign-up.styles";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { history, setUser } = this.props;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const loggedInUser = await createUserProfileDocument(user, {
        displayName
      });
      this.setState(
        {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        },
        () => {
          setUser(loggedInUser);
          history.push("/");
        }
      );
    } catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      switch (errorCode) {
        case "auth/email-already-in-use":
          alert("The account with the given email address already exists");
          break;
        case "auth/weak-password":
          alert(errorMessage);
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
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <AccountContainer>I do not have an account</AccountContainer>
        <TitleContainer>Sign up with your email and password</TitleContainer>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display name"
            placeholder="Display name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            placeholder="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            placeholder="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            placeholder="Confirm Password"
            handleChange={this.handleChange}
            required
          />
          <button type="submit" className="main-link">
            Sign Up
          </button>
        </form>
      </SignUpContainer>
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
  )(SignUp)
);
