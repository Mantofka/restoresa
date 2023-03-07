import React from "react";

import {
  LayoutContainer,
  InlineWrapper,
  HeaderText,
  TextContainer,
  PrimaryButton,
  OutlinedButton,
  DescriptionText,
  Bubble,
} from "../../utils/styles/styles";

import { ReactComponent as SittingWomen } from "../../svgs/sitting.svg";
import { Container } from "./SignInPage.styles";

import Input from "../input/Input";
import Anchor from "../nav-achor/Anchor";

function SignInPage() {
  return (
    <LayoutContainer>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"} justify='center'>
            <HeaderText>Welcome Back!</HeaderText>
            <OutlinedButton>Sign in with Google</OutlinedButton>
            <DescriptionText style={{ margin: "0 auto" }}>or</DescriptionText>
            <Input label='Email' placeholder='Enter your email' />
            <Input label='Password' placeholder='Enter your password' />
            <PrimaryButton>Login</PrimaryButton>
            <DescriptionText>
              Still not our member? <Anchor href="/register">Sign up</Anchor>
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
