import React, { useState, useEffect } from "react";
import {
  Container,
  ContinueButton,
  TimeContainer,
  TimeContent,
  InlineWrapper,
  PromptText,
} from "./RestaurantPrompts.styles";

import axios from "axios";

import Loader from "../loader/Loader";

import { useNavigate, useParams } from "react-router-dom";

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
  selectSeats,
} from "../../redux/reducers/reservation/reservation.selectors";

import { useLocation } from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { LayoutContainer } from "../../utils/styles/styles";

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
  const { id } = useParams();

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

const TimePrompt = ({ setState }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedDate = useSelector(selectDate);
  const selectedHour = useSelector(selectHour);
  const [isFetching, setIsFetching] = useState(false);
  const screen = useSelector(selectScreen);
  const seats = useSelector(selectSeats);
  const [timeSlots, setTimeSlots] = useState([]);
  const [value, setValue] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState(selectedHour);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(setReservationDate(value));
  }, [value]);

  useEffect(() => {
    if (!isFetching && selectedDate) {
      setIsFetching(true);
      axios({
        method: "get",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        withCredentials: false,
        url: `https://us-central1-restoresa-65368.cloudfunctions.net/getTablesByPrompts?restaurant=${id}&seats=${seats}&date=${selectedDate}`,
      })
        .then((res) => {
          setTimeSlots(res?.data?.data.timeSlots);
          setIsFetching(false);
        })
        .catch((err) => {
          setError(JSON.stringify(err));
        });
    }
  }, [selectedDate]);

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
      <p>{error}</p>
      <InlineWrapper direction={"column"}>
        <Calendar
          minDate={new Date()}
          value={new Date(value)}
          onChange={(e) => setValue(moment(e).format("YYYY-MM-DD"))}
        />

        {!isFetching ? (
          <TimeContainer>
            {timeSlots.map(({ hour, minute, isAllocated }) => {
              let formattedTime;
              if (hour < 10 && minute < 10) {
                formattedTime = `0${hour}:${minute}0`;
              } else if (hour < 10) {
                formattedTime = `0${hour}:${minute}`;
              } else if (minute < 10) {
                formattedTime = `${hour}:${minute}0`;
              } else {
                formattedTime = `${hour}:${minute}`;
              }
              return (
                <TimeContent
                  selected={
                    `${time?.hour}:${time?.minute}` === `${hour}:${minute}`
                  }
                  disabled={isAllocated}
                  onClick={() => handleHour({ hour, minute })}
                >
                  {formattedTime}
                </TimeContent>
              );
            })}
          </TimeContainer>
        ) : (
          <Loader />
        )}
      </InlineWrapper>
      <InlineWrapper>
        <ContinueButton onClick={handleButtonBack}>Back</ContinueButton>
        <ContinueButton
          onClick={() => navigate("./food")}
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
