import styled, { css } from "styled-components";

import { darkColor, greyColor, yellowColor } from "../../utils/styles/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
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
`;

export const TimeContainer = styled.div`
  display: flex;
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
