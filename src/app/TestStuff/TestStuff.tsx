import React from 'react'
import { FakeChargeQuery } from 'types/graphql'
import { Button } from '@material-ui/core'
import { useStripe } from '@stripe/react-stripe-js'

interface Props {
  data: FakeChargeQuery;
}

const TestStuff = ({ data }: Props): JSX.Element => {
  const stripe = useStripe()

  return (
    <Button
      onClick={ () => stripe?.confirmCardPayment(data.viewer.paymentIntent) }
    >
      Fake it
    </Button>
  )
}

export default TestStuff
