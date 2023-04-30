import { createSelector } from "reselect";

const selectUI = (state) => state.ui;

export const selectScreen = createSelector([selectUI], (ui) => ui.screen);

export const selectIsOrderModalOpen = createSelector(
  [selectUI],
  (ui) => ui.modals.isOrderModalOpen
);

export const selectIsResetPasswordModalOpen = createSelector(
  [selectUI],
  (ui) => ui.modals.isChangePasswordModalOpen
);

export const selectIsChangePhoneNumberModalOpen = createSelector(
  [selectUI],
  (ui) => ui.modals.isChangePhoneNumberModalOpen
);

export const selectIsAlertModalOpen = createSelector(
  [selectUI],
  (ui) => ui.modals.isAlertModalOpen
);
