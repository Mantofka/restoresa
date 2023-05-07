import styled, { css } from "styled-components";
import { darkColor } from "../../utils/styles/styles";

export const Container = styled.div`
  background-color: ${darkColor};
  padding: 20px 40px;
  min-height: 120px;
`;

export const FooterText = styled.p`
  color: #7e8185;
  font-size: 10px;
  font-weight: 500;
  transition: 250ms all ease-in-out;
  &:hover {
    color: #fff;
  }
  ${({ title }) =>
    title &&
    css`
      font-weight: 600;
      color: #fff;
    `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: ${({ justify }) => justify || "flex-start"};
  width: ${({ columnWidth }) => columnWidth || "inherit"};
`;

export const TopSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  height: 100%;
`;

export const Bottom = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const CompanyTitle = styled.h1`
  color: ${darkColor};
  font-size: 22px;
  fpnt-weight: 600;
  color: #fff;
`;
