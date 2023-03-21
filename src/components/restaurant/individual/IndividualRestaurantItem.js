import React from "react";

import {
  Container,
  ColumnWrapper,
  Image,
  FoodTitle,
  DescriptionText,
  CostContainer,
  CostText,
} from "./IndividualRestaurantItem.styles";

const IndividualRestaurantItem = ({ food }) => {
  const { imageUrl, title, description, price } = food;

  return (
    <Container>
      <ColumnWrapper>
        <FoodTitle>{title}</FoodTitle>
        <DescriptionText>{description}</DescriptionText>
        <CostContainer>
          <CostText>{price} €</CostText>
        </CostContainer>
      </ColumnWrapper>

      <Image alt='asdmasd' src={imageUrl}/>
    </Container>
  );
};

export default IndividualRestaurantItem;
