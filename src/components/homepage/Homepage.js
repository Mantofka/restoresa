import React from "react";

import {
  Container,
  Highlight,
  SmallerText,
  InlineWrapper,
  Image,
} from "./Homepage.styles";

import { useSelector } from "react-redux";
import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import Section from "../section/Section";

import Chef from "../../images/chef.png";
import { isMobileSize } from "../../utils/ui";

import { useNavigate } from "react-router-dom";

import {
  LayoutContainer,
  TextContainer,
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
            {!isMobileSize(screen, "md") ? (
              <PrimaryButton
                type='button'
                onClick={() => navigate("restaurants")}
                style={{ width: "210px" }}
              >
                Browse Restaurants
              </PrimaryButton>
            ) : null}
          </TextContainer>
          <Image src={Chef} />

          {isMobileSize(screen, "md") ? (
            <PrimaryButton
              type='button'
              onClick={() => navigate("restaurants")}
            >
              Browse Restaurants
            </PrimaryButton>
          ) : null}
        </InlineWrapper>

        <Section />
      </Container>
    </LayoutContainer>
  );
}

export default Homepage;
