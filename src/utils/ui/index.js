export const isMobileSize = (screen, breakpoint) => {
  if (convertToNumber(screen) < convertToNumber(breakpoint)) return true;
  return false;
};

const convertToNumber = (screen) => {
  if (screen === "lg") return 4;
  if (screen === "md") return 3;
  if (screen === "sm") return 2;
  if (screen === "xs") return 1;
};
