import React from "react";

import {TextContainer, DescriptionText, FoodTitle, InformingText} from "../../utils/styles/styles";
import {Container, ElementContainer, Image, RestaurantName, RestaurantInformation, OrderInformation, ImageContainer } from "./IndividualOrderRestaurant.styles";

const IndividualOrderRestaurant = (item) => {

    return (
        <ElementContainer>
            <ImageContainer>
                <Image src="https://imageproxy.wolt.com/venue/5c88f9e985b894000b4f1b1a/30bc1e1c-ada6-11ec-9297-cae5d1dc558e_7.baking_mad_list_1.jpg" /*{selectedRestaurant?.imageUrl}*/ />
                <TextContainer justify={"space-between"}>
                    <FoodTitle>{}</FoodTitle>
                    <DescriptionText>
                        {}
                    </DescriptionText>
                </TextContainer>
            </ImageContainer>
            <Container>
                <RestaurantInformation>
                    <RestaurantName>Baking Mad Hiden Lab</RestaurantName>
                    <DescriptionText>Turbūt įspūdingiausi burgeriai mieste</DescriptionText>
                </RestaurantInformation>
                <OrderInformation>
                    <TextContainer placeGap={"10px"} justify={"space-between"}>
                        <InformingText>Seats</InformingText>
                        <DescriptionText> 2 {}</DescriptionText>
                    </TextContainer>
                    <TextContainer placeGap={"10px"} justify={"space-between"}>
                        <InformingText>Date</InformingText>
                        <DescriptionText>{"2023-03-29"}</DescriptionText>
                    </TextContainer>
                    <TextContainer placeGap={"10px"} justify={"space-between"}>
                        <InformingText>Time</InformingText>
                        <DescriptionText>
                            13:00{}
                        </DescriptionText>
                    </TextContainer>
                </OrderInformation>
            </Container>
        </ElementContainer>

    );
};


export default IndividualOrderRestaurant;