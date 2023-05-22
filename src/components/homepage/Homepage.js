import React from "react";

import Config from "../../config";
import { IKImage } from "imagekitio-react";

import {
  Container,
  Highlight,
  SmallerText,
  InlineWrapper,
} from "./Homepage.styles";

import { useSelector } from "react-redux";
import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import Section from "../section/Section";

import { isMobileSize } from "../../utils/ui";

import { updateTableBusyness } from "../../utils/firebase/tables";

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
                whileHover={{ scale: 1.02 }}
              >
                Browse Restaurants
              </PrimaryButton>
            ) : null}
          </TextContainer>
          <IKImage
            urlEndpoint={Config.ImageKitEndpoint}
            path='homepage/chef.png'
            lqip={{ active: true }}
            loading='lazy'
            transformation={[{ height: 550, width: 505 }]}
            width={"50%"}
          />

          {isMobileSize(screen, "md") ? (
            <PrimaryButton
              whileHover={{ scale: 1.1 }}
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
