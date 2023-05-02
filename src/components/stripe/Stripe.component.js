import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
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
