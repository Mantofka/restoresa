import React, { useState } from "react";
import {
  Container,
  ContinueButton,
  TimeContainer,
  TimeContent,
} from "./RestaurantPrompts.styles";

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
  return (
    <Container>
      <PickupText style={{ width: "20ch" }}>
        How many of you are willing to be served?
      </PickupText>
      <InlineWrapper>
        <Select options={[1, 2, 3, 4, 5, 6]} />
        <ContinueButton onClick={() => setState(1)}>Continue</ContinueButton>
      </InlineWrapper>
    </Container>
  );
};

const TimePrompt = (onSet) => {
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
