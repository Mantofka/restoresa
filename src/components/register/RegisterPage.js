import React, { useEffect, useState } from "react";

import { registerToFirebase } from "../../utils/firebase/user";

import {
  LayoutContainer,
  InlineWrapper,
  TextContainer,
  HeaderText,
  OutlinedButton,
  DescriptionText,
  PrimaryButton,
  Bubble,
  ErrorText,
} from "../../utils/styles/styles";

import { Container } from "./RegisterPage.styles";

import { ReactComponent as SittingWomen } from "../../svgs/sitting.svg";

import Anchor from "../nav-achor/Anchor";
import Input from "../input/Input";

function Register() {
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    password: "",
    fullName: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e, name) => {
    const { value } = e.target;

    setRegisterInformation((prevState) => ({
      ...prevState,
      [`${name}`]: value,
    }));
  };

  const validateInputs = () => {
    const { fullName, email, password, repeatPassword } = registerInformation;
    setErrors({});
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fullName.length === 0 && fullName.split(" ").length < 2) {
      setErrors((prevState) => ({
        ...prevState,
        fullName: "Full name is required to enter.",
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
    if (password.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password is required.",
      }));
    }
    if (repeatPassword.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        repeatPassword: "Repeated password is required.",
      }));
    } else if (repeatPassword !== password) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password should match.",
      }));
    }
    if (Object.keys(errors).length > 0) return false;
    return true;
  };

  const handleRegister = () => {
    if (validateInputs() === true) {
      registerToFirebase(registerInformation);
    }
  };

  return (
    <LayoutContainer>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"} justify='center'>
            <HeaderText>Welcome Back!</HeaderText>
            <OutlinedButton>Sign up with Google</OutlinedButton>
            <DescriptionText style={{ margin: "0 auto" }}>or</DescriptionText>
            <Input
              value={registerInformation.fullName}
              type='text'
              label='Full name'
              placeholder='Enter your full name'
              onChange={(e) => onChange(e, "fullName")}
            />
            <ErrorText>{errors.fullName}</ErrorText>
            <Input
              type='email'
              label='Email'
              placeholder='Enter your email'
              onChange={(e) => onChange(e, "email")}
            />
            <ErrorText>{errors.email}</ErrorText>
            <Input
              type='password'
              label='Password'
              placeholder='Enter your password'
              onChange={(e) => onChange(e, "password")}
            />
            <ErrorText>{errors.password}</ErrorText>
            <Input
              type='password'
              label='Repeat password'
              placeholder='Repeat password'
              onChange={(e) => onChange(e, "repeatPassword")}
            />
            <ErrorText>{errors.repeatPassword}</ErrorText>
            <PrimaryButton type='submit' onClick={handleRegister}>
              Register
            </PrimaryButton>
            <DescriptionText>
              Not the first time? <Anchor href='/sign-in'>Sign in</Anchor>
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

export default Register;
