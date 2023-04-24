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
import axios from "axios";

import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

import { selectReservation } from "../../redux/reducers/reservation/reservation.selectors";

import {
  sendOrderToDatabase,
  sendPaymentToDatabase,
} from "../../utils/firebase/resevation";

const stripePromise = loadStripe(Config.StripePublishableKey);

const Stripe = ({ price }) => {
  const [clientSecret, setClientSecret] = useState(undefined);

  useEffect(() => {
    if (price !== 0) {
      axios
        .post(
          `${Config.BackendEndPoint}/get-payment-intent`,
          { price: price },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(({ data }) => setClientSecret(data.client_secret));
    }
  }, [price]);

  console.log(clientSecret);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["payment-intent"],
  //   queryFn: () =>
  //     axios
  //       .post(
  //         `${Config.BackendEndPoint}/get-payment-intent`,
  //         {
  //           price: totalPrice,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => res.json()),
  // });
  // useEffect(() => {
  //   if (data) {
  //     setClientSecret(data.client_secret);
  //   }
  // }, [data]);
  // if (isLoading) return <Loader />;
  // if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {clientSecret && (
        <>
          <SectionTitle>Payment information</SectionTitle>
          <ElementContainer>
            <CheckoutForm price={[price]} />
            {/* <TotalAmount price={price} handlePurchase={handleSubmit} /> */}
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
  console.log(reservation);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    sendOrderToDatabase(user.uid, { ...reservation, id: uuidv4() });

    // const { error } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: "http://localhost:3001/payment-status",
    //   },
    // });

    // if (error) {
    // }
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

const TotalAmount = ({ price, handlePurchase }) => {
  return (
    <>
      <Line></Line>
      <PriceContainer>
        <InlineWrapper>
          <PriceText>Total</PriceText>
          <Price>{price}€</Price>
        </InlineWrapper>

        <PrimaryButton onClick={handlePurchase}>Pay</PrimaryButton>
      </PriceContainer>
    </>
  );
};

export default Stripe;
