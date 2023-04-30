import { v4 as uuidv4 } from "uuid";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import Config from "../../config";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/Loader";
import moment from "moment";
import JSAlert from "js-alert";
import {
  SectionTitle,
  PrimaryButton,
  InlineWrapper,
} from "../../utils/styles/styles";
import {
  ElementContainer,
  Line,
  PriceText,
  Price,
  PriceContainer,
} from "./Stripe.styles";

import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

import { selectReservation } from "../../redux/reducers/reservation/reservation.selectors";

const Stripe = ({ price, clientSecret }) => {
  return (
    <>
      {clientSecret && (
        <>
          <SectionTitle>Payment information</SectionTitle>
          <ElementContainer>
            <CheckoutForm price={[price]} />
          </ElementContainer>
        </>
      )}
    </>
  );
};

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector(selectCurrentUser);
  const reservation = useSelector(selectReservation);
  const dispatch = useDispatch();
  console.log(reservation);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!stripe || !elements) return;

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-status`,
        },
      });
      if (error) {
        JSAlert.alert(error.message);
      }
      console.log(error);
    } catch (error) {}
  };
  return (
    <div style={{ width: "100%" }}>
      <form>
        <PaymentElement />
        <>
          <Line></Line>
          <PriceContainer>
            <InlineWrapper>
              <PriceText>Total</PriceText>
              <Price>{price}€</Price>
            </InlineWrapper>

            <PrimaryButton onClick={handleSubmit}>Pay</PrimaryButton>
          </PriceContainer>
        </>
      </form>
    </div>
  );
};

export default Stripe;
