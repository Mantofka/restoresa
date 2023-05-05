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

import { SectionContainer, Wrapper } from "./PaymentPage.styles";
import { selectPrice } from "../../redux/reducers/payment/payment.selectors";

import Progress from "../payment-progress/Progress";

import { MiddleScreen } from "../../utils/styles/styles";

import Config from "../../config";
import Loader from "../loader/Loader";
const stripePromise = loadStripe(Config.StripePublishableKey);

function PaymentPage() {
  const reservationData = useReservation();
  const restaurant = useSelector(selectReservationRestaurant);
  const totalPrice = useSelector(selectTotalPrice);
  const price = useSelector(selectPrice);
  const [finalPrice, setFinalPrice] = useState(0);
  const [isFetched, setisFetched] = useState(false);

  const screen = useScreen();
  const [clientSecret, setClientSecret] = useState(undefined);

  useEffect(() => {
    if (Number(totalPrice) > 0) setFinalPrice(Number(totalPrice));
    else if (Number(price) > 0) setFinalPrice(Number(price));
  }, [totalPrice, price]);
  useEffect(() => {
    if (Number(finalPrice) > 0 && !isFetched) {
      axios
        .post(
          `${Config.BackendEndPoint}/get-payment-intent`,
          { price: finalPrice },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(({ data }) => setClientSecret(data.client_secret));
      setisFetched(true);
    }
  }, [finalPrice]);

  if (!clientSecret)
    return (
      <LayoutContainer>
        <MiddleScreen>
          <Loader />
        </MiddleScreen>
      </LayoutContainer>
    );

  return (
    <LayoutContainer style={{ padding: "100px 0" }}>
      <SectionContainer>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Progress />
          {finalPrice ? (
            <Stripe price={finalPrice} clientSecret={clientSecret} />
          ) : null}
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
