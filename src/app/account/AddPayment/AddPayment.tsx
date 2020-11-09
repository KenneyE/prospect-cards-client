import React, { useState } from 'react'
import { AddPaymentQuery, SyncPaymentMutationFn } from 'types/graphql'
import { Grid, TextField, Typography } from '@material-ui/core'
import { toast } from 'react-toastify'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import ErrorMessage from 'app/common/ErrorMessage'
import * as Stripe from '@stripe/stripe-js'
import { Form, Formik, FormikHelpers } from 'formik'
import { StripeTextField } from 'app/stripe/StripeTextField'
import LoadingButton from 'app/common/LoadingButton'

interface Props {
  data: AddPaymentQuery;
  syncPayment: SyncPaymentMutationFn;
}

type Values = Required<
Pick<Stripe.PaymentMethodCreateParams.BillingDetails, 'name' | 'address'>
>;

const AddPayment = ({
  data: {
    stripeSetupIntentId,
    viewer: { paymentMethod },
  },
  syncPayment,
}: Props): JSX.Element => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const initialValues: Values = {
    name: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      country: 'US',
    },
  }

  const handleSubmit = async(
    values: Values,
    { resetForm }: FormikHelpers<Values>,
  ) => {
    setLoading(true)
    const cardElement = elements?.getElement(CardElement)

    // When the customer clicks on the button, redirect them to Checkout.
    if (!stripe || !cardElement) return <ErrorMessage />
    const { error, setupIntent } = await stripe.confirmCardSetup(
      stripeSetupIntentId,
      {
        payment_method: {
          card: cardElement,
          billing_details: values,
        },
      },
    )

    if (error) {
      toast.error(error.message)
    } else {
      if (setupIntent?.payment_method) {
        await syncPayment({
          variables: { paymentMethodId: setupIntent.payment_method },
        })
      }
      cardElement.clear()
      resetForm()
    }

    setLoading(false)
  }

  return (
    <Grid container>
      {paymentMethod && (
        <Grid item xs={ 12 }>
          <Typography>{paymentMethod.brand}</Typography>
          <Typography>xxxx-xxxx-xxxx-{paymentMethod.last4}</Typography>
        </Grid>
      )}
      <Formik<Values> initialValues={ initialValues } onSubmit={ handleSubmit }>
        {({ handleChange, values }) => (
          <Form>
            <Grid container spacing={ 2 }>
              <Grid item md={ 12 }>
                <StripeTextField
                  label='Card'
                  stripeElement={ CardElement }
                  variant='outlined'
                />
              </Grid>

              <Typography>Billing Address</Typography>
              <Grid item xs={ 12 }>
                <TextField
                  label='Name'
                  id='name'
                  value={ values.name }
                  onChange={ handleChange }
                  fullWidth
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  label='Address 1'
                  id='address.line1'
                  value={ values.address.line1 }
                  onChange={ handleChange }
                  fullWidth
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  label='Address 1'
                  id='address.line1'
                  value={ values.address.line1 }
                  onChange={ handleChange }
                  fullWidth
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  label='Address 2'
                  id='address.line2'
                  value={ values.address.line2 }
                  onChange={ handleChange }
                  fullWidth
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  label='City'
                  id='address.city'
                  value={ values.address.city }
                  onChange={ handleChange }
                  fullWidth
                  variant='outlined'
                />
              </Grid>
              <Grid item xs={ 12 }>
                <TextField
                  label='State'
                  id='address.state'
                  value={ values.address.state }
                  onChange={ handleChange }
                  fullWidth
                  variant='outlined'
                />
              </Grid>

              <Grid item xs={ 12 }>
                <LoadingButton
                  type='submit'
                  disabled={ !stripe }
                  loading={ loading }
                >
                  Save Card
                </LoadingButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Grid>
  )
}

export default AddPayment
