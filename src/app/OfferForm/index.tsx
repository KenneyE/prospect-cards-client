import React, { useState } from 'react'
import Dumb from './OfferForm'
import {
  SaveOfferMutationVariables,
  useSaveOfferMutation,
} from 'types/graphql'
import { toast } from 'react-toastify'

interface Props {
  listingId: number;
}

const OfferForm = (props: Props): JSX.Element => {
  const [saveOffer] = useSaveOfferMutation()
  const [open, setOpen] = useState(false)
  const [clientSecret, setClientSecret] = useState<string>()

  const handleClose = () => setOpen(false)

  const onSubmit = (variables: SaveOfferMutationVariables) => {
    saveOffer({ variables }).then(({ data, errors }) => {
      if (errors?.length || !data?.saveOffer) {
        return
      }

      if (data.saveOffer.paymentIntentId) {
        setClientSecret(data.saveOffer.paymentIntentId)
        setOpen(true)
      } else {
        toast.error('Please add a payment method first...')
      }
    })
  }

  return (
    <Dumb
      onSubmit={ onSubmit }
      open={ open }
      handleClose={ handleClose }
      clientSecret={ clientSecret }
      { ...props }
    />
  )
}

export default OfferForm
