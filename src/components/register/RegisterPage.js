import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  LayoutContainer,
  TextContainer,
  HeaderText,
  OutlinedButton,
  DescriptionText,
  PrimaryButton,
  Bubble,
  ErrorText,
  Form,
} from "../../utils/styles/styles";

import { InlineWrapper } from "../sign-in/SignInPage.styles";

import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import {
  registerUser,
  loginUserWithGoogle,
} from "../../redux/reducers/user/user.actions";

import { selectUserAuthentication } from "../../redux/reducers/user/user.selectors";

import { Container } from "./RegisterPage.styles";

import Waiting from "../../images/waiting.png";

import Anchor from "../nav-achor/Anchor";
import Input from "../input/Input";
import { isMobileSize } from "../../utils/ui";

function Register() {
  const navigate = useNavigate();
  const screen = useSelector(selectScreen);
  const authentication = useSelector(selectUserAuthentication);
  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    const formValues = getValues();
    dispatch(registerUser(formValues));
  };

  useEffect(() => {
    if (authentication) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authentication]);

  return (
    <LayoutContainer>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"} justify='center'>
            <HeaderText>Welcome Back!</HeaderText>
            <OutlinedButton onClick={() => dispatch(loginUserWithGoogle())}>
              Sign up with Google
            </OutlinedButton>
            <DescriptionText style={{ margin: "0 auto" }}>or</DescriptionText>
            <Form screen={screen} onSubmit={handleSubmit(handleRegister)}>
              <Input
                type='text'
                label='Full name'
                name='fullName'
                placeholder='Enter your full name'
                onChange={(e) => setValue("fullName", e.target.value)}
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
              <ErrorText>{errors.fullName?.message}</ErrorText>
              <Input
                type='email'
                label='Email'
                placeholder='Enter your email'
                onChange={(e) => setValue("email", e.target.value)}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: "//^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$//i",
                    message: "Invalid Email address",
                  },
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
                  minLength: {
                    value: 8,
                    message: "Password should contain at least 8 characters",
                  },
                })}
              />
              <ErrorText>{errors.password?.message}</ErrorText>
              <Input
                type='password'
                label='Repeat password'
                placeholder='Repeat password'
                onChange={(e) => setValue("repeatPassword", e.target.value)}
                {...register("repeatPassword", {
                  required: "Repeat password is required",
                  minLength: {
                    value: 8,
                    message:
                      "Repeat password should contain at least 8 characters",
                  },
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
              <ErrorText>{errors.repeatPassword?.message}</ErrorText>
              <PrimaryButton type='submit'>Register</PrimaryButton>
            </Form>

            <DescriptionText>
              Not the first time? <Anchor href='/sign-in'>Sign in</Anchor>
            </DescriptionText>
          </TextContainer>
          {!isMobileSize(screen, "lg") ? (
            <Bubble screen={screen}>
              <img
                src={Waiting}
                alt='Waiting women'
                style={{ height: "80%" }}
              />
            </Bubble>
          ) : null}
        </InlineWrapper>
      </Container>
    </LayoutContainer>
  );
}

export default Register;
