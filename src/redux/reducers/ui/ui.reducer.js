import {
  WINDOW_RESIZED,
  OPEN_ORDER_MODAL,
  OPEN_RESET_PASSWORD,
  OPEN_CHANGE_NUMBER,
  SET_ALERT_MODAL_OPENED,
} from "./ui.types";
import { defineScreen } from "./ui.actions";

const initialState = {
  screen: defineScreen(window.innerWidth),
  modals: {
    isAlertModalOpen: false,
    isOrderModalOpen: false,
    isChangePasswordModalOpen: false,
    isChangePhoneNumberModalOpen: false,
  },
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case WINDOW_RESIZED:
      return {
        ...state,
        screen: action.payload,
      };
    case OPEN_ORDER_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          isOrderModalOpen: action.payload,
        },
      };
    case OPEN_RESET_PASSWORD:
      return {
        ...state,
        modals: {
          ...state.modals,
          isChangePasswordModalOpen: action.payload,
        },
      };
    case OPEN_CHANGE_NUMBER:
      return {
        ...state,
        modals: {
          ...state.modals,
          isChangePhoneNumberModalOpen: action.payload,
        },
      };
    case SET_ALERT_MODAL_OPENED:
      return {
        ...state,
        modals: {
          ...state.modals,
          isAlertModalOpen: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default UIReducer;
