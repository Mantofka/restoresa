import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  ${({ screen }) =>
    screen === "md" &&
    css`
    grid-template-columns: repeat(2, 1fr);
  }
`}
  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`;
