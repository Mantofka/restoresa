import React, { useEffect, useState } from "react";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";

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

import { useOrders } from "../../utils/orders";

import {
  Container,
  OrderElement,
  ColumnContainer,
  BlandText,
  Wrapper,
  StatusLabel,
} from "./ProfilePage.styles";

import { isMobileSize } from "../../utils/ui";

import { useNavigate } from "react-router-dom";

import { Label } from "../input/Input.styles";

import ChangePasswordModal from "../change-password/ChangePasswordModal";
import ChangePhoneNumberModal from "../change-phone-number/ChangePhoneNumberModal";

function ProfilePage() {
  const screen = useSelector(selectScreen);
  const user = useSelector(selectCurrentUser);
  const orders = useOrders(user.uid);
  const [fetchedOrders, setFetchedOrders] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    orders.then((res) => setFetchedOrders(res));
  }, [orders]);

  return (
    <LayoutContainer screen={screen}>
      <Container>
        <HeaderText style={{ marginBottom: "35px" }}>
          Hello, {user?.fullName?.split(" ")[0]}
        </HeaderText>
        <Wrapper
          screen={screen}
          justify={"center"}
          gap={isMobileSize(screen, "lg") ? "40px" : "100px"}
        >
          <ColumnContainer>
            <TextContainer placeGap={"15px"}>
              <Input
                disabled
                type='text'
                value={user?.fullName}
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
            {fetchedOrders.length > 0 ? (
              <>
                {fetchedOrders.map(
                  ({ date, hour, id, payment: { status } }) => (
                    <OrderElement onClick={() => navigate(`/order/${id}`)}>
                      <InlineWrapper justify={"flex-start"} gap={"20px"}>
                        <TextContainer placeGap={"5px"} justify={"flex-start"}>
                          <BlandText style={{ fontSize: "12px" }}>
                            ORDER NUMBER <StatusLabel>{status}</StatusLabel>
                          </BlandText>
                          <DescriptionText>{id}</DescriptionText>
                        </TextContainer>
                        <TextContainer placeGap={"5px"}>
                          <DescriptionText>
                            {moment(date).format("Do MMM YYYY")}
                          </DescriptionText>
                          <BlandText>
                            {hour.hour}:{hour.minute}0
                          </BlandText>
                        </TextContainer>
                      </InlineWrapper>
                    </OrderElement>
                  )
                )}
              </>
            ) : (
              <BlandText>No current history.</BlandText>
            )}
          </ColumnContainer>
        </Wrapper>
      </Container>
      <ChangePasswordModal />
      <ChangePhoneNumberModal />
    </LayoutContainer>
  );
}

export default ProfilePage;
