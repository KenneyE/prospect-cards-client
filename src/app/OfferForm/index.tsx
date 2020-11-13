import React, { useState } from 'react'
import Dumb from './OfferForm'
import {
  SaveOfferMutationVariables,
  useSaveOfferMutation,
  useListingPriceQuery,
  useConfirmOfferMutation,
  Maybe,
} from 'types/graphql'
import { toast } from 'react-toastify'

interface Props {
  listingId: number;
  buyNow?: boolean;
}

const OfferForm = (props: Props): Maybe<JSX.Element> => {
  const { data } = useListingPriceQuery({ variables: { id: props.listingId } })
  const [saveOffer, { loading }] = useSaveOfferMutation()
  const [confirmOffer] = useConfirmOfferMutation()
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

  if (!data) return null

  return (
    <Dumb
      onSubmit={ onSubmit }
      price={ data.listing.price }
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
