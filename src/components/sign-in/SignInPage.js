import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import {
  loginToFirebase,
  loginWithGoogleProvider,
} from "../../utils/firebase/user";

import {useDispatch} from 'react-redux';

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
  Form,
} from "../../utils/styles/styles";

import { ReactComponent as SittingWomen } from "../../svgs/sitting.svg";
import { Container } from "./SignInPage.styles";

import Input from "../input/Input";
import Anchor from "../nav-achor/Anchor";

function SignInPage() {
  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const formValues = getValues();
    loginToFirebase(formValues).then((user) => console.log(user));
    dispatch(formValues);
  };

  return (
    <LayoutContainer>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"} justify='center'>
            <HeaderText>Welcome Back!</HeaderText>
            <OutlinedButton onClick={loginWithGoogleProvider}>
              Sign in with Google
            </OutlinedButton>
            <DescriptionText style={{ margin: "0 auto" }}>or</DescriptionText>
            <ErrorText>Email or password is incorrect.</ErrorText>
            <Form onSubmit={handleSubmit(handleLogin)}>
              <Input
                type='text'
                label='Email'
                placeholder='Enter your email'
                onChange={(e) => setValue("email", e.target.value)}
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <ErrorText>{errors.email}</ErrorText>
              <Input
                type='password'
                label='Password'
                placeholder='Enter your password'
                onChange={(e) => setValue("password", e.target.value)}
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <ErrorText>{errors.password}</ErrorText>
              <PrimaryButton>Login</PrimaryButton>
            </Form>
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
