import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

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

import {
  openResetPasswordModal,
  setAlertModalOpened,
} from "../../redux/reducers/ui/ui.actions";
import { selectChangePassword } from "../../redux/reducers/user/user.selectors";

import {
  selectScreen,
  selectIsResetPasswordModalOpen,
} from "../../redux/reducers/ui/ui.selectors";
import { useSelector, useDispatch } from "react-redux";
import {
  setChangePassword,
  clearPassword,
} from "../../redux/reducers/user/user.actions";
import JSAlert from "js-alert";

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
  const { message, isSuccess, isPending } = useSelector(selectChangePassword);

  const handleChangePassword = (e) => {
    const { currentPassword, newPassword } = getValues();
    dispatch(setChangePassword({ currentPassword, newPassword }));
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      dispatch(setAlertModalOpened(true));
      JSAlert.alert(message).then(() => {
        dispatch(clearPassword());
        setValue("currentPassword", "");
        setValue("newPassword", "");
        setValue("repeatNewPassword", "");
        dispatch(setAlertModalOpened(false));
      });
    } else if (!isPending && isSuccess === false) {
      dispatch(setAlertModalOpened(true));
      JSAlert.alert(message).then(() => {
        dispatch(clearPassword());
        setValue("newPassword", "");
        setValue("repeatNewPassword", "");
        setTimeout(() => {
          dispatch(setAlertModalOpened(false));
        }, 100);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isPending]);

  useEffect(() => {
    if (isOpened) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpened]);

  useEffect(() => {
    return () => {
      dispatch(clearPassword());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onModalClose = () => {
    dispatch(openResetPasswordModal(false));
    dispatch(clearPassword());
  };

  return (
    <AnimatePresence>
      {isOpened ? (
        <ShadowContainer>
          <OutsideAlerter callback={() => onModalClose()}>
            <ModalContainer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <TitleText>Change Password</TitleText>
              <Form
                inheritWidth
                screen={screen}
                onSubmit={handleSubmit(handleChangePassword)}
              >
                <TextContainer placeGap='10px' style={{ marginBottom: "25px" }}>
                  <Input
                    wrong={isSuccess === false}
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
                <PrimaryButton disabled={isPending} type='submit'>
                  {message || "Change Password"}
                </PrimaryButton>
              </Form>
            </ModalContainer>
          </OutsideAlerter>
        </ShadowContainer>
      ) : null}
    </AnimatePresence>
  );
}

export default ChangePasswordModal;
