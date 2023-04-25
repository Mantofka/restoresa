import { createSelector } from "reselect";

export const selectPayment = (state) => state.payment;

export const selectPrice = createSelector(
  [selectPayment],
  (payment) => payment.price
);
