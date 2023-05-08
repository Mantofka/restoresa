import React, { useState, useEffect } from "react";

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

import { addFood } from "../../../redux/reducers/reservation/reservation.actions";

const IndividualRestaurantItem = ({ food }) => {
  const { imageUrl, title, description, price } = food;
  const screen = useSelector(selectScreen);
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    dispatch(addFood(food));
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 800);
  };

  return (
    <>
      {food ? (
        <Container
          whileTap={{ scale: 1 }}
          whileHover={{
            scale: 1.01,
            boxShadow: "1px 1px 4px 0px rgba(27, 27, 27, 0.1)",
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          onClick={handleClick}
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
              <CostText
                animate={
                  isClicked
                    ? {
                        y: [0, 50, 49, -100, -99, 0],
                        opacity: [1, 1, 0, 0, 1, 1],
                        transition: {
                          duration: 0.8,
                        },
                      }
                    : { y: 0, opacity: 1 }
                }
              >
                {price} €
              </CostText>
            </CostContainer>
          </ColumnWrapper>

          <Image alt='' src={imageUrl} />
        </Container>
      ) : null}
    </>
  );
};

export default IndividualRestaurantItem;

