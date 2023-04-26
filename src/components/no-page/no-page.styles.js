import styled, { css } from "styled-components";
import { darkColor } from "../individual-order/IndividualOrderCustomer.styles";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      ${Image} {
        width: 80%;
      }

      ${Title} {
        font-size: 22px;
      }
    `}
`;

export const Image = styled.img`
  width: 50%;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  color: ${darkColor};
`;
