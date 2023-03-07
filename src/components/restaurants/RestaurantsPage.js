import React from "react";
import {
  darkColor,
  HeaderText,
  LayoutContainer,
} from "../../utils/styles/styles";

import { Container } from "./RestaurantPage.styles";

import RestaurantList from "./list/RestaurantList";

function RestaurantsPage() {
  return (
    <LayoutContainer>
      <Container>
        <HeaderText>Visi restoranai</HeaderText>
        <RestaurantList />
      </Container>
    </LayoutContainer>
  );
}

export default RestaurantsPage;
