import React from "react";

import {
  LayoutContainer,
  InlineWrapper,
  TextContainer,
  HeaderText,
  OutlinedButton,
  DescriptionText,
  PrimaryButton,
  Bubble,
} from "../../utils/styles/styles";

import { Container } from "./RegisterPage.styles";

import { ReactComponent as SittingWomen } from "../../svgs/sitting.svg";

import Anchor from "../nav-achor/Anchor";
import Input from "../input/Input";

function Register() {
  return (
    <LayoutContainer>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"} justify='center'>
            <HeaderText>Welcome Back!</HeaderText>
            <OutlinedButton>Sign up with Google</OutlinedButton>
            <DescriptionText style={{ margin: "0 auto" }}>or</DescriptionText>
            <Input label='Full name' placeholder='Enter your full name' />
            <Input label='Email' placeholder='Enter your email' />
            <Input label='Password' placeholder='Enter your password' />
            <Input label='Repeat password' placeholder='Repeat password' />
            <PrimaryButton>Register</PrimaryButton>
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
