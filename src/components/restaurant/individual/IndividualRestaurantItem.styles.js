import styled from "styled-components";

export const darkColor = "#23212b";
export const greyColor = "#4E4A5A";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.25fr;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr))
  height: 150px;
  width: 100%;
  border-radius: 10px;
  background-color: #faf6f6;
`;

export const RightSideContainer = styled.div`
    padding: 10px;
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
`;

export const LeftSideContainer = styled.div`
    padding: 10px;
    width: 100%;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    grid-row: 1 / 3;    
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const CostContainer = styled.div`
  padding: 10px;
  border-radius: 12px;
  background-color: #FFBF00;
  width: 70px;
  font-size: 12px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const DescriptionText = styled.h1`
  color: ${greyColor};
  font-weight: 400;
  font-size: 12px;
  padding-bottom: 10px;
`;

export const CostText = styled.h1`
  color: ${greyColor};
  font-weight: 400;
  font-size: 12px;
  padding: 0;
`;

export const FoodTitle = styled.h1`
  color: ${darkColor};
  font-weight: 600;
  font-size: 15px;
  padding-bottom: 5px;
`;