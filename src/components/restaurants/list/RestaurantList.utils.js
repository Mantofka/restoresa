import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantsProperty,
  selectRestaurantsInRestaurants,
} from "../../../redux/reducers/restaurants/restaurants.selectors";
import moment from "moment";
import {
  onRestaurantsFetch,
  addRestaurant,
} from "../../../redux/reducers/restaurants/restaurants.actions";

import { getRestaurantFromFirebase } from "../../../utils/firebase/restaurants";

export const useRestaurants = () => {
  const dispatch = useDispatch();
  const restaurantsState = useSelector(selectRestaurantsProperty);

  const fetchRestaurants = () => {
    const { nextFetch } = restaurantsState;
    if (moment().valueOf() > nextFetch || nextFetch === undefined) {
      dispatch(onRestaurantsFetch());
    }
  };

  return [restaurantsState, fetchRestaurants];
};

export const useRestaurant = (restaurantID) => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantsInRestaurants);
  const [restaurant, setRestaurant] = useState(restaurants.filter(({ id }) => id === restaurantID)[0]);

  useEffect(() => {
    const getRestaurant = async () => {
      let fetchedRestaurant = await getRestaurantFromFirebase(
        restaurantID
      ).then((res) => res);
      return fetchedRestaurant;
    };
    if (restaurant.length === 0) {
      getRestaurant().then((res) => {
        dispatch(addRestaurant(res));
        setRestaurant(res)
      });
    }
  }, []);

  console.log(restaurant)

  // const fetchRestaurants = () => {
  //   const { nextFetch } = restaurantsState;
  //   if (moment().valueOf() > nextFetch || nextFetch === undefined) {
  //     dispatch(onRestaurantsFetch());
  //   }
  // };

  return [restaurant];
};
