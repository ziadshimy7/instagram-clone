import React from "react";
import SignupForm from "../components/sign-up/SignupForm";
import Wrapper from "../components/wrapper/Wrapper";

const SignupScreen = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Wrapper(SignupScreen);
