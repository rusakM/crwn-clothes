import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KMdZqGik6FmdC2bBCc0qupSejlskVoS5B1T2Yj9oEZX1zNXMppPyqH0IcA6dUN36o1ZKQ77sgHjvI8Y7JP6L1t5004y7xAXZw";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
      locale="pl"
      currency="PLN"
    />
  );
};

export default StripeCheckoutButton;
