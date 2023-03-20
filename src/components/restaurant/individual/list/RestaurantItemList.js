import React from "react";

import { Container } from "../../../restaurants/list/RestaurantList.styles"; 

import IndividualRestaurantItem from "../IndividualRestaurantItem";

const burgers = [
    {
      id: 11111,
      title: "Hermanos Laboratories INC",
      description: "Traškus ir sultingas, trumuose marinuoto kukurūzinio viščiuko krūtinėlės burgeris su namuose gamintu Harrisa raudonuoju majonezu..",
      imageUrl:
        "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cost: "8,95 $",
    },
    {
      id: 22222,
      title: "Heisenberg's Double Decker",
      description: "21 dieną brandinta black Angus jautiena, 400g keturguba šoninė, trigubas sūris, naminis aioli majonezas ir neraliai didelis iššūkis.",
      imageUrl:
        "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cost: "16,45 $",
    },
    {
      id: 33333,
      title: "Potatoes in my blood",
      description: "Traškus saldžiųjų bulvių ir atrišoko vegetariškas burgeris su garstyčių hollindaise padažu, kapotais kaparėliais ir rūkytu čedario sūriu.",
      imageUrl:
        "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      cost: "8,45 $",
    },
  ];

  const food = [ // xaxaxa
    {
        id: 44444,
        title: "Karšti čedario sūrio gabaliukai",
        description: "Su medaus ir garstyčių padažu",
        imageUrl:
          "https://images.pexels.com/photos/13999222/pexels-photo-13999222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cost: "6,95 $",
      },
      {
        id: 55555,
        title: "Karšti čedario sūrio gabaliukai",
        description: "Su medaus ir garstyčių padažu",
        imageUrl:
          "https://images.pexels.com/photos/13999222/pexels-photo-13999222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cost: "6,95 $",
      },
      {
        id: 66666,
        title: "Karšti čedario sūrio gabaliukai",
        description: "Su medaus ir garstyčių padažu",
        imageUrl:
          "https://images.pexels.com/photos/13999222/pexels-photo-13999222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cost: "6,95 $",
      },
  ];


  function RestaurantItemList() {
    return (
      <Container>
        {burgers.map((burger) => (
          <IndividualRestaurantItem burger={burger} />
        ))}
      </Container>
    );
  }

  export default RestaurantItemList;