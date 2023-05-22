import React, { useEffect, useState } from "react";

import { getFoodByRestaurantID } from "../../../utils/firebase/documents";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HeaderText } from "../../../utils/styles/styles";

import { useNavigate } from "react-router-dom";

import { selectScreen } from "../../../redux/reducers/ui/ui.selectors";

import Loader from "../../loader/Loader";

import { useRestaurant } from "../../restaurants/list/RestaurantsList.utils";

import {
  selectDate,
  selectHour,
  selectSeats,
  selectReservationRestaurant,
} from "../../../redux/reducers/reservation/reservation.selectors";

import { updateTableBusyness } from "../../../utils/firebase/tables";

import { setRestaurant } from "../../../redux/reducers/reservation/reservation.actions";

import {
  Container,
  CategoryHeaderText,
} from "./IndividualRestaurantMenu.styles";
import {
  LayoutContainer,
  DescriptionText,
  MiddleScreen,
} from "../../../utils/styles/styles";

import RestaurantItemList from "./list/RestaurantItemList";

function IndividualRestaurantMenu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [restaurant] = useRestaurant(id);
  const [restaurantFoods, setRestaurantFoods] = useState([]);
  const screen = useSelector(selectScreen);
  const seats = useSelector(selectSeats);
  const hour = useSelector(selectHour);
  const date = useSelector(selectDate);
  const reservationRestaurant = useSelector(selectReservationRestaurant);

  useEffect(() => {
    getFoodByRestaurantID(id).then((res) => setRestaurantFoods(res));
    updateTableBusyness(id, seats, {
      hour: hour.hour,
      minute: hour.minute,
      date: date,
    });

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (
      reservationRestaurant === null &&
      typeof restaurant === "object" &&
      Object.keys(restaurant).length > 0
    ) {
      dispatch(setRestaurant(restaurant));
    }
  }, [restaurant]);

  if (!seats || !hour || !date) navigate(`/restaurants/${id}`);

  if (!restaurant)
    return (
      <MiddleScreen>
        <Loader />
      </MiddleScreen>
    );

  return (
    <LayoutContainer screen={screen}>
      <Container>
        <HeaderText>{restaurant?.title}</HeaderText>
        <DescriptionText>{restaurant?.description}</DescriptionText>
      </Container>

      {restaurantFoods?.map(({ type, ...restProps }) => (
        <Container>
          <CategoryHeaderText>{type}</CategoryHeaderText>
          <RestaurantItemList foods={restProps} />
        </Container>
      ))}
    </LayoutContainer>
  );
}

export default IndividualRestaurantMenu;
