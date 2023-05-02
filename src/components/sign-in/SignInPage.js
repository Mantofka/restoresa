import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  loginUserWithGoogle,
} from "../../redux/reducers/user/user.actions";

import {
  selectUserError,
  selectUserAuthentication,
} from "../../redux/reducers/user/user.selectors";

import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import {
  LayoutContainer,
  HeaderText,
  TextContainer,
  PrimaryButton,
  OutlinedButton,
  DescriptionText,
  Bubble,
  ErrorText,
  Form,
} from "../../utils/styles/styles";

import Waiting from "../../images/full.png";
import { Container, InlineWrapper, Image } from "./SignInPage.styles";

import Input from "../input/Input";
import Anchor from "../nav-achor/Anchor";
import { isMobileSize } from "../../utils/ui";

function SignInPage() {
  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const dispatch = useDispatch();
  const screen = useSelector(selectScreen);
  const loginErrors = useSelector(selectUserError);
  const authentication = useSelector(selectUserAuthentication);
  const navigate = useNavigate();
  const handleLogin = () => {
    const formValues = getValues();
    dispatch(loginUser(formValues));
  };

  useEffect(() => {
    if (authentication) {
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authentication]);

  return (
    <LayoutContainer screen={screen}>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"} justify='center'>
            <HeaderText>Welcome Back!</HeaderText>
            <OutlinedButton onClick={() => dispatch(loginUserWithGoogle())}>
              Sign in with Google
            </OutlinedButton>
            <DescriptionText style={{ margin: "0 auto" }}>or</DescriptionText>
            <ErrorText>{loginErrors}</ErrorText>
            <Form screen={screen} onSubmit={handleSubmit(handleLogin)}>
              <Input
                type='text'
                label='Email'
                name='email'
                placeholder='Enter your email'
                onChange={(e) => setValue("email", e.target.value)}
                {...register("email", {
                  required: "Email is required",
                })}
              />
              <ErrorText>{errors.email?.message}</ErrorText>
              <Input
                type='password'
                label='Password'
                placeholder='Enter your password'
                onChange={(e) => setValue("password", e.target.value)}
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <ErrorText>{errors.password?.message}</ErrorText>
              <PrimaryButton type='submit'>Login</PrimaryButton>
            </Form>
            <DescriptionText>
              Still not our member? <Anchor href='/register'>Sign up</Anchor>
            </DescriptionText>
          </TextContainer>

          {!isMobileSize(screen, "lg") ? <Image src={Waiting} /> : null}
        </InlineWrapper>
      </Container>
    </LayoutContainer>
  );
}

export default SignInPage;
