import React from "react";

import { LayoutContainer, ButtonDiv, ContainerFooter, HeaderContainer, InformationContainer, ItemContainer, TotalCost, OrderedItems, HeaderLeft, HeaderRight, OrderStatus, OrderDate, OrderNumber, PayButton, BackButton, CustomerInformation, RestaurantInformation } from "./IndividualOrder.styles";
import IndividualOrderCustomer from "./IndividualOrderCustomer.component";
import IndividualOrderItem from "./IndividualOrderItem.component";
import IndividualOrderRestaurant from "./IndividualOrderRestaurant.component";
import {SectionTitle} from "./IndividualOrderCustomer.styles";

function IndividualOrderMenu() {
    return (
        <LayoutContainer>
            <ButtonDiv>
                <BackButton>Back</BackButton>
            </ButtonDiv>
            <HeaderContainer>
                <HeaderLeft>
                    <div style={{fontSize:32, fontWeight: 600}}> Order </div> <OrderNumber> #2151512 </OrderNumber>
                </HeaderLeft>
                <HeaderRight>
                    <OrderStatus>Unpaid</OrderStatus>
                    <OrderDate>Jul 17, 2023 at 09.44am</OrderDate>
                </HeaderRight>
            </HeaderContainer>
            <InformationContainer>
                <CustomerInformation>
                    <SectionTitle>Customer information</SectionTitle>
                    <IndividualOrderCustomer />
                </CustomerInformation>

                <RestaurantInformation>
                    <SectionTitle>Restaurant information</SectionTitle>
                    <IndividualOrderRestaurant />
                </RestaurantInformation>

            </InformationContainer>
            <OrderedItems>
                <SectionTitle>Food information</SectionTitle>
                <ItemContainer>
                    <IndividualOrderItem />
                    <IndividualOrderItem />
                    <IndividualOrderItem />
                    <IndividualOrderItem />
                    <IndividualOrderItem />
                    <IndividualOrderItem />
                    <div style={{ borderTop: "1px solid #E8E8E8", marginTop: 20, marginBottom: 15 }}></div>
                    <ContainerFooter>
                        <TotalCost>
                            <div style={{ fontWeight: 600 }}> Total </div> <div style={{ fontWeight: 700 }}> 157,30 € </div>
                        </TotalCost>
                        <PayButton>Pay</PayButton>
                    </ContainerFooter>
                </ItemContainer>

            </OrderedItems>
        </LayoutContainer>
    );
}


export default IndividualOrderMenu