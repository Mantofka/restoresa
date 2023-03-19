import React, { useState, useEffect } from "react";
import {
  Container,
  ContinueButton,
  TimeContainer,
  TimeContent,
  InlineWrapper,
  PromptText,
} from "./RestaurantPrompts.styles";

import { useDispatch, useSelector } from "react-redux";

import { selectScreen } from "../../redux/reducers/ui/ui.selectors";

import moment from "moment";

import {
  setReservationDate,
  setReservationHour,
  setReservationSeats,
  clearReservationHour,
  clearReservationDate,
} from "../../redux/reducers/reservation/reservation.actions";

import {
  selectDate,
  selectHour,
} from "../../redux/reducers/reservation/reservation.selectors";

import { useLocation } from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { PickupText, LayoutContainer } from "../../utils/styles/styles";

import Select from "../select/Select";

const RestaurantPrompts = () => {
  const [currentPromptWindow, setCurrentPromptWindow] = useState(1);
  const location = useLocation();
  console.log(location);

  const setNewState = (direction) => {
    setCurrentPromptWindow((prevState) => prevState + direction);
  };

  return (
    <LayoutContainer>
      {currentPromptWindow === 1 && <SeatsPrompt setState={setNewState} />}
      {currentPromptWindow === 2 && <TimePrompt setState={setNewState} />}
    </LayoutContainer>
  );
};

const SeatsPrompt = ({ setState }) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState(1);
  const screen = useSelector(selectScreen);

  const handleButton = () => {
    dispatch(setReservationSeats(Number(option)));
    setState(1);
  };

  return (
    <Container screen={screen}>
      <PromptText>How many of you are willing to be served?</PromptText>
      <InlineWrapper>
        <Select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          options={[1, 2, 3, 4, 5, 6]}
        />
        <ContinueButton onClick={handleButton}>Continue</ContinueButton>
      </InlineWrapper>
    </Container>
  );
};

const hours = [
  {
    hour: 12,
    minute: 30,
    isAvailable: false,
  },
  {
    hour: 13,
    minute: 30,
    isAvailable: true,
  },
  {
    hour: 14,
    minute: 30,
    isAvailable: true,
  },
  {
    hour: 15,
    minute: 30,
    isAvailable: false,
  },
];

const TimePrompt = ({ setState }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectDate);
  const selectedHour = useSelector(selectHour);
  const screen = useSelector(selectScreen);
  const [value, setValue] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState(selectedHour);

  useEffect(() => {
    dispatch(setReservationDate(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleHour = (pickedTime) => {
    const { hour, minute } = pickedTime;
    if (JSON.stringify(pickedTime) !== JSON.stringify(time)) {
      dispatch(setReservationHour(pickedTime));
      setTime({ hour, minute });
    }
  };

  const handleButtonBack = () => {
    dispatch(clearReservationHour());
    dispatch(clearReservationDate());
    setState(-1);
  };

  return (
    <Container screen={screen}>
      <PromptText>Which day and hour is suitable?</PromptText>
      <InlineWrapper direction={"column"}>
        <Calendar
          minDate={new Date()}
          value={new Date(value)}
          onChange={(e) => setValue(moment(e).format("YYYY-MM-DD"))}
        />

        <TimeContainer>
          {hours.map(({ hour, minute, isAvailable }) => {
            let formattedTime = `${hour}:${minute}`;
            return (
              <TimeContent
                selected={`${time?.hour}:${time?.minute}` === formattedTime}
                disabled={!isAvailable}
                onClick={() => handleHour({ hour, minute })}
              >
                {formattedTime}
              </TimeContent>
            );
          })}
        </TimeContainer>
      </InlineWrapper>
      <InlineWrapper>
        <ContinueButton onClick={handleButtonBack}>Back</ContinueButton>
        <ContinueButton
          onClick={() => console.log("Sdkasd")}
          disabled={
            selectedDate === null || selectedHour === null ? true : false
          }
        >
          Continue
        </ContinueButton>
      </InlineWrapper>
    </Container>
  );
};

export default RestaurantPrompts;
