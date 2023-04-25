import styled, { css } from "styled-components";

import {
  darkColor,
  yellowColor,
  InlineWrapper,
} from "../../utils/styles/styles";

export const BackButton = styled.button`
  border: none;
  background: none;
  color: #0047ab;
  font-weight: 500;
  cursor: pointer;
`;
export const ButtonDiv = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: flex-start;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15px;
  gap: 30px;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const RestaurantInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CustomerInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: between;
`;
export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 60px;
`;

export const SectionTitle = styled.h3`
  color: ${darkColor};
  font-weight: 500;
  font-size: 16px;
`;

export const OrderedItems = styled.div`
  margin-bottom: 150px;
  min-height: min(80vw, 500px);
`;

export const ItemContainer = styled.div`
  border-radius: 10px;
  background-color: #fbf6f6;
  padding: 5px;
`;

export const TotalCost = styled.div``;

export const OrderStatus = styled.h1`
  font-size: 14px;
  color: #f28c28;
`;
export const OrderDate = styled.p`
  color: #a8a3bd;
  font-size: 14px;
  font-weight: 400;
`;
export const OrderNumber = styled.h1`
  color: ${yellowColor};
  margin-left: 10px;
`;
export const TotalPrice = styled.h1``;
export const PayButton = styled.button`
  border-radius: 15px;
  border: none;
  width: 150px;
  height: 40px;
  background-color: ${yellowColor};
  font-size: 16px;
  color: ${darkColor};
  font-weight: 600;
`;

export const Wrapper = styled(InlineWrapper)`
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      flex-direction: column;
      width: 100%;
    `}
`;
