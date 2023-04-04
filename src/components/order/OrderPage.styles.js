import styled, { css } from "styled-components";

import {
  darkColor,
  InlineWrapper,
  yellowColor,
} from "../../utils/styles/styles";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  float: right;
  background-color: #fff;
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;
  border-radius: 10px 0 0 10px;
  gap: 10px;
  overflow-y: auto;
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      max-width: 100vw;
      width: 100vw;
      border-radius: 0;
      padding: 10px;
      padding-bottom: 35px;
    `}
`;

export const Title = styled.h1`
  color: ${darkColor};
  font-size: 32px;
  fonnt-weight: 700;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #fbf6f6;
  padding: ${({ padding }) => padding || "10px"};
  width: 100%;
  border-radius: 10px;
  gap: 15px;
`;

export const Wrapper = styled(InlineWrapper)`
  justify-content: flex-start;
  padding: 0;
  gap: ${({ gap }) => gap};
`;

export const Image = styled.img`
  height: 80px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

export const PriceContainer = styled.div`
  background-color: ${yellowColor};
  font-size: 14px;
  padding: 5px;
  border-radius: 15px;
  max-width: 75px;
  text-align: center;
  font-weight: 400;
`;

export const QuantityContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #dcd2d2;
  color: ${darkColor};
  font-weight: 500;
  font-size: 14px;
  padding: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalPriceContainer = styled.div`
  margin-top: auto;
  width: 100%;
  padding-bottom: 25px;
`;

export const TotalPriceText = styled.h1`
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  font-size: 20px;
  color: ${darkColor};
`;

export const NoItemText = styled.p`
  color: #a0a0a0;
  font-size: 14px;
`;
