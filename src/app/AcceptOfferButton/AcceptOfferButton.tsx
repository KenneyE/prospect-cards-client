import React from 'react'
import { AcceptOfferMutationFn } from 'types/graphql'
import { Button } from '@material-ui/core'

interface Props {
  acceptOffer: AcceptOfferMutationFn;
}

const AcceptOfferButton = ({ acceptOffer }: Props): JSX.Element => {
  return (
    <Button
      onClick={ () => {
        acceptOffer()
      } }
    >
      Accept
    </Button>
  )
}

export default AcceptOfferButton
