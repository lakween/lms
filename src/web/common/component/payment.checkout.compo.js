import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@chakra-ui/react";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LT7fiI7sT9CamFr6mecB9mIPwsfFGr6zwJWHfegsTBIMTK41Pzkr1EVdggnwOtuDMZ3PYwAUMg49YiXDp9GpMSh00iYGH5l2X"
    );
  }

  return stripePromise;
};

const CheckoutForm = (props) => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1LUAbyI7sT9CamFrRyjVOJKQ",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/payment/success/${props.courseid}`,
    cancelUrl: `${window.location.origin}/payment/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (

    <Button
      colorScheme="blue"
      onClick={redirectToCheckout}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Checkout"}
    </Button>
  );
};

export default CheckoutForm;
