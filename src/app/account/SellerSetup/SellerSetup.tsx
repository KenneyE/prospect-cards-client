import React from 'react'
import { Maybe, StripeAccountQuery } from 'types/graphql'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface Props {
  data: StripeAccountQuery;
}

const SellerSetup = ({
  data: {
    viewer: {
      stripeAccount: { onboardingLink },
    },
  },
}: Props): Maybe<JSX.Element> => {
  if (onboardingLink) {
    window.location.href = onboardingLink
    return null
  } else {
    return (
      <>
        <Typography>Looks like you're already all set up!</Typography>
        <Button component={ Link } to='/listings/new'>
          Start Selling
        </Button>
      </>
    )
  }
}

export default SellerSetup
