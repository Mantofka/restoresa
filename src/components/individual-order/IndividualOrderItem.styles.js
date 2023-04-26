import styled, { css } from "styled-components";

import {
  FoodTitle,
  DescriptionText,
  greyColor,
} from "../../utils/styles/styles";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      ${ItemTitle} {
        font-size: 14px;
      }
      ${ItemDescription} {
        font-size: 12px;
      }
      ${Price} {
        font-size: 12px;
      }
    `}
  ${({ screen }) =>
    (screen === "lg" || screen === "md") &&
    css`
      ${Image} {
        width: 100%;
      }
    `}
    ${({ screen }) =>
    screen === "xs" &&
    css`
      grid-template-columns: 1fr 3fr 2fr;
      ${GridWrapper} {
        grid-column: 3 / 4;
        grid-template-columns: 1fr;
        justify-self: flex-end;
      }
      ${ItemDescription} {
        width: 20ch;
      }
      ${ItemTitle} {
        width: 15ch;
      }
    `}
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  align-items: center;
  justify-self: flex-end;
`;

export const Column = styled.div`
    width: 100px:
`;

export const Image = styled.img`
  height: 80px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  justify-self: flex-end;
`;

export const ItemTitle = styled(FoodTitle)``;

export const PriceContainer = styled(ItemTitle)`
  font-weight: 700;
  justify-self: flex-end;
`;

export const ItemDescription = styled(DescriptionText)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Amount = styled.p``;

export const Price = styled.p``;
