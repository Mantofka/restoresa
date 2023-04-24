import React from "react";

import {Wrapper, ImageContainer, ItemContainer, AmountContainer, PriceContainer, ItemTitle, ItemDescription, Price, Amount, Image} from "./IndividualOrderItem.styles"

const IndividualOrderItem = (item) => {

    return (
        <Wrapper>
            <ImageContainer>
                <Image src="https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ImageContainer>
            <ItemContainer>
                <ItemTitle>
                    HeisenBerg's Double Decker
                </ItemTitle>
                <ItemDescription>
                    21 dieną brandinta black Angus jautiena, 400g cola zero gėrimo
                </ItemDescription>
            </ItemContainer>
            <AmountContainer>
                <Price> 16,45 € </Price> x <Amount> 2 </Amount>
            </AmountContainer>
            <PriceContainer>
                32,90 €
            </PriceContainer>
        </Wrapper>
    );
};


export default IndividualOrderItem;