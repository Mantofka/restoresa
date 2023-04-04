import styled, { css } from "styled-components";

import { darkColor, greyColor, yellowColor } from "../../utils/styles/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh);
  gap: 20px;
  ${({ screen }) =>
    screen === "md" &&
    css`
      ${PromptText} {
        font-size: 44px;
      }
    `}
  ${({ screen }) =>
    screen === "sm" &&
    css`
      ${PromptText} {
        font-size: 34px;
      }
    `}
`;

export const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
      align-items: flex-start;
      justify-content: space-between;
    `}
`;

export const PromptText = styled.h1`
  color: ${darkColor};
  font-size: 54px;
  max-width: 20ch;
`;

export const ContinueButton = styled.button`
  height: 35px;
  width: 120px;
  border-radius: 10px;
  border: 1px solid ${darkColor};
  background: #fff;
  color: ${darkColor};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 250ms ease-in;
  &:hover {
    background-color: ${darkColor};
    color: #fff;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: unset;
      opacity: 0.75;
      &:hover {
        color: ${darkColor};
        background: #fff;
      }
    `}
`;

export const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export const TimeContent = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid ${darkColor};
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${greyColor};
      border: none;
      opacity: 50%;
      cursor: unset;
      color: #fff;
    `}
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${yellowColor};
      border: none;
    `}
`;
