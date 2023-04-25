import { SET_PAYMENT, CLEAR_PAYMENT } from "./payment.types";

const initialState = {
  price: 0,
};

const PaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYMENT:
      return {
        ...state,
        price: action.payload,
      };
    case CLEAR_PAYMENT:
      return {
        ...state,
        price: 0,
      };
    default:
      return {
        ...state,
      };
  }
};

export default PaymentReducer;
