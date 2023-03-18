import React, { useState } from "react";
import {
  Container,
  ContinueButton,
  TimeContainer,
  TimeContent,
} from "./RestaurantPrompts.styles";

import { useSelector, useDispatch } from "react-redux";

import {
  setReservationDate,
  setReservationHour,
  setReservationSeats,
} from "../../redux/reducers/reservation/reservation.actions";

import { useLocation } from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  PickupText,
  LayoutContainer,
  InlineWrapper,
} from "../../utils/styles/styles";

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
      {currentPromptWindow === 2 && <TimePrompt />}
    </LayoutContainer>
  );
};

const SeatsPrompt = ({ setState }) => {
  const dispatch = useDispatch();
  const [option, setOption] = useState(1);

  const handleButton = () => {
    dispatch(setReservationSeats(Number(option)));
    setState(1);
  };

  return (
    <Container>
      <PickupText style={{ width: "20ch" }}>
        How many of you are willing to be served?
      </PickupText>
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

const TimePrompt = (onSet) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState(null);

  return (
    <Container>
      <PickupText style={{ width: "20ch" }}>
        Which day and hour is suitable?
      </PickupText>
      <InlineWrapper>
        <Calendar minDate={new Date()} value={value} onChange={setValue} />

        <TimeContainer>
          <TimeContent disabled onClick={() => setTime("12:30")}>
            12:30
          </TimeContent>
          <TimeContent
            selected={time === "13:30"}
            onClick={() => setTime("13:30")}
          >
            13:30
          </TimeContent>
          <TimeContent
            selected={time === "14:30"}
            onClick={() => setTime("14:30")}
          >
            14:30
          </TimeContent>
          <TimeContent disabled onClick={() => setTime("15:30")}>
            15:30
          </TimeContent>
        </TimeContainer>
      </InlineWrapper>
      <ContinueButton>Continue</ContinueButton>
    </Container>
  );
};

export default RestaurantPrompts;
