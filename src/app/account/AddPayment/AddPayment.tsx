import React from 'react'
import { AddPaymentQuery } from 'types/graphql'
import { Button } from '@material-ui/core'
import { toast } from 'react-toastify'
import { useStripe } from '@stripe/react-stripe-js'
import ErrorMessage from 'app/common/ErrorMessage'

interface Props {
  data: AddPaymentQuery;
}

const AddPayment = ({
  data: { stripeCheckoutSessionId },
}: Props): JSX.Element => {
  const stripe = useStripe()

  const handleClick = async() => {
    // When the customer clicks on the button, redirect them to Checkout.
    if (!stripe) return <ErrorMessage />
    const { error } = await stripe.redirectToCheckout({
      sessionId: stripeCheckoutSessionId,
    })

    if (error) {
      toast.error(error.message)
    }
  }

  return <Button onClick={ handleClick }>Add Payment Method</Button>
}

export default AddPayment
