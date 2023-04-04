import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  Image,
  FooterContainer,
  ImageContainer,
} from "./Restaurant.styles";
import { FoodTitle, DescriptionText } from "../../utils/styles/styles";

import { setRestaurant } from "../../redux/reducers/reservation/reservation.actions";

import { useDispatch } from "react-redux";

const IndividualRestaurant = ({ restaurant }) => {
  const { id, title, description, imageUrl } = restaurant;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`${id}`);
    dispatch(setRestaurant(restaurant));
  };

  return (
    <Container
      whileHover={{
        scale: 1.01,
        boxShadow: "1px 1px 4px 0px rgba(27, 27, 27, 0.1)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      onClick={handleClick}
    >
      <ImageContainer>
        <Image alt='asdmasd' src={imageUrl} />
      </ImageContainer>
      <FooterContainer>
        <FoodTitle>{title}</FoodTitle>
        <DescriptionText>{description}</DescriptionText>
      </FooterContainer>
    </Container>
  );
};

export default IndividualRestaurant;
