import styled, { css } from "styled-components";

import {
  darkColor,
  highlightColor,
  yellowColor,
} from "../../utils/styles/styles";

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  width: 250px;
  gap: 10px;
  user-select: none;
`;

export const Text = styled.h1`
  font-size: 20px;
  color: ${darkColor};
`;

export const Container = styled.div`
  display: grid;
  background-color: ${yellowColor};
  padding: 50px 0;
  width: 100%;
  border-radius: 30px;
  grid-template-columns: repeat(3, 1fr);
  margin: 150px 0;
  gap: 30px;

  ${({ screen }) =>
    screen === "md" &&
    css`
      ${Element} {
        width: 160px;
      }
      ${Text} {
        font-size: 16px;
      }
    `}
  @media screen and (max-width: 640px) {
    gap: 20px;
    ${Element} {
      width: 160px;
    }
    ${({ screen }) =>
      (screen === "xs" || screen === "sm") &&
      css`
        grid-template-columns: 1fr;
        ${Element} {
          width: 250px;
        }
      `}
  }
`;

export const Highlight = styled.span`
  color: #9400d3;
`;

export const Image = styled.img`
  width: 100%;
  justify-self: center;
`;
