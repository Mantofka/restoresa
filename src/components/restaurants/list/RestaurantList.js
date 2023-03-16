import React from "react";

import { Container } from "./RestaurantList.styles";

import IndividualRestaurant from "../../restaurant/Restaurant";

const restaurants = [
  {
    id: 11210,
    title: "Baking Mad Hidden Lab",
    description: "Turbūt įspūdingiausi burgeriai miese",
    imageUrl:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 41515,
    title: "Baking Mad Hidden Lab",
    description: "Turbūt įspūdingiausi burgeriai miese",
    imageUrl:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 48151,
    title: "Baking Mad Hidden Lab",
    description: "Turbūt įspūdingiausi burgeriai miese",
    imageUrl:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 51533,
    title: "Baking Mad Hidden Lab",
    description: "Turbūt įspūdingiausi burgeriai miese",
    imageUrl:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 32454,
    title: "Baking Mad Hidden Lab",
    description: "Turbūt įspūdingiausi burgeriai miese",
    imageUrl:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 85742,
    title: "Baking Mad Hidden Lab",
    description: "Turbūt įspūdingiausi burgeriai miese",
    imageUrl:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function RestaurantList() {
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <IndividualRestaurant restaurant={restaurant} />
      ))}
    </Container>
  );
}

export default RestaurantList;
