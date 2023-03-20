import React, { useEffect } from "react";

import { Container } from "./RestaurantList.styles";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useRestaurants } from "./RestaurantList.utils";

import {
  selectRestaurantsError,
  selectIsLoading,
  selectRestaurantsProperty,
} from "../../../redux/reducers/restaurants/restaurants.selectors";
import { selectScreen } from "../../../redux/reducers/ui/ui.selectors";

import IndividualRestaurant from "../../restaurant/Restaurant";
import Loader from "../../loader/Loader";

function RestaurantList() {
  const [restaurants, fetchRestaurants] = useRestaurants();
  // const restaurants = useSelector(selectRestaurantsInRestaurants);
  const isLoading = useSelector(selectIsLoading);
  const errors = useSelector(selectRestaurantsError);
  const screen = useSelector(selectScreen);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Container screen={screen}>
      {restaurants?.data?.map((restaurant) => (
        <IndividualRestaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Container>
  );
}

export default RestaurantList;
