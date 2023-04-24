import styled, { css } from "styled-components";
import { darkColor } from "../../utils/styles/styles";

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  background-color: #fbf6f6;
  padding: ${({ padding }) => padding || "10px"};
  width: 100%;
  border-radius: 10px;
  padding: 15px 25px;
  gap: 25px;
  height: max-content;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid #e4e4e4;
  height: 1px;
`;

export const PriceText = styled.h1`
  font-weight: 500;
  color: ${darkColor};
  font-size: 16px;
`;

export const Price = styled.h1`
  font-weight: 600;
  color: ${darkColor};
  font-size: 16px;
`;

export const PriceContainer = styled.div`
  width: 250px;
  margin-left: auto;
`;
