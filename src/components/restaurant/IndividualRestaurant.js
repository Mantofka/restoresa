import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  Image,
  FooterContainer,
} from "./IndividualRestaurant.styles";
import { FoodTitle, DescriptionText } from "../../utils/styles/styles";

const IndividualRestaurant = ({ restaurant }) => {
    const {id, title, description, imageUrl} = restaurant;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${id}`);
    }

  return (
    <Container onClick={handleClick}>
      <Image alt='asdmasd' src={imageUrl} />
      <FooterContainer>
        <FoodTitle>{title}</FoodTitle>
        <DescriptionText>{description}</DescriptionText>
      </FooterContainer>
    </Container>
  );
};

export default IndividualRestaurant;
