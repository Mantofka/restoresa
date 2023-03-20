import { createSelector } from "reselect";

const selectRestaurants = (state) => state.restaurants;

export const selectRestaurantsInRestaurants = createSelector(
  [selectRestaurants],
  (restaurants) => restaurants.restaurants.data
);

export const selectRestaurantsProperty = createSelector(
  [selectRestaurants],
  (restaurants) => restaurants.restaurants
);

export const selectIsLoading = createSelector(
  [selectRestaurants],
  (restaurants) => restaurants.restaurants.pending
);

export const selectRestaurantsError = createSelector(
  [selectRestaurants],
  (restaurants) => restaurants.restaurants.error
);
