import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fit, 145px);
  gap: 30px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fit, 135px);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, 135px);
  }
`;
