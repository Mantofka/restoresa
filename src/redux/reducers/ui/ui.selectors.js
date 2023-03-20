import { createSelector } from "reselect";

const selectUI = (state) => state.ui;

export const selectScreen = createSelector(
    [selectUI],
    (ui) => ui.screen
)