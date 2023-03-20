import {
  SET_RESERVATION_DATE,
  SET_RESERVATION_HOUR,
  SET_RESERVATION_SEATS,
} from "./reservation.types";

const initialState = {
  seats: null,
  date: null,
  hour: null,
};

const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESERVATION_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_RESERVATION_HOUR:
      return {
        ...state,
        hour: action.payload,
      };
    case SET_RESERVATION_SEATS:
      return {
        ...state,
        seats: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ReservationReducer;
