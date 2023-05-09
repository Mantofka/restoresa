import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  ShadowContainer,
  ModalContainer,
  TitleText,
} from "./ChangePhoneNumberModal.styles";

import JSAlert from "js-alert";

import Input from "../input/Input";
import {
  TextContainer,
  PrimaryButton,
  ErrorText,
  Form,
} from "../../utils/styles/styles";
import OutsideAlerter from "../outside-alerter/OutsideAlerter";

import {
  openChangeNumberModal,
  setAlertModalOpened,
} from "../../redux/reducers/ui/ui.actions";
import {
  selectCurrentUser,
  selectChangePhoneNumber,
} from "../../redux/reducers/user/user.selectors";

import {
  selectScreen,
  selectIsChangePhoneNumberModalOpen,
} from "../../redux/reducers/ui/ui.selectors";
import { useSelector, useDispatch } from "react-redux";
import {
  setChangePhoneNumber,
  clearPhoneNumber,
} from "../../redux/reducers/user/user.actions";
import { AnimatePresence } from "framer-motion";

function ChangePhoneNumberModal() {
  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const dispatch = useDispatch();

  const screen = useSelector(selectScreen);
  const isOpened = useSelector(selectIsChangePhoneNumberModalOpen);
  const user = useSelector(selectCurrentUser);
  const { message, isSuccess, isPending } = useSelector(
    selectChangePhoneNumber
  );

  const handleChangeNumber = (e) => {
    const { newPhoneNumber } = getValues();
    dispatch(setChangePhoneNumber(newPhoneNumber));
  };

  useEffect(() => {
    if (isOpened) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpened]);

  useEffect(() => {
    if (!isPending && isSuccess) {
      dispatch(setAlertModalOpened(true));
      JSAlert.alert(message).then(() => {
        dispatch(clearPhoneNumber());
        setValue("newPhoneNumber", "");
        dispatch(setAlertModalOpened(false));
      });
    } else if (!isPending && isSuccess === false) {
      dispatch(setAlertModalOpened(true));
      JSAlert.alert(message).then(() => {
        dispatch(clearPhoneNumber());
        setValue("newPhoneNumber", "");
        setTimeout(() => {
          dispatch(setAlertModalOpened(false));
        }, 100);
      });
    }
  }, [isSuccess, isPending]);

  return (
    <AnimatePresence>
      {isOpened ? (
        <ShadowContainer>
          <OutsideAlerter
            callback={() => dispatch(openChangeNumberModal(false))}
          >
            <ModalContainer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <TitleText>Change Phone number</TitleText>
              <Form
                inheritWidth
                screen={screen}
                onSubmit={handleSubmit(handleChangeNumber)}
              >
                <TextContainer placeGap='10px' style={{ marginBottom: "25px" }}>
                  <Input
                    type='text'
                    label='Current Phone number'
                    name='currentPhoneNumber'
                    disabled
                    value={user?.phoneNumber || "No number specified."}
                  />
                  <Input
                    type='text'
                    name='newPhoneNumber'
                    label='New Phone Number'
                    onChange={(e) => setValue("newPhoneNumber", e.target.value)}
                    {...register("newPhoneNumber", {
                      required: "New Phone number should be specified.",
                    })}
                  />
                  <ErrorText>{errors.newPhoneNumber?.message}</ErrorText>
                </TextContainer>
                <PrimaryButton type='submit'>Change Phone number</PrimaryButton>
              </Form>
            </ModalContainer>
          </OutsideAlerter>
        </ShadowContainer>
      ) : null}
    </AnimatePresence>
  );
}

export default ChangePhoneNumberModal;
