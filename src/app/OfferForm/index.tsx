import React from 'react'
import Dumb from './OfferForm'
import { useSaveOfferMutation } from 'types/graphql'

interface Props {
  listingId: number;
}

const OfferForm = (props: Props): JSX.Element => {
  const [saveOffer] = useSaveOfferMutation()

  return <Dumb saveOffer={ saveOffer } { ...props } />
}

export default OfferForm
