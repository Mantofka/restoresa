import React, { useEffect } from "react";

import {
  FoodTitle,
  DescriptionText,
  TextContainer,
  InformingText,
  SectionTitle,
  PrimaryButton,
} from "../../utils/styles/styles";
import {
  Container,
  ModalContainer,
  Title,
  ElementContainer,
  Wrapper,
  Image,
  PriceContainer,
  QuantityContainer,
  TotalPriceText,
  TotalPriceContainer,
  NoItemText,
} from "./OrderPage.styles";

import { useNavigate } from "react-router-dom";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import OutsideAlerter from "../outside-alerter/OutsideAlerter";

import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import {
  selectReservationRestaurant,
  selectSeats,
  selectDate,
  selectHour,
  selectSelectedFoods,
  selectTotalPrice,
} from "../../redux/reducers/reservation/reservation.selectors";

import {
  addFood,
  removeFood,
} from "../../redux/reducers/reservation/reservation.actions";

import { useSelector, useDispatch } from "react-redux";

import { openOrderModal } from "../../redux/reducers/ui/ui.actions";

import { selectIsOrderModalOpen } from "../../redux/reducers/ui/ui.selectors";
import { AnimatePresence } from "framer-motion";

function OrderPage() {
  const isOpened = useSelector(selectIsOrderModalOpen);
  const selectedRestaurant = useSelector(selectReservationRestaurant);
  const seats = useSelector(selectSeats);
  const hour = useSelector(selectHour);
  const date = useSelector(selectDate);
  const foods = useSelector(selectSelectedFoods);
  const totalPrice = useSelector(selectTotalPrice);
  const screen = useSelector(selectScreen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpened) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpened]);

  const handleRedirection = () => {
    navigate("/payment");
    dispatch(openOrderModal(false));
  };

  return (
    <AnimatePresence>
      {isOpened && (
        <Container>
          <OutsideAlerter callback={() => dispatch(openOrderModal(false))}>
            <ModalContainer
              screen={screen}
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
            >
              <Wrapper
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Title style={{ float: "left" }}>Order</Title>
                <CloseIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => dispatch(openOrderModal(false))}
                />
              </Wrapper>
              <SectionTitle>Restaurant information</SectionTitle>
              <ElementContainer>
                <Wrapper gap={"15px"}>
                  <Image src={selectedRestaurant?.imageUrl} />
                  <TextContainer justify={"space-between"}>
                    <FoodTitle>{selectedRestaurant?.title}</FoodTitle>
                    <DescriptionText>
                      {selectedRestaurant?.description}
                    </DescriptionText>
                  </TextContainer>
                </Wrapper>
                <Wrapper gap={"15px"}>
                  <TextContainer placeGap={"10px"} justify={"space-between"}>
                    <InformingText>Seats</InformingText>
                    <DescriptionText>{seats}</DescriptionText>
                  </TextContainer>
                  <TextContainer placeGap={"10px"} justify={"space-between"}>
                    <InformingText>Date</InformingText>
                    <DescriptionText>{date}</DescriptionText>
                  </TextContainer>
                  <TextContainer placeGap={"10px"} justify={"space-between"}>
                    <InformingText>Time</InformingText>
                    <DescriptionText>
                      {hour.hour}:{hour.minute}0
                    </DescriptionText>
                  </TextContainer>
                </Wrapper>
              </ElementContainer>
              <SectionTitle>Food information</SectionTitle>
              {foods.length > 0 ? (
                foods.map((food) => {
                  const { id, description, imageUrl, price, quantity, title } =
                    food;
                  return (
                    <ElementContainer key={id} padding={"15px"}>
                      <Wrapper gap={"15px"} style={{ width: "100%" }}>
                        <Image src={imageUrl} alt={"aksdoaskdo"} />
                        <TextContainer placeGap={"10px"}>
                          <FoodTitle orderPage>{title}</FoodTitle>
                          <DescriptionText>{description}</DescriptionText>
                          <PriceContainer>{price} €</PriceContainer>
                        </TextContainer>
                        <Wrapper gap={"5px"} style={{ marginLeft: "auto" }}>
                          <RemoveIcon
                            onClick={() => dispatch(removeFood(food))}
                            sx={{ fontSize: 18, cursor: "pointer" }}
                          />

                          <QuantityContainer>{quantity}</QuantityContainer>
                          <AddIcon
                            onClick={() => dispatch(addFood(food))}
                            sx={{ fontSize: 18, cursor: "pointer" }}
                          />
                        </Wrapper>
                      </Wrapper>
                    </ElementContainer>
                  );
                })
              ) : (
                <NoItemText>You didn't select any food.</NoItemText>
              )}
              <TotalPriceContainer>
                <TextContainer placeGap={"10px"}>
                  <TotalPriceText>Total</TotalPriceText>
                  <TotalPriceText fontWeight={"400"}>
                    {totalPrice} €
                  </TotalPriceText>
                </TextContainer>
                <PrimaryButton
                  style={{ margin: "10px 0" }}
                  onClick={handleRedirection}
                >
                  Go to payment
                </PrimaryButton>
              </TotalPriceContainer>
            </ModalContainer>
          </OutsideAlerter>
        </Container>
      )}
    </AnimatePresence>
  );
}

export default OrderPage;
