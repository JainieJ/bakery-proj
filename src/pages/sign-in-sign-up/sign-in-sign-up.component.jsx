import React from "react";
import { SignInAndSignUpContainer } from "./sign-in-sign-up.styles";
import SingIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SingIn />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
