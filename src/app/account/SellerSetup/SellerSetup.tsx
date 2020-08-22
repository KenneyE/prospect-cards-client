import React from 'react'
import useStyles from './styles'
import { SellerSetupQuery } from 'types/graphql'

interface Props {
  data: SellerSetupQuery;
}

const SellerSetup = ({
  data: {
    viewer: {
      stripeAccount: { onboardingLink },
    },
  },
}: Props): JSX.Element => {
  const classes = useStyles()

  return <div>{onboardingLink}</div>
}

export default SellerSetup
