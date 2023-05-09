import React, { useEffect } from "react";

import { Container } from "./RestaurantsList.styles";

import { useSelector } from "react-redux";
import { useRestaurants } from "./RestaurantsList.utils";

import {
  selectRestaurantsError,
  selectIsLoading,
} from "../../../redux/reducers/restaurants/restaurants.selectors";
import { selectScreen } from "../../../redux/reducers/ui/ui.selectors";

import IndividualRestaurant from "../../restaurant/Restaurant";
import Loader from "../../loader/Loader";
import { LayoutContainer } from "../../../utils/styles/styles";

function RestaurantList() {
  const [restaurants, fetchRestaurants] = useRestaurants();
  const isLoading = useSelector(selectIsLoading);
  const screen = useSelector(selectScreen);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (isLoading)
    return (
      <LayoutContainer screen={screen}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Loader />
        </div>
      </LayoutContainer>
    );

  return (
    <Container screen={screen}>
      {restaurants?.data?.map((restaurant) => (
        <IndividualRestaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Container>
  );
}

export default RestaurantList;
