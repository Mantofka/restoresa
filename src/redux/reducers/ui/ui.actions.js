import {
  WINDOW_RESIZED,
  OPEN_ORDER_MODAL,
  OPEN_RESET_PASSWORD,
  OPEN_CHANGE_NUMBER,
  SET_ALERT_MODAL_OPENED,
} from "./ui.types";

export const resizeScreen = (width) => {
  return {
    type: WINDOW_RESIZED,
    payload: defineScreen(width),
  };
};

export const defineScreen = (width) => {
  if (width > 992) return "lg";
  else if (width > 600) return "md";
  else if (width > 480) return "sm";
  else return "xs";
};

export const openOrderModal = (state) => {
  return {
    type: OPEN_ORDER_MODAL,
    payload: state,
  };
};

export const openResetPasswordModal = (state) => {
  return {
    type: OPEN_RESET_PASSWORD,
    payload: state,
  };
};

export const openChangeNumberModal = (state) => {
  return {
    type: OPEN_CHANGE_NUMBER,
    payload: state,
  };
};

export const setAlertModalOpened = (state) => {
  return {
    type: SET_ALERT_MODAL_OPENED,
    payload: state,
  };
};
