import styled from "styled-components";

import { darkColor, greyColor } from "../../../utils/styles/styles";

export const FoodTitle = styled.h1`
  color: ${darkColor};
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 5px;
`;

export const DescriptionText = styled.h1`
  color: ${greyColor};
  font-weight: 400;
  font-size: 12px;
  padding-bottom: 10px;
`;

export const Image = styled.img`
  width: 150px;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (max-width: 770px) {
    width: 180px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #faf6f6;
  height: 135px;
  padding: 10px;
  gap: 15px;
  @media screen and (max-width: 500px) {
    ${Image} {
      width: 35%;
    }
    ${FoodTitle} {
      font-size: 14px;
    }
    ${DescriptionText}{
      font-size: 10px;
    }
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

export const CostContainer = styled.div`
  padding: 10px;
  border-radius: 12px;
  background-color: #ffbf00;
  width: 70px;
  font-size: 12px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CostText = styled.h1`
  color: ${greyColor};
  font-weight: 400;
  font-size: 12px;
  padding: 0;
`;
