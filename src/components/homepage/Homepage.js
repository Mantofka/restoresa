import React from "react";

import { Container, Highlight, SmallerText } from "./Homepage.styles";

import {
  LayoutContainer,
  InlineWrapper,
  TextContainer,
  Bubble,
  PickupText,
} from "../../utils/styles/styles";

import { ReactComponent as DeliveryBike } from "../../svgs/sitting.svg";

function Homepage() {
  return (
    <LayoutContainer>
      <Container>
        <InlineWrapper>
          <TextContainer placeGap={"10px"}>
            <PickupText>
              Drink, Food & <Highlight>Enjoy </Highlight>With{" "}
              <Highlight>Your family</Highlight>
            </PickupText>
            <SmallerText width={"30ch"}>
              Food tastes better when you eat it with your family and friends
            </SmallerText>
          </TextContainer>

          <Bubble>
            <DeliveryBike />
          </Bubble>
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
        </InlineWrapper>
      </Container>
    </LayoutContainer>
  );
}

export default Homepage;
