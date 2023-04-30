import React from "react";

import {
  Wrapper,
  ImageContainer,
  AmountContainer,
  PriceContainer,
  ItemTitle,
  ItemDescription,
  Price,
  Amount,
  Column,
  Image,
  GridWrapper,
} from "./IndividualOrderItem.styles";

import { InlineWrapper } from "../../utils/styles/styles";

import { useScreen } from "../../utils/ui/useScreen";

import { TextContainer, FoodTitle } from "../../utils/styles/styles";

const IndividualOrderItem = ({ item }) => {
  const { title, quantity, price, imageUrl, description } = item;
  const screen = useScreen();

  return (
    <Wrapper screen={screen}>
      <Image src={imageUrl} />

      <TextContainer>
        <Column>
          <ItemTitle>{title}</ItemTitle>
          <ItemDescription>
            {description?.length > 50
              ? `${description?.slice(0, 50)}...`
              : description}
          </ItemDescription>
        </Column>
      </TextContainer>
      <GridWrapper>
        <Price>
          {price} € x {quantity}
        </Price>
        <PriceContainer>{price * quantity} €</PriceContainer>
      </GridWrapper>
    </Wrapper>
  );
};

export default IndividualOrderItem;
