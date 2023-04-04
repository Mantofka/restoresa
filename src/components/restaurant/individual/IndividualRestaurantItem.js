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
        <Container
          whileHover={{
            scale: 1.01,
            boxShadow: "1px 1px 4px 0px rgba(27, 27, 27, 0.1)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          onClick={() => dispatch(addFood(food))}
        >
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

//   box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.26);
// -webkit-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.26);
// -moz-box-shadow: 3px 3px 9px 0px rgba(0,0,0,0.26);
