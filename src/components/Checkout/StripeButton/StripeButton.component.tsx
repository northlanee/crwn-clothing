import React, { FC, ReactElement } from "react";
import StripeCheckout from "react-stripe-checkout";

type PropTypes = {
  price: number;
};

const StripeButton: FC<PropTypes> = ({ price }: PropTypes): ReactElement => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HQ7lGBFwsLpKazumykQWBxLkDomEubiO2HKrB1yMHl7fbYDWdb3dRdpq1RxLofxciQ28Dm0ibq8DTpIWV85dVP300405abSyh";

  const onToken = (token: any) => {
    console.log(token);
    alert("Payment seccessful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
