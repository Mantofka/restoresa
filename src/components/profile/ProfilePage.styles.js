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
  width: 100%;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 250px;
`;

export const BlandText = styled(InformingText)`
  font-size: 12px;
`;

export const Wrapper = styled(InlineWrapper)`
  align-items: flex-start;
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      flex-direction: column;
      align-items: center;
      justify-content: center;
      ${ColumnContainer}{
        min-width: 300px;
      }
    `}
`;