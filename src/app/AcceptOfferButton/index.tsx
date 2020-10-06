import React from 'react'
import Dumb from './AcceptOfferButton'
import { useAcceptOfferMutation, UserListingsDocument } from 'types/graphql'
import confirm from 'lib/confirm'

interface Props {
  offerId: number;
  price: string;
}
const AcceptOfferButton = ({ offerId, price }: Props): JSX.Element => {
  const [acceptOffer, { loading }] = useAcceptOfferMutation({
    variables: { offerId },
    refetchQueries: [{ query: UserListingsDocument }],
    awaitRefetchQueries: true,
  })

  const onClick = async() => {
    const resp = await confirm(`Sell this listing for ${price}?`)

    if (resp) {
      acceptOffer()
    }
  }

  return <Dumb onClick={ onClick } loading={ loading } />
}

export default AcceptOfferButton
