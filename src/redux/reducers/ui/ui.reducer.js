import { WINDOW_RESIZED } from "./ui.types";
import { defineScreen } from "./ui.actions";

const initialState = {
  screen: defineScreen(window.innerWidth),
};

export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case WINDOW_RESIZED:
      return {
        ...state,
        screen: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UIReducer;
