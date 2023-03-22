import React from "react";
import { HeaderText, LayoutContainer } from "../../utils/styles/styles";

import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import { useSelector } from "react-redux";

import { Container } from "./RestaurantsPage.styles";

import RestaurantList from "./list/RestaurantsList";

function RestaurantsPage() {
  const screen = useSelector(selectScreen);
  return (
    <LayoutContainer screen={screen}>
      <Container>
        <HeaderText>Visi restoranai</HeaderText>
        <RestaurantList />
      </Container>
    </LayoutContainer>
  );
}

export default RestaurantsPage;
