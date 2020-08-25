import React from 'react'
import { AddPaymentQuery } from 'types/graphql'
import { Button } from '@material-ui/core'
import { loadStripe } from '@stripe/stripe-js'
import ErrorMessage from 'app/common/ErrorMessage'

interface Props {
  data: AddPaymentQuery;
}
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY as string,
)

const AddPayment = ({
  data: { stripeCheckoutSessionId },
}: Props): JSX.Element => {
  const handleClick = async() => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise

    if (!stripe) return <ErrorMessage/>
    const { error } = await stripe.redirectToCheckout({
      sessionId: stripeCheckoutSessionId,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }

  return <Button onClick={ handleClick }>Add Payment Method</Button>
}

export default AddPayment
