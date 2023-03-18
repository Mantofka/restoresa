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

export const setReservationDate = (date) => {
  return {
    type: SET_RESERVATION_DATE,
    payload: date,
  };
};

export const setReservationSeats = (seats) => {
  return {
    type: SET_RESERVATION_SEATS,
    payload: seats,
  };
};
