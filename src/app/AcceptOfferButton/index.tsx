import React from 'react'
import Dumb from './AcceptOfferButton'
import { useAcceptOfferMutation } from 'types/graphql'

interface Props {
  offerId: number;
}
const AcceptOfferButton = ({ offerId }: Props): JSX.Element => {
  const [acceptOffer] = useAcceptOfferMutation({
    variables: { offerId },
  })

  return <Dumb acceptOffer={ acceptOffer } />
}

export default AcceptOfferButton
