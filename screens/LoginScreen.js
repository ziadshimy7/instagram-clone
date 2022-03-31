import React from "react";
import SignInForm from "../components/sign-in/SignInForm";
import Wrapper from "../components/wrapper/Wrapper";

const LoginScreen = () => {
  return (
    <>
      <SignInForm />
    </>
  );
};

export default Wrapper(LoginScreen);
