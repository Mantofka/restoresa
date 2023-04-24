import React, { useEffect, useState } from "react";

import Stripe from "../stripe/Stripe.component";
import { loadStripe } from "@stripe/stripe-js";

import LayoutContainer from "../layout-container/LayoutContainer";
import Restaurant from "../restaurant-information/Restaurant";
import Customer from "../customer-information/Customer";

import { Elements } from "@stripe/react-stripe-js";

import { useSelector } from "react-redux";
import { selectReservationRestaurant } from "../../redux/reducers/reservation/reservation.selectors";
import { selectTotalPrice } from "../../redux/reducers/reservation/reservation.selectors";


import { useReservation } from "../../utils/reservation";
import { useScreen } from "../../utils/ui/useScreen";
import axios from "axios";

import {
  ElementContainer,
  Column,
  Title,
  DarkenText,
  SectionContainer,
  Wrapper,
} from "./PaymentPage.styles";

import Progress from "../payment-progress/Progress";

import Config from "../../config";
import Loader from "../loader/Loader";
const stripePromise = loadStripe(Config.StripePublishableKey);

function PaymentPage() {
  const reservationData = useReservation();
  const restaurant = useSelector(selectReservationRestaurant);
  const totalPrice = useSelector(selectTotalPrice);

  const screen = useScreen();
  const [clientSecret, setClientSecret] = useState(undefined);

  useEffect(() => {
    if (totalPrice !== 0) {
      axios
        .post(
          `${Config.BackendEndPoint}/get-payment-intent`,
          { price: totalPrice },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(({ data }) => setClientSecret(data.client_secret));
    }
  }, [totalPrice]);

  if (!clientSecret) return <Loader />;

  return (
    <LayoutContainer style={{ padding: "100px 0" }}>
      <SectionContainer>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Progress />
          <Stripe price={totalPrice} />
          <Wrapper gap={"20px"} screen={screen}>
            <Customer />
            <Restaurant
              restaurant={restaurant}
              reservationData={reservationData}
            />
          </Wrapper>
        </Elements>
      </SectionContainer>
    </LayoutContainer>
  );
}

export default PaymentPage;
