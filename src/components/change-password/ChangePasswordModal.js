import React from "react";
import { useForm } from "react-hook-form";

import {
  ShadowContainer,
  ModalContainer,
  TitleText,
} from "./ChangePasswordModal.styles";

import Input from "../input/Input";
import {
  TextContainer,
  PrimaryButton,
  ErrorText,
  Form,
} from "../../utils/styles/styles";
import OutsideAlerter from "../outside-alerter/OutsideAlerter";

import { openResetPasswordModal } from "../../redux/reducers/ui/ui.actions";
import {
  selectCurrentUser,
  selectChangePassword,
} from "../../redux/reducers/user/user.selectors";

import {
  selectScreen,
  selectIsResetPasswordModalOpen,
} from "../../redux/reducers/ui/ui.selectors";
import { useSelector, useDispatch } from "react-redux";
import { setChangePassword } from "../../redux/reducers/user/user.actions";

function ChangePasswordModal() {
  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const screen = useSelector(selectScreen);
  const isOpened = useSelector(selectIsResetPasswordModalOpen);
  const passwordText = useSelector(selectChangePassword);

  const handleChangePassword = (e) => {
    const { currentPassword, newPassword } = getValues();
    dispatch(setChangePassword({ currentPassword, newPassword }));
  };

  return (
    <>
      {isOpened ? (
        <ShadowContainer>
          <OutsideAlerter
            callback={() => dispatch(openResetPasswordModal(false))}
          >
            <ModalContainer>
              <TitleText>Change Password</TitleText>
              <Form
                inheritWidth
                screen={screen}
                onSubmit={handleSubmit(handleChangePassword)}
              >
                <TextContainer placeGap='10px' style={{ marginBottom: "25px" }}>
                  <Input
                    wrong={!passwordText.isSuccess}
                    type='password'
                    label='Current Password'
                    name='currentPassword'
                    onChange={(e) =>
                      setValue("currentPassword", e.target.value)
                    }
                    {...register("currentPassword", {
                      required: "Current password is required.",
                    })}
                  />
                  <ErrorText>{errors.currentPassword?.message}</ErrorText>
                  <Input
                    type='password'
                    name='newPassword'
                    label='New Password'
                    onChange={(e) => setValue("newPassword", e.target.value)}
                    {...register("newPassword", {
                      required: "New password is required.",
                    })}
                  />
                  <ErrorText>{errors.newPassword?.message}</ErrorText>
                  <Input
                    type='password'
                    name='repeatNewPassword'
                    label='Repeat New Password'
                    onChange={(e) =>
                      setValue("repeatNewPassword", e.target.value)
                    }
                    {...register("repeatNewPassword", {
                      required: "Repeat new password is required.",
                      validate: (val) => {
                        if (watch("newPassword") !== val) {
                          return "Your new passwords do not match";
                        }
                      },
                    })}
                  />
                  <ErrorText>{errors.repeatNewPassword?.message}</ErrorText>
                </TextContainer>
                <PrimaryButton disabled={passwordText.isPending} type='submit'>
                  {passwordText.message || "Change Password"}
                </PrimaryButton>
              </Form>
            </ModalContainer>
          </OutsideAlerter>
        </ShadowContainer>
      ) : null}
    </>
  );
}

export default ChangePasswordModal;
