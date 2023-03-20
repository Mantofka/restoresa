import {
  ON_RESTAURANTS_FETCH,
  ON_RESTAURANTS_FETCH_SUCCESS,
  ON_RESTAURANTS_FETCH_FAIL,
} from "./restaurants.types";

export const onRestaurantsFetch = () => {
  return {
    type: ON_RESTAURANTS_FETCH,
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
