import React, { useState } from 'react'
import Dumb from './OfferForm'
import {
  SaveOfferMutationVariables,
  useSaveOfferMutation,
  useTempConfirmOfferMutation,
} from 'types/graphql'
import { toast } from 'react-toastify'

interface Props {
  listingId: number;
}

const OfferForm = (props: Props): JSX.Element => {
  const [saveOffer, { loading }] = useSaveOfferMutation()
  const [confirmOffer] = useTempConfirmOfferMutation()
  const [open, setOpen] = useState(false)
  const [clientSecret, setClientSecret] = useState<string>()
  const [offerId, setOfferId] = useState<number>()

  const handleClose = () => setOpen(false)

  const onSubmit = (variables: SaveOfferMutationVariables) => {
    saveOffer({ variables }).then(({ data, errors }) => {
      if (errors?.length || !data?.saveOffer) {
        return
      }

      if (data.saveOffer.paymentIntentId && data.saveOffer.offerId) {
        setClientSecret(data.saveOffer.paymentIntentId)
        setOfferId(data.saveOffer.offerId)
        setOpen(true)
      } else {
        toast.error('Please add a payment method first...')
      }
    })
  }

  return (
    <Dumb
      onSubmit={ onSubmit }
      loading={ loading }
      open={ open }
      handleClose={ handleClose }
      confirmOffer={ confirmOffer }
      clientSecret={ clientSecret }
      offerId={ offerId }
      { ...props }
    />
  )
}

export default OfferForm
