import React from "react";

import {TextContainer, DescriptionText, InformingText} from "../../utils/styles/styles"
import {ElementContainer} from "./IndividualOrderCustomer.styles"

const IndividualOrderCustomer = (item) => {
    return (
        <ElementContainer>
            <TextContainer placeGap={"10px"} justify={"space-between"}>
                <InformingText>Full Name</InformingText>
                <DescriptionText>
                    Stasys Balbierius
                </DescriptionText>
            </TextContainer>
            <TextContainer placeGap={"10px"} justify={"space-between"}>
                <InformingText>Phone Number</InformingText>
                <DescriptionText>
                    +37085455159
                </DescriptionText>
            </TextContainer>
            <TextContainer placeGap={"10px"} justify={"space-between"}>
                <InformingText>Email</InformingText>
                <DescriptionText>
                    stasiuks1987@zebra.lt
                </DescriptionText>
            </TextContainer>
        </ElementContainer>

    );
};


export default IndividualOrderCustomer;