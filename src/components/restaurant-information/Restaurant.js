import React from "react";
import {
  ElementContainer,
  SectionTitle,
  TextContainer,
  InformingText,
  DescriptionText,
  FoodTitle,
} from "../../utils/styles/styles";
import { Image, Wrapper } from "./Restaurant.styles";
import { isMobileSize } from "../../utils/ui";
import { useScreen } from "../../utils/ui/useScreen";
import Loader from "../loader/Loader";

function Restaurant({ restaurant, reservationData }) {
  const screen = useScreen();
  const { seats, date, hour } = reservationData;
  return (
    <div
      style={!isMobileSize(screen, "md") ? { flex: 0.6 } : { width: "100%" }}
    >
      <SectionTitle style={{ marginBottom: "10px" }}>
        Restaurant information
      </SectionTitle>
      <ElementContainer>
        {restaurant ? (
          <>
            <Wrapper gap={"15px"}>
              <Image src={restaurant.imageUrl} />
              <TextContainer justify={"space-between"}>
                <FoodTitle>{restaurant.title}</FoodTitle>
                <DescriptionText>{restaurant.description}</DescriptionText>
              </TextContainer>
            </Wrapper>
            <Wrapper gap={"15px"}>
              <TextContainer placeGap={"10px"} justify={"space-between"}>
                <InformingText>Seats</InformingText>
                <DescriptionText>{seats}</DescriptionText>
              </TextContainer>
              <TextContainer placeGap={"10px"} justify={"space-between"}>
                <InformingText>Date</InformingText>
                <DescriptionText>{date}</DescriptionText>
              </TextContainer>
              <TextContainer placeGap={"10px"} justify={"space-between"}>
                <InformingText>Time</InformingText>
                <DescriptionText>
                  {hour.hour}:{hour.minute}0
                </DescriptionText>
              </TextContainer>
            </Wrapper>
          </>
        ) : (
          <Loader />
        )}
      </ElementContainer>
    </div>
  );
}

export default Restaurant;
