import React from "react";

import { selectScreen } from "../../../redux/reducers/ui/ui.selectors";
import { useSelector } from "react-redux";
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

const IndividualRestaurantItem = ({ food }) => {
  const { imageUrl, title, description, price } = food;
  const screen = useSelector(selectScreen);

  return (
    <>
      {food ? (
        <Container>
          <ColumnWrapper>
            <FoodTitle>
              {" "}
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

          <Image alt='asdmasd' src={imageUrl} />
        </Container>
      ) : null}
    </>
  );
};

export default IndividualRestaurantItem;
