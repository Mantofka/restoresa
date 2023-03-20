import React from "react";

import { Container, RightSideContainer, LeftSideContainer, Image, FoodTitle, DescriptionText, CostContainer, CostText } from "./IndividualRestaurantItem.styles";

const IndividualRestaurantItem = (item) => {
  const {imageUrl, title, description, cost} = item;

  return (
    <Container>
        <RightSideContainer>
            <Image alt='asdmasd' src="https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </RightSideContainer>
        <LeftSideContainer>
            <FoodTitle>Hermanos Laboratories INC</FoodTitle>
            <DescriptionText>
                Traškus ir sultingas, trumuose marinuoto kukurūzinio viščiuko krūtinėlės burgeris su namuose gamintu Harrisa raudonuoju majonezu..
            </DescriptionText>
            <CostContainer>
                <CostText>16,45 €</CostText>
            </CostContainer>
        </LeftSideContainer>
    </Container>
  );
};

export default IndividualRestaurantItem;