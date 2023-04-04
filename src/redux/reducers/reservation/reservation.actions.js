import {
  ADD_FOOD,
  CLEAR_FOODS,
  REMOVE_FOOD,
  SET_RESERVATION_DATE,
  SET_RESERVATION_HOUR,
  SET_RESERVATION_SEATS,
  SET_RESTAURANT
} from "./reservation.types";

export const setReservationHour = (time) => {
  return {
    type: SET_RESERVATION_HOUR,
    payload: time,
  };
};

export const clearReservationHour = () => {
  return {
    type: SET_RESERVATION_HOUR,
    payload: null,
  };
};

export const setReservationDate = (date) => {
  return {
    type: SET_RESERVATION_DATE,
    payload: date,
  };
};

export const clearReservationDate = () => {
  return {
    type: SET_RESERVATION_DATE,
    payload: null,
  };
};

export const setReservationSeats = (seats) => {
  return {
    type: SET_RESERVATION_SEATS,
    payload: seats,
  };
};

export const addFood = (food) => {
  return {
    type: ADD_FOOD,
    payload: food,
  };
};

export const removeFood = (food) => {
  return {
    type: REMOVE_FOOD,
    payload: food,
  };
};

export const clearFood = (food) => {
  return {
    type: CLEAR_FOODS,
    payload: food,
  };
};

export const setRestaurant = (restaurant) => {
  return {
    type: SET_RESTAURANT,
    payload: restaurant,
  };
};


