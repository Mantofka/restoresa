import React from "react";

import {
  Container,
  Highlight,
  SmallerText,
  InlineWrapper,
} from "./Homepage.styles";

import { useSelector } from "react-redux";
import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import Waiting from "../../images/waiting.png";
import { isMobileSize } from "../../utils/ui";

import { useNavigate } from "react-router-dom";

import {
  LayoutContainer,
  TextContainer,
  Bubble,
  PickupText,
  PrimaryButton,
} from "../../utils/styles/styles";

function Homepage() {
  const screen = useSelector(selectScreen);
  const navigate = useNavigate();

  return (
    <LayoutContainer screen={screen}>
      <Container screen={screen}>
        <InlineWrapper>
          <TextContainer placeGap={"10px"}>
            <PickupText screen={screen}>
              Drink, Food & <Highlight>Enjoy </Highlight>With{" "}
              <Highlight>Your family</Highlight>
            </PickupText>
            <SmallerText
              width={!isMobileSize(screen, "md") ? "30ch" : "inherit"}
            >
              Food tastes better when you eat it with your family and friends
            </SmallerText>
          </TextContainer>

          <Bubble screen={screen}>
            <img src={Waiting} alt='Waiting women' style={{ height: "80%" }} />
          </Bubble>
          {!isMobileSize(screen, "lg") ? (
            <TextContainer placeGap={"20px"}>
              <TextContainer placeGap={"5px"}>
                <SmallerText fontWeight={"600"}>
                  <Highlight>Pick </Highlight>a restaurant
                </SmallerText>
                <SmallerText fontWeight={"600"}>
                  <Highlight>Make </Highlight>a reservation
                </SmallerText>
                <SmallerText fontWeight={"600"}>
                  <Highlight>Order </Highlight>a food
                </SmallerText>
                <SmallerText fontWeight={"600"}>
                  <Highlight>Make </Highlight>an appointment
                </SmallerText>
              </TextContainer>
            </TextContainer>
          ) : null}
          {isMobileSize(screen, "md") ? (
            <PrimaryButton onClick={() => navigate("restaurants")}>
              Browse Restaurants
            </PrimaryButton>
          ) : null}
        </InlineWrapper>
        {!isMobileSize(screen, "md") ? (
          <PrimaryButton
            onClick={() => navigate("restaurants")}
            style={{ width: "210px" }}
          >
            Browse Restaurants
          </PrimaryButton>
        ) : null}
      </Container>
    </LayoutContainer>
  );
}

export default Homepage;
