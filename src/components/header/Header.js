import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

import { signOutUser } from "../../utils/firebase/user";

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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 300);
  }, [foods]);

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
            <Anchor href={"/restaurants"}>
              <Text active={isAnchorActive("/restaurants")}>Restaurants</Text>
            </Anchor>
          </CombinedSection>
        )}
        <CombinedSection>
          {!isMobileSize(screen, "md") ? (
            <>
              {foods.length > 0 ? (
                <div style={{ width: "160px" }}>
                  <OrderContainerButton
                    animate={
                      animate
                        ? {
                            width: [150, 160, 150],
                            transition: { duration: 0.4 },
                          }
                        : { width: 150 }
                    }
                    onClick={() => dispatch(openOrderModal(!isOrderModalOpen))}
                  >
                    Review Order
                  </OrderContainerButton>
                </div>
              ) : null}
            </>
          ) : (
            <>
              {foods.length > 0 ? (
                <ShoppingCartIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(openOrderModal(!isOrderModalOpen))}
                />
              ) : null}{" "}
            </>
          )}

          {isAuthenticated ? (
            <>
              <Anchor href='/me'>
                <ProfileIcon></ProfileIcon>
              </Anchor>
              <Anchor href='/'>
                <Text
                  style={{ cursor: "pointer" }}
                  onClick={() => signOutUser(dispatch)}
                >
                  Logout
                </Text>
              </Anchor>
            </>
          ) : (
            <Anchor href='/sign-in'>
              <Text active={isAnchorActive("/sign-in")}>Sign in</Text>
            </Anchor>
          )}
        </CombinedSection>
      </Container>
      <OrderPage key={"order15874"} />
    </>
  );
}

export default Header;
