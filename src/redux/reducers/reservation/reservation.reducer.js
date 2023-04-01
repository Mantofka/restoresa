import {
  SET_RESERVATION_DATE,
  SET_RESERVATION_HOUR,
  SET_RESERVATION_SEATS,
  ADD_FOOD,
  REMOVE_FOOD,
  CLEAR_FOODS,
  SET_RESTAURANT,
} from "./reservation.types";

import { removeFoodById, addFood } from "./reservation.utils";

const initialState = {
  seats: null,
  date: null,
  hour: null,
  foods: [],
  restaurant: null,
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
    case SET_RESTAURANT:
      return {
        ...state,
        restaurant: action.payload,
      };
    case ADD_FOOD:
      return {
        ...state,
        foods: addFood(state.foods, action.payload),
      };
    case CLEAR_FOODS:
      return {
        ...state,
        foods: [],
      };
    case REMOVE_FOOD:
      return {
        ...state,
        foods: removeFoodById(state.foods, action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default ReservationReducer;
