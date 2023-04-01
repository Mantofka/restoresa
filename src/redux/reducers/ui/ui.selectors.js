import { createSelector } from "reselect";

const selectUI = (state) => state.ui;

export const selectScreen = createSelector([selectUI], (ui) => ui.screen);

export const selectIsOrderModalOpen = createSelector(
  [selectUI],
  (ui) => ui.modals.isOrderModalOpen
);
