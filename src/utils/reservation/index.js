import { useSelector } from "react-redux";

import {
  selectSeats,
  selectDate,
  selectHour,
} from "../../redux/reducers/reservation/reservation.selectors";

export const useReservation = () => {
  const seats = useSelector(selectSeats);
  const date = useSelector(selectDate);
  const hour = useSelector(selectHour);

  return { seats, date, hour };
};
