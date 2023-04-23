import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
`;

export const ElementContainer = styled.div`
    background-color: #fbf6f6;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 15px;
    padding: 10px;
    height: 100%;
`;

export const RestaurantInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const OrderInformation = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

export const RestaurantName = styled.h3`
    font-size: 20px;
`