import {
  ON_RESTAURANTS_FETCH,
  ON_RESTAURANTS_FETCH_FAIL,
  ON_RESTAURANTS_FETCH_SUCCESS,
} from "./restaurants.types";
import moment from "moment";

const initialState = {
  restaurants: {
    data: [],
    pending: false,
    error: undefined,
    fetchedOn: undefined,
    nextFetch: undefined,
  },
};

const RestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_RESTAURANTS_FETCH:
      return {
        ...state,
        restaurants: {
          ...state.restaurants,
          pending: true,
          error: undefined,
        },
      };
    case ON_RESTAURANTS_FETCH_FAIL:
      return {
        ...state,
        restaurants: {
          ...state.restaurants,
          pending: false,
          error: action.payload,
        },
      };
    case ON_RESTAURANTS_FETCH_SUCCESS:
      return {
        ...state,
        restaurants: {
          ...state.restaurants,
          pending: false,
          error: undefined,
          data: action.payload,
          fetchedOn: moment().valueOf(),
          nextFetch: moment().valueOf() + 60 * 1000,
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default RestaurantsReducer;
