import { WINDOW_RESIZED, OPEN_ORDER_MODAL } from "./ui.types";
import { defineScreen } from "./ui.actions";

const initialState = {
  screen: defineScreen(window.innerWidth),
  modals: {
    isOrderModalOpen: false,
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
    default:
      return {
        ...state,
      };
  }
};

export default UIReducer;
