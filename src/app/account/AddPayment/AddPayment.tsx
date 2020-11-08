import React from 'react'
import { AddPaymentQuery } from 'types/graphql'
import { Button, Grid, TextField } from '@material-ui/core'
import { toast } from 'react-toastify'
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js'
import ErrorMessage from 'app/common/ErrorMessage'
import * as Stripe from '@stripe/stripe-js'
import { Form, Formik } from 'formik'
import { StripeTextField } from 'app/stripe/StripeTextField'

interface Props {
  data: AddPaymentQuery;
}

const AddPayment = ({
  data: { stripeCheckoutSessionId },
}: Props): JSX.Element => {
  const stripe = useStripe()
  const elements = useElements()

  const initialValues = {
    email: '',
    phone: '',
    name: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
    },
  }

  const handleSubmit = async(
    values: Stripe.PaymentMethodCreateParams.BillingDetails,
  ) => {
    const cardElement = elements?.getElement(CardElement)

    // When the customer clicks on the button, redirect them to Checkout.
    if (!stripe || !cardElement) return <ErrorMessage />
    const { error } = await stripe.confirmCardSetup(stripeCheckoutSessionId, {
      payment_method: {
        card: cardElement,
        billing_details: values,
      },
    })

    if (error) {
      toast.error(error.message)
    }
  }

  return (
    <Formik<Stripe.PaymentMethodCreateParams.BillingDetails>
      initialValues={ initialValues }
      onSubmit={ handleSubmit }
    >
      {({ handleChange, values }) => (
        <Form>
          <Grid container spacing={ 2 }>
            <Grid item md={ 12 }>
              <StripeTextField
                label='Card Number'
                inputProps={ {
                  options: {
                    showIcon: true,
                  },
                } }
                stripeElement={ CardNumberElement }
                variant='outlined'
              />
            </Grid>

            <Grid item md={ 6 }>
              <StripeTextField
                label='Expiration'
                inputProps={ {
                  options: {
                    showIcon: true,
                  },
                } }
                stripeElement={ CardExpiryElement }
                variant='outlined'
              />
            </Grid>
            <Grid item md={ 6 }>
              <StripeTextField
                label='CVC'
                inputProps={ {
                  options: {
                    showIcon: true,
                  },
                } }
                stripeElement={ CardCvcElement }
                variant='outlined'
              />
            </Grid>

            <Grid item xs={ 12 }>
              <TextField
                label='Name'
                id='name'
                required
                value={ values.name }
                onChange={ handleChange }
                fullWidth
                variant='outlined'
              />
            </Grid>
            <Grid item xs={ 12 }>
              <TextField
                label='Email'
                id='email'
                required
                value={ values.email }
                onChange={ handleChange }
                fullWidth
                variant='outlined'
              />
            </Grid>
            <Grid item xs={ 12 }>
              <TextField
                label='Phone'
                id='phone'
                required
                value={ values.phone }
                onChange={ handleChange }
                fullWidth
                variant='outlined'
              />
            </Grid>
            <Grid item xs={ 12 }>
              <Button type='submit' disabled={ !stripe }>
                Save Card
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default AddPayment
