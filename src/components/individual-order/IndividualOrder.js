import React, { useState, useEffect } from "react";

import {
  ButtonDiv,
  ContainerFooter,
  HeaderContainer,
  InformationContainer,
  ItemContainer,
  TotalCost,
  OrderedItems,
  HeaderLeft,
  HeaderRight,
  OrderStatus,
  OrderDate,
  OrderNumber,
  PayButton,
  BackButton,
  CustomerInformation,
  RestaurantInformation,
  Wrapper,
} from "./IndividualOrder.styles";

import { ElementContainer, PrimaryButton } from "../../utils/styles/styles";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import IndividualOrderCustomer from "./IndividualOrderCustomer.component";
import IndividualOrderItem from "./IndividualOrderItem.component";
import IndividualOrderRestaurant from "./IndividualOrderRestaurant.component";
import { SectionTitle } from "./IndividualOrderCustomer.styles";

import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

import { useSelector } from "react-redux";

import Customer from "../customer-information/Customer";
import Restaurant from "../restaurant-information/Restaurant";

import { useOrder } from "../../utils/orders";
import { useParams } from "react-router-dom";
import { useScreen } from "../../utils/ui/useScreen";

import { setPayment } from "../../redux/reducers/payment/payment.actions";

import LayoutContainer from "../layout-container/LayoutContainer";
import moment from "moment";

function IndividualOrderMenu() {
  const user = useSelector(selectCurrentUser);
  const { id } = useParams();
  const [fetchedOrder, setFetchedOrder] = useState({});
  const screen = useScreen();
  const order = useOrder(user.uid, id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    order.then((res) => {
      setFetchedOrder(res);
    });
  }, [order]);

  useEffect(() => {
    if (fetchedOrder?.payment?.status === "unsuccessful")
      console.log("Wow")
      dispatch(setPayment(calculateTotalSum()));
  }, [fetchedOrder]);

  console.log(fetchedOrder);

  const getStatusLabel = () => {
    switch (fetchedOrder?.payment?.status) {
      case "success":
        return "Paid";
      case "unsuccessful":
        return "Unsuccessful";
      case "processing":
        return "Processing";
      default:
        return "";
    }
  };

  const calculateTotalSum = () => {
    return fetchedOrder?.foods?.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0
    );
  };

  return (
    <LayoutContainer screen={screen}>
      <ButtonDiv>
        <BackButton onClick={() => navigate(-1)}>Back</BackButton>
      </ButtonDiv>
      <HeaderContainer>
        <HeaderLeft>
          <div style={{ fontSize: 32, fontWeight: 600 }}> Order </div>{" "}
          <OrderNumber> {fetchedOrder?.id?.slice(0, 10)} </OrderNumber>
        </HeaderLeft>
        <HeaderRight>
          <OrderStatus>{getStatusLabel()}</OrderStatus>
          <OrderDate>
            {fetchedOrder &&
              moment(fetchedOrder?.createdAt?.seconds * 1000).format(
                "MMM Do YYYY, h:mm a"
              )}
          </OrderDate>
        </HeaderRight>
      </HeaderContainer>

      <Wrapper screen={screen} gap={"20px"}>
        <Customer />
        <Restaurant
          restaurant={fetchedOrder.restaurant}
          reservationData={fetchedOrder}
        />
      </Wrapper>
      <OrderedItems>
        <SectionTitle>Food information</SectionTitle>
        <ElementContainer>
          {fetchedOrder.foods &&
            fetchedOrder.foods.map((food) => (
              <IndividualOrderItem key={food.id} item={food} />
            ))}
          <ContainerFooter>
            <TotalCost>
              <div style={{ fontWeight: 600 }}> Total </div>{" "}
              <div style={{ fontWeight: 700 }}> {calculateTotalSum()} € </div>
            </TotalCost>
            {fetchedOrder?.payment?.status === "unsuccessful" ? (
              <PrimaryButton
                style={{ width: "200px" }}
                onClick={() => navigate(`/payment`)}
              >
                Pay
              </PrimaryButton>
            ) : null}
          </ContainerFooter>
        </ElementContainer>
      </OrderedItems>
    </LayoutContainer>
  );
}

export default IndividualOrderMenu;
