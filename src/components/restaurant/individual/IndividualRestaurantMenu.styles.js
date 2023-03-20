import styled from "styled-components";

export const darkColor = "#23212b";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px 0;
    gap: 10px;
`;

export const LayoutContainer = styled.div`
  width: min(80vw, 1300px);
  margin: 0 auto;
`;

export const CategoryHeaderText = styled.h1`
  color: ${darkColor};
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 15px;
`;