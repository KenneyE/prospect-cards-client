import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import { SaveOfferMutationVariables } from 'types/graphql'
import { useStripe } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'
import LoadingButton from 'app/common/LoadingButton'
import DollarField from 'app/common/DollarField'

interface Props {
  listingId: number;
  onSubmit: (variables: SaveOfferMutationVariables) => void;
  open: boolean;
  handleClose: VoidFunction;
  clientSecret?: string;
}

const OfferForm = ({
  listingId,
  onSubmit,
  open,
  handleClose,
  clientSecret,
}: Props): JSX.Element => {
  const stripe = useStripe()
  const [loading, setLoading] = useState(false)

  const onAgree = () => {
    if (!clientSecret || !stripe) {
      return
    }

    setLoading(true)
    stripe.confirmCardPayment(clientSecret).then(({ error }) => {
      setLoading(false)
      if (error) {
        toast.error(error.message)
      } else {
        toast.success('Offer submitted. Good luck!')
        handleClose()
      }
    })
  }

  return (
    <>
      <Formik
        initialValues={ { offer: { listingId, price: 10 } } }
        onSubmit={ onSubmit }
      >
        {({ values, setFieldValue }) => {
          return (
            <Form>
              <TextField
                value={ values.offer.price }
                onChange={ (price) => setFieldValue('offer.price', +price) }
                variant='outlined'
                InputProps={ {
                  inputComponent: DollarField as any,
                  name: 'offer.price',
                } }
              />
              <Button type='submit'>Make Offer</Button>
            </Form>
          )
        }}
      </Formik>
      <Dialog
        onClose={ handleClose }
        aria-labelledby='simple-dialog-title'
        open={ open }
      >
        <DialogTitle id='alert-dialog-title'>
          Do you accept this payment?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Be agreeing, you authorize us to charge you at a later date upon the
            seller accepting your offer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose } color='primary'>
            Disagree
          </Button>
          <LoadingButton
            loading={ loading }
            disabled={ !stripe || !clientSecret }
            onClick={ onAgree }
          >
            I Accept
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default OfferForm
