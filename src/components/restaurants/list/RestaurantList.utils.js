import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsProperty } from "../../../redux/reducers/restaurants/restaurants.selectors";
import moment from "moment";
import { onRestaurantsFetch } from "../../../redux/reducers/restaurants/restaurants.actions";

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
