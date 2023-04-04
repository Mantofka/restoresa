import styled, { css } from "styled-components";
import {
  darkColor,
  highlightColor,
  InlineWrapper as Wrapper,
} from "../../utils/styles/styles";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  ${({ screen }) =>
    (screen === "sm" || screen === "xs") &&
    css`
    ${SmallerText}{

    }
    ${InlineWrapper}{
      flex-direction: column;
      gap: 20px;
    }
  }
`}
`;

export const Highlight = styled.span`
  color: ${highlightColor};
`;

export const SmallerText = styled.p`
  color: ${({ color }) => color || darkColor};
  font-size: 18px;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  width: ${({ width }) => width || "inherit"};
   {
    ${({ additionalText }) =>
      additionalText &&
      css`
        color: #4e4a5a;
        font-size: 14px;
        font-weigth: 400;
        width: 15ch;
      `}
  }
`;

export const InlineWrapper = styled(Wrapper)`
  gap: 15px;
`;
