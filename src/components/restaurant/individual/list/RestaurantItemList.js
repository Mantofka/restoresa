import React from "react";

import { useSelector } from "react-redux";

import { selectScreen } from "../../../../redux/reducers/ui/ui.selectors";

import { Container } from "./RestaurantItemList.styles";

import IndividualRestaurantItem from "../IndividualRestaurantItem";

function RestaurantItemList({ foods }) {
  const screen = useSelector(selectScreen);
  return (
    <Container screen={screen}>
      {foods.foods.map((food) => (
        <IndividualRestaurantItem food={food} />
      ))}
    </Container>
  );
}

export default RestaurantItemList;
