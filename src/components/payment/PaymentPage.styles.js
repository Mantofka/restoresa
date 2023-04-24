import styled, { css } from "styled-components";
import {
  DescriptionText,
  darkColor,
  InlineWrapper,
} from "../../utils/styles/styles";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: fow;
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
      ${Title} {
        font-size: 12px;
      }
      ${DarkenText} {
        font-size: 13px;
      }
    `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Wrapper = styled(InlineWrapper)`
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
      flex-direction: column;
      width: 100%;
    `}
`;
