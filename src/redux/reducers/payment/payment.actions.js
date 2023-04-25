import { SET_PAYMENT, CLEAR_PAYMENT } from "./payment.types";

export const setPayment = (price) => {
  return {
    type: SET_PAYMENT,
    payload: price,
  };
};

const clearPayment = (secret, price) => {
  return {
    type: CLEAR_PAYMENT,
  };
};
