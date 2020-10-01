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
  Typography,
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import { SaveOfferMutationVariables } from 'types/graphql'
import { useStripe } from '@stripe/react-stripe-js'
import { toast } from 'react-toastify'
import LoadingButton from 'app/common/LoadingButton'

interface Props {
  listingId: number;
  onSubmit: (variables: SaveOfferMutationVariables) => void;
  open: boolean;
  handleClose: VoidFunction;
  clientSecret?: string;
}

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (value: string) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      { ...other }
      getInputRef={ inputRef }
      onValueChange={ (values) => {
        onChange(values.value)
      } }
      thousandSeparator
      isNumericString
      decimalScale={ 2 }
      allowNegative={ false }
      prefix='$'
    />
  )
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
                  inputComponent: NumberFormatCustom as any,
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
