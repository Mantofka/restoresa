import { createSelector } from "reselect";

const selectReservation = (state) => state.reservation;

export const selectSeats = createSelector(
  [selectReservation],
  (ui) => ui.seats
);

export const selectDate = createSelector([selectReservation], (ui) => ui.date);

export const selectHour = createSelector([selectReservation], (ui) => ui.hour);
