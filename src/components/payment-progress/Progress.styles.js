import styled, { css } from "styled-components";
import { DescriptionText, darkColor } from "../../utils/styles/styles";

export const StatusContainer = styled.div`
  margin-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ElementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  min-height: 160px;
  flex-direction: row;
  align-items: space-between;
  justify-content: flex-start;
  background-color: #fbf6f6;
  padding: ${({ padding }) => padding || "10px"};
  width: 100%;
  border-radius: 10px;
  padding: 15px 25px;
  gap: 25px;
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      grid-template-columns: 1fr 1fr;
      ${Title} {
        font-size: 12px;
      }
      ${DarkenText} {
        font-size: 13px;
      }
    `}
`;

export const Title = styled(DescriptionText)`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const DarkenText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${darkColor};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "flex-start"};
`;
