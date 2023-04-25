import styled, { css } from "styled-components";
import { InformingText, InlineWrapper } from "../../utils/styles/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
`;

export const ChangeText = styled.p`
  font-size: 14px;
  color: #334ccf;
  cursor: pointer;
`;

export const StatusLabel = styled.span`
  color: green;
`;

export const OrderElement = styled.div`
  background-color: #fbf6f6;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 250px;
`;

export const BlandText = styled(InformingText)`
  font-size: 12px;
`;

export const Wrapper = styled(InlineWrapper)`
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      flex-direction: column;
    `}
`;
