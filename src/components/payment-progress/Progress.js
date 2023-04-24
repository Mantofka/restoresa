import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../utils/styles/styles";
import { ElementContainer, Title, DarkenText, Column } from "./Progress.styles";
import { useStripe } from "@stripe/react-stripe-js";

import moment from "moment";

import { useScreen } from "../../utils/ui/useScreen";

const ProgressContainer = () => {
  const stripe = useStripe();
  const screen = useScreen();
  const [paymentProgress, setPaymentProgress] = useState({
    state: "unpaid",
    message: "",
  });

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (clientSecret) {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        console.log(paymentIntent);
        switch (paymentIntent.status) {
          case "processing":
            setPaymentProgress({
              state: "processing",
              message: "Wohoo! Payment received.",
            });
            break;
          case "succeeded":
            setPaymentProgress({
              state: "success",
              message: "Payment processing.",
            });
            break;
          case "requires_payment_method":
            setPaymentProgress({
              state: "failed",
              message: "Payment failes. Please try another payment method",
            });
            break;
          default:
            setPaymentProgress({
              state: "unpaid",
              message: "Something went wrong. Please try again later.",
            });
        }
      });
    }
    
  }, [stripe]);

  return (
    <>
      <SectionTitle>Progress Information</SectionTitle>
      <ElementContainer screen={screen}>
        <Column>
          <Title>Status</Title>
          <DarkenText>Pending</DarkenText>
        </Column>
        <Column>
          <Title>Transaction ID</Title>
          <DarkenText>BX1578454AS</DarkenText>
        </Column>
        <Column>
          <Title>Payment issued</Title>
          <DarkenText> {moment().format("MMM Do YYYY, h:mm a")}</DarkenText>
        </Column>
      </ElementContainer>
    </>
  );
}

const Progress = () => {
  const stripe = useStripe();
  const screen = useScreen();
  const [paymentProgress, setPaymentProgress] = useState({
    state: "unpaid",
    message: "",
  });

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (clientSecret) {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        console.log(paymentIntent);
        switch (paymentIntent.status) {
          case "processing":
            setPaymentProgress({
              state: "processing",
              message: "Wohoo! Payment received.",
            });
            break;
          case "succeeded":
            setPaymentProgress({
              state: "success",
              message: "Payment processing.",
            });
            break;
          case "requires_payment_method":
            setPaymentProgress({
              state: "failed",
              message: "Payment failes. Please try another payment method",
            });
            break;
          default:
            setPaymentProgress({
              state: "unpaid",
              message: "Something went wrong. Please try again later.",
            });
        }
      });
    }
  }, [stripe]);

  return (
    <>
      <SectionTitle>Progress Information</SectionTitle>
      <ElementContainer screen={screen}>
        <Column>
          <Title>Status</Title>
          <DarkenText>Pending</DarkenText>
        </Column>
        <Column>
          <Title>Transaction ID</Title>
          <DarkenText>BX1578454AS</DarkenText>
        </Column>
        <Column>
          <Title>Payment issued</Title>
          <DarkenText> {moment().format("MMM Do YYYY, h:mm a")}</DarkenText>
        </Column>
      </ElementContainer>
    </>
  );
};

export default Progress;
