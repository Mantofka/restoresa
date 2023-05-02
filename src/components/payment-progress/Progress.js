import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  SectionTitle,
  LayoutContainer,
  PrimaryButton,
} from "../../utils/styles/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  ElementContainer,
  Title,
  DarkenText,
  Column,
  StatusContainer,
} from "./Progress.styles";
import { useStripe, Elements } from "@stripe/react-stripe-js";
import Loader from "../loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { clearReservationData } from "../../redux/reducers/reservation/reservation.actions";

import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

import { selectReservation } from "../../redux/reducers/reservation/reservation.selectors";

import { useNavigate } from "react-router-dom";

import Config from "../../config";

import { loadStripe } from "@stripe/stripe-js";

import { useScreen } from "../../utils/ui/useScreen";

import moment from "moment";
import { sendOrderToDatabase } from "../../utils/firebase/resevation";

const stripePromise = loadStripe(Config.StripePublishableKey);

const ProgressContainer = ({ secret }) => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const screen = useScreen();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [isFetched, setIsFetched] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const reservation = useSelector(selectReservation);
  const [intent, setIntent] = useState(null);
  const [paymentProgress, setPaymentProgress] = useState({
    state: "",
    message: "",
  });

  useEffect(() => {
    if (!stripe) return;

    if (secret && !isFetched && user) {
      setIsFetched(true);
      stripe
        .retrievePaymentIntent(secret)
        .then(({ paymentIntent }) => {
          setIntent(paymentIntent);
          switch (paymentIntent.status) {
            case "processing":
              setPaymentProgress({
                state: "Processing",
                message: "Wohoo! Payment received.",
              });

              break;
            case "succeeded":
              setPaymentProgress({
                state: "Success",
                message: "Payment processing.",
              });
              break;
            case "requires_payment_method":
              setPaymentProgress({
                state: "Failed",
                message: "Payment failes. Please try another payment method",
              });
              break;
            default:
              setPaymentProgress({
                state: "Unpaid",
                message: "Something went wrong. Please try again later.",
              });
          }
        })
        .then(() => {});
    }
  }, [stripe, user]);

  useEffect(() => {
    let timeout;
    if (paymentProgress.state !== "" && !isSent) {
      timeout = setTimeout(() => {
        sendOrderToDatabase(
          user.uid,
          {
            ...reservation,
            id: uuidv4(),
          },
          { id: intent.id, status: intent.status, secret: intent.client_secret }
        );
        dispatch(clearReservationData());
        setIsSent(true);
      }, 1500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [paymentProgress]);

  if (!secret) return;

  return (
    <>
      <SectionTitle>Progress Information</SectionTitle>
      <ElementContainer screen={screen} style={{minHeight: '120px'}}>
        <Column>
          <Title>Status</Title>
          <DarkenText>{paymentProgress.state}</DarkenText>
        </Column>
        <Column>
          <Title>Transaction ID</Title>
          <DarkenText>BX1578454AS</DarkenText>
        </Column>
        <Column>
          <Title>Payment issued</Title>
          <DarkenText> {moment().format("MMM Do YYYY, h:mm a")}</DarkenText>
        </Column>
        {paymentProgress.state !== "Success" && (
          <Column justify={"center"}>
            <Loader />
          </Column>
        )}
        <PrimaryButton onClick={() => navigate("/")}>
          Back to Homepage
        </PrimaryButton>
      </ElementContainer>
    </>
  );
};

const Progress = () => {
  const screen = useScreen();
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  );

  return (
    <>
      {!clientSecret ? (
        <ProgressContainer secret={clientSecret} />
      ) : (
        <LayoutContainer screen={screen}>
          <StatusContainer>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <ProgressContainer secret={clientSecret} />
            </Elements>
          </StatusContainer>
        </LayoutContainer>
      )}
    </>
  );
};

export default Progress;
