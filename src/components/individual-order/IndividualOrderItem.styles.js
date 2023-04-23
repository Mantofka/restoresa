import styled from "styled-components";

export const darkColor = "#23212b";
export const greyColor = "#4E4A5A";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    align-items: center;
    padding: 0 20px 0 20px;
    margin-top: 15px; 
    height: 100%;
    width: 100%;
`;

export const ImageContainer = styled.div`
    width: 100%;
    grid-column: 1 / 2;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 20px;
    height: 100%;
    align-items: flex-start;
`;

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
`;

export const ItemTitle = styled.div`
    color: ${darkColor};
    font-weight: 600;
    font-size: 17px;
    padding-bottom: 5px;
`;


export const ItemDescription = styled.div`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 80%;
    color: ${greyColor};
`;

export const Amount = styled.div`

`;

export const Price = styled.div`
`;

