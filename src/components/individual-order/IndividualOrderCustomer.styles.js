import styled from "styled-components";

export const darkColor = "#23212b";

export const ElementContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fbf6f6;
    height: 100%;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    gap: 15px;
`

export const SectionTitle = styled.h3`
  color: ${darkColor};
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 15px;
`;