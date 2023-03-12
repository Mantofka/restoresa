import React, { useState } from "react";

import { loginToFirebase } from "../../utils/firebase/user";

import {
  LayoutContainer,
  InlineWrapper,
  HeaderText,
  TextContainer,
  PrimaryButton,
  OutlinedButton,
  DescriptionText,
  Bubble,
  ErrorText,
} from "../../utils/styles/styles";

import { ReactComponent as SittingWomen } from "../../svgs/sitting.svg";
import { Container } from "./SignInPage.styles";

import Input from "../input/Input";
import Anchor from "../nav-achor/Anchor";

function SignInPage() {
  const [loginInformation, setLoginInformation] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e, name) => {
    const { value } = e.target;

    setLoginInformation((prevState) => ({ ...prevState, [`${name}`]: value }));
  };

  const validateInputs = () => {
    const { email, password } = loginInformation;
    setErrors({});
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (password.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password is required.",
      }));
    }
    if (email.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is required.",
      }));
    } else if (!email.match(mailformat)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email doesn't meet pattern.",
      }));
    }
    if (Object.keys(errors).length > 0) return false;
    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      loginToFirebase(loginInformation).then((user) => console.log(user));
    }
  };

  return (
    <LayoutContainer>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"} justify='center'>
            <HeaderText>Welcome Back!</HeaderText>
            <OutlinedButton>Sign in with Google</OutlinedButton>
            <DescriptionText style={{ margin: "0 auto" }}>or</DescriptionText>
            <Input
              type='text'
              label='Email'
              onChange={(e) => onChange(e, "email")}
              placeholder='Enter your email'
            />
            <ErrorText>{errors.email}</ErrorText>
            <Input
              type='password'
              label='Password'
              onChange={(e) => onChange(e, "password")}
              placeholder='Enter your password'
            />
            <ErrorText>{errors.password}</ErrorText>
            <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
            <DescriptionText>
              Still not our member? <Anchor href='/register'>Sign up</Anchor>
            </DescriptionText>
          </TextContainer>
          <Bubble>
            <SittingWomen />
          </Bubble>
        </InlineWrapper>
      </Container>
    </LayoutContainer>
  );
}

export default SignInPage;
