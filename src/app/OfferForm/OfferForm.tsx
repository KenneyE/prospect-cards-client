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
import {
  SaveOfferMutationVariables,
  TempConfirmOfferMutationFn,
} from 'types/graphql'
import { useStripe } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'
import LoadingButton from 'app/common/LoadingButton'
import DollarField from 'app/common/formFields/DollarField'

interface Props {
  listingId: number;
  onSubmit: (variables: SaveOfferMutationVariables) => void;
  loading: boolean;
  open: boolean;
  handleClose: VoidFunction;
  confirmOffer: TempConfirmOfferMutationFn;
  clientSecret?: string;
  offerId?: number;
}

const OfferForm = ({
  listingId,
  onSubmit,
  loading,
  open,
  handleClose,
  confirmOffer,
  clientSecret,
  offerId,
}: Props): JSX.Element => {
  const stripe = useStripe()
  const [loadingAgreed, setLoadingAgreed] = useState(false)

  const onAgree = () => {
    if (!clientSecret || !offerId || !stripe) {
      return
    }

    setLoadingAgreed(true)
    stripe.confirmCardPayment(clientSecret).then(
      async({ error }): Promise<void> => {
        if (error) {
          toast.error(error.message)
        } else {
          toast.success('Offer submitted. Good luck!')
          await confirmOffer({ variables: { offerId } })
          handleClose()
        }
        setLoadingAgreed(false)
      },
    )
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
              <LoadingButton loading={ loading } type='submit'>
                Make Offer
              </LoadingButton>
            </Form>
          )
        }}
      </Formik>
      <Dialog
        onClose={ handleClose }
        aria-labelledby='simple-dialog-title'
        open={ open }
      >
        <DialogTitle id='alert-dialog-title'>Make an offer?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            By agreeing, you authorize us to charge you at a later time upon the
            seller accepting your offer.
            <br />
            Your offer is valid for 24 hours. The seller can reject your offer,
            make a counter-offer, or accept it as is.
            <br />
            You can make 5 offers on this listing in total.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose } color='secondary'>
            Nevermind
          </Button>
          <LoadingButton
            variant='outlined'
            color='primary'
            loading={ loadingAgreed }
            disabled={ !stripe || !clientSecret }
            onClick={ onAgree }
          >
            Make Offer
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default OfferForm
