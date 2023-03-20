import React from "react"

import {
    HeaderText,
  } from "../../../utils/styles/styles";

import { Container, LayoutContainer, CategoryHeaderText } from "./IndividualRestaurantMenu.styles";
import { DescriptionText } from "../../../utils/styles/styles";

import RestaurantItemList from "./list/RestaurantItemList";

function IndividualRestaurantMenu() {
    return (
        <LayoutContainer>
            <Container>
                <HeaderText>Baking Mad Hidden Lab</HeaderText>
                <DescriptionText>Turbūt įspūdingiausi burgeriai mieste</DescriptionText>                
            </Container>

            <Container>
                <CategoryHeaderText>Burgeriai</CategoryHeaderText>
                <RestaurantItemList />              
            </Container>

            <Container>
                <CategoryHeaderText>Sharing is Caring</CategoryHeaderText>
                <RestaurantItemList />
            </Container>
        </LayoutContainer>

    );
}

export default IndividualRestaurantMenu