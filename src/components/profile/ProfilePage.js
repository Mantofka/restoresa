import React from "react";

import {
  LayoutContainer,
  HeaderText,
  TextContainer,
  InlineWrapper,
  DescriptionText,
} from "../../utils/styles/styles";
import { selectScreen } from "../../redux/reducers/ui/ui.selectors";
import { useSelector, useDispatch } from "react-redux";
import Input from "../input/Input";

import {
  openResetPasswordModal,
  openChangeNumberModal,
} from "../../redux/reducers/ui/ui.actions";

import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

import {
  Container,
  OrderElement,
  ColumnContainer,
  BlandText,
  Wrapper,
} from "./ProfilePage.styles";

import { isMobileSize } from "../../utils/ui";

import { Label } from "../input/Input.styles";

import ChangePasswordModal from "../change-password/ChangePasswordModal";
import ChangePhoneNumberModal from "../change-phone-number/ChangePhoneNumberModal";

function ProfilePage() {
  const screen = useSelector(selectScreen);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <LayoutContainer screen={screen}>
      <Container>
        <HeaderText style={{ marginBottom: "35px" }}>Hello, Virgis</HeaderText>
        <Wrapper
          screen={screen}
          justify={"center"}
          style={{ alignItems: "flex-start" }}
          gap={isMobileSize(screen, "lg") ? "40px" : "100px"}
        >
          <ColumnContainer>
            <TextContainer placeGap={"15px"}>
              <Input
                disabled
                type='text'
                value={user?.displayName}
                label='Full name'
                name='fullName'
              />
              <Input
                disabled
                type='text'
                value={user?.email}
                label='Email'
                name='email'
              />
              <Input
                disabled
                value={"123456789"}
                type='password'
                label='Password'
                name='password'
                changeField={"Change Password"}
                onChangeFieldClick={() =>
                  dispatch(openResetPasswordModal(true))
                }
              />
              <Input
                disabled
                type='text'
                value={user?.phoneNumber}
                label='Phone Number'
                name='phoneNumber'
                changeField={"Change Number"}
                onChangeFieldClick={() => dispatch(openChangeNumberModal(true))}
              />
            </TextContainer>
          </ColumnContainer>
          <ColumnContainer>
            <TextContainer>
              <Label>Orders history</Label>
            </TextContainer>
            {[1, 2, 3].map((element) => (
              <OrderElement>
                <InlineWrapper>
                  <TextContainer placeGap={"5px"}>
                    <BlandText style={{ fontSize: "12px" }}>
                      ORDER NUMBER
                    </BlandText>
                    <DescriptionText>#26262624</DescriptionText>
                  </TextContainer>
                  <TextContainer placeGap={"5px"}>
                    <DescriptionText>29. Mar. 2023</DescriptionText>
                    <BlandText>15:31</BlandText>
                  </TextContainer>
                </InlineWrapper>
              </OrderElement>
            ))}
          </ColumnContainer>
        </Wrapper>
      </Container>

      <ChangePasswordModal />
      <ChangePhoneNumberModal />
    </LayoutContainer>
  );
}

export default ProfilePage;
