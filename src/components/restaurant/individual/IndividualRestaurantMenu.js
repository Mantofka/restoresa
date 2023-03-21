import React, { useEffect, useState } from "react";

import { getFoodByRestaurantID } from "../../../utils/firebase/documents";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { HeaderText } from "../../../utils/styles/styles";

import { selectScreen } from "../../../redux/reducers/ui/ui.selectors";

import { useRestaurant } from "../../restaurants/list/RestaurantList.utils";

import {
  Container,
  CategoryHeaderText,
} from "./IndividualRestaurantMenu.styles";
import { LayoutContainer, DescriptionText } from "../../../utils/styles/styles";

import RestaurantItemList from "./list/RestaurantItemList";

function IndividualRestaurantMenu() {
  const { id } = useParams();
  const [restaurant] = useRestaurant(id);
  const [restaurantFoods, setRestaurantFoods] = useState([]);
  const screen = useSelector(selectScreen);

  useEffect(() => {
    getFoodByRestaurantID(id).then((res) => setRestaurantFoods(res));
    window.scrollTo(0, 0);
  }, []);

  console.log(restaurant);

  return (
    <LayoutContainer screen={screen}>
      <Container>
        <HeaderText>{restaurant.title}</HeaderText>
        <DescriptionText>{restaurant.description}</DescriptionText>
      </Container>

      {restaurantFoods.map(({ type, ...restProps }) => (
        <Container>
          <CategoryHeaderText>{type}</CategoryHeaderText>
          <RestaurantItemList foods={restProps} />
        </Container>
      ))}
    </LayoutContainer>
  );
}

export default IndividualRestaurantMenu;
