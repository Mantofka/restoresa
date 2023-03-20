import {
  SET_RESERVATION_DATE,
  SET_RESERVATION_HOUR,
  SET_RESERVATION_SEATS,
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
