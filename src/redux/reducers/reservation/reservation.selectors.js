import { createSelector } from "reselect";

const selectReservation = (state) => state.reservation;

export const selectSeats = createSelector(
  [selectReservation],
  (reservation) => reservation.seats
);

export const selectDate = createSelector(
  [selectReservation],
  (reservation) => reservation.date
);

export const selectHour = createSelector(
  [selectReservation],
  (reservation) => reservation.hour
);

export const selectSelectedFoods = createSelector(
  [selectReservation],
  (reservation) => reservation.foods
);

export const selectTotalPrice = createSelector(
  [selectReservation],
  (reservation) =>
    reservation.foods
      .reduce(
        (accumulatedPrice, cartItem) =>
          accumulatedPrice + cartItem.quantity * cartItem.price,
        0
      )
      .toFixed(2)
);

export const selectReservationRestaurant = createSelector(
  [selectReservation],
  (reservation) => reservation.restaurant
);
