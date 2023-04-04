import React from "react";
import { useForm } from "react-hook-form";

import {
  ShadowContainer,
  ModalContainer,
  TitleText,
} from "./ChangePhoneNumberModal.styles";

import Input from "../input/Input";
import {
  TextContainer,
  PrimaryButton,
  ErrorText,
  Form,
} from "../../utils/styles/styles";
import OutsideAlerter from "../outside-alerter/OutsideAlerter";

import { openChangeNumberModal } from "../../redux/reducers/ui/ui.actions";
import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

import {
  selectScreen,
  selectIsChangePhoneNumberModalOpen,
} from "../../redux/reducers/ui/ui.selectors";
import { useSelector, useDispatch } from "react-redux";
import { changeUserPhoneNumber } from "../../utils/firebase/user";

function ChangePhoneNumberModal() {
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
  const isOpened = useSelector(selectIsChangePhoneNumberModalOpen);
  const user = useSelector(selectCurrentUser);

  const handleChangeNumber = (e) => {
    const { newPhoneNumber } = getValues();
    changeUserPhoneNumber(newPhoneNumber);
  };

  return (
    <>
      {isOpened ? (
        <ShadowContainer>
          <OutsideAlerter
            callback={() => dispatch(openChangeNumberModal(false))}
          >
            <ModalContainer>
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
                    name='currentPassword'
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
    </>
  );
}

export default ChangePhoneNumberModal;
