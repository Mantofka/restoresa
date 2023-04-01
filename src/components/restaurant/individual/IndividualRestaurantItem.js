import React from "react";

import { selectScreen } from "../../../redux/reducers/ui/ui.selectors";
import { useSelector, useDispatch } from "react-redux";
import { isMobileSize } from "../../../utils/ui";

import {
  Container,
  ColumnWrapper,
  Image,
  FoodTitle,
  DescriptionText,
  CostContainer,
  CostText,
} from "./IndividualRestaurantItem.styles";

import {
  addFood,
  removeFood,
} from "../../../redux/reducers/reservation/reservation.actions";

const IndividualRestaurantItem = ({ food }) => {
  const { imageUrl, title, description, price } = food;
  const screen = useSelector(selectScreen);
  const dispatch = useDispatch();

  return (
    <>
      {food ? (
        <Container onClick={() => dispatch(addFood(food))}>
          <ColumnWrapper>
            <FoodTitle>
              {isMobileSize(screen, "md")
                ? title.length > 40
                  ? `${title.slice(0, 40)}...`
                  : title
                : title}
            </FoodTitle>
            <DescriptionText>
              {description?.length > 50
                ? `${description.slice(0, 50)}...`
                : description}
            </DescriptionText>
            <CostContainer>
              <CostText>{price} €</CostText>
            </CostContainer>
          </ColumnWrapper>

          <Image alt='' src={imageUrl} />
        </Container>
      ) : null}
    </>
  );
};

export default IndividualRestaurantItem;
