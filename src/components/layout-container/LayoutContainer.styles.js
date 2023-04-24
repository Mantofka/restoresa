import styled, { css } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: min(80vw, 1200px);
  margin: 0 auto;
  min-height: calc(100vh);
  padding-bottom: 20px;
  ${({ screen }) =>
    (screen === "md" || screen === "sm" || screen === "xs") &&
    css`
    width: 92vw;
  }
`}
`;
