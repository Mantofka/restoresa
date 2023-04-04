import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectUserAuthentication,
  selectCurrentUser,
} from "../../redux/reducers/user/user.selectors";

import { selectSelectedFoods } from "../../redux/reducers/reservation/reservation.selectors";

import { openOrderModal } from "../../redux/reducers/ui/ui.actions";

import {
  selectScreen,
  selectIsOrderModalOpen,
} from "../../redux/reducers/ui/ui.selectors";
import { isMobileSize } from "../../utils/ui";
import { useLocation } from "react-router-dom";

import Anchor from "../nav-achor/Anchor";

import {
  Container,
  ProjectTitle,
  CombinedSection,
  Text,
  ProfileIcon,
  OrderContainerButton,
} from "./Header.styles";
import OrderPage from "../order/OrderPage.component";

function Header() {
  const { pathname } = useLocation();
  const isAuthenticated = useSelector(selectUserAuthentication);
  const currentUser = useSelector(selectCurrentUser);
  const screen = useSelector(selectScreen);
  const dispatch = useDispatch();
  const isOrderModalOpen = useSelector(selectIsOrderModalOpen);
  const foods = useSelector(selectSelectedFoods);

  const isAnchorActive = (text) => pathname.includes(text);

  return (
    <>
      <Container screen={screen}>
        <Anchor>
          <ProjectTitle>Restoresa</ProjectTitle>
        </Anchor>

        {!isMobileSize(screen, "md") && (
          <CombinedSection>
            <Anchor href={"/foods"}>
              <Text active={isAnchorActive("/foods")}>Foods</Text>
            </Anchor>
            <Anchor href={"/offers"}>
              <Text active={isAnchorActive("/offers")}>Offers</Text>
            </Anchor>
            <Anchor href={"/restaurants"}>
              <Text active={isAnchorActive("/restaurants")}>Restaurants</Text>
            </Anchor>
          </CombinedSection>
        )}
        <CombinedSection>
          {foods.length > 0 ? (
            <OrderContainerButton
              onClick={() => dispatch(openOrderModal(!isOrderModalOpen))}
            >
              Review Order
            </OrderContainerButton>
          ) : null}
          {isAuthenticated ? (
            <>
              <Anchor href='/me'>
                <ProfileIcon></ProfileIcon>
              </Anchor>
              {!isMobileSize(screen, "lg") && (
                <Text>{currentUser?.displayName}</Text>
              )}
            </>
          ) : (
            <Anchor href='/sign-in'>
              <Text active={isAnchorActive("/sign-in")}>Sign in</Text>
            </Anchor>
          )}
        </CombinedSection>
      </Container>
      <OrderPage />
    </>
  );
}

export default Header;
