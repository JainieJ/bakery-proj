import React from "react";
import SingIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {
  SignInAndSignUpContainer,
  FormContainer
} from "./sign-in-sign-up.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <FormContainer>
        <SingIn />
        <SignUp />
      </FormContainer>
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
