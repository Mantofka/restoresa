import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentElement, useElements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import Config from "../../config";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/Loader";
<Loader />;

const stripePromise = loadStripe(Config.StripePublishableKey);

const Stripe = () => {
  const [clientSecret, setClientSecret] = useState(undefined);
  const { isLoading, error, data } = useQuery({
    queryKey: ["payment-intent"],
    queryFn: () =>
      fetch(`${Config.BackendEndPoint}/get-payment-intent`).then((res) =>
        res.json()
      ),
  });
  useEffect(() => {
    if (data) {
      setClientSecret(data.client_secret);
    }
  }, [data]);
  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

const CheckoutForm = () => {
  const elements = useElements();
  console.log(elements);
  return (
    <div style={{ width: "30%", margin: "200px auto" }}>
      <form>
        <PaymentElement />
        {/* <button disabled={isLoading || !stripe || !elements} id='submit'>
          <span id='button-text'>
            {isLoading ? (
              <div className='spinner' id='spinner'></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button> */}
      </form>
    </div>
  );
};

export default Stripe;
