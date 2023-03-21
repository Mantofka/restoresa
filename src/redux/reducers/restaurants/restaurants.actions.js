import {
  ON_RESTAURANTS_FETCH,
  ON_RESTAURANTS_FETCH_SUCCESS,
  ON_RESTAURANTS_FETCH_FAIL,
  ADD_RESTAURANT,
} from "./restaurants.types";

export const onRestaurantsFetch = () => {
  return {
    type: ON_RESTAURANTS_FETCH,
  };
};

export const addRestaurant = (restaurant) => {
  return {
    type: ADD_RESTAURANT,
    payload: restaurant,
  };
};

export const onRestaurantsFetchFail = (error) => {
  return {
    type: ON_RESTAURANTS_FETCH_FAIL,
    payload: error,
  };
};

export const onRestaurantsFetchSuccess = (restaurants) => {
  return {
    type: ON_RESTAURANTS_FETCH_SUCCESS,
    payload: restaurants,
  };
};

export const handleRestaurantAdd = (restaurants, restaurantToAdd) => {
  if (restaurants.find(({ id }) => id === restaurantToAdd.id)) {
    return restaurants;
  }
  return [...restaurants, restaurantToAdd];
};
