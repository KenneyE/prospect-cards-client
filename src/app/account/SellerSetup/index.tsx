import React from 'react'
import Dumb from './SellerSetup'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { useStripeAccountQuery } from 'types/graphql'

const SellerSetup = (): JSX.Element => {
  const { data, loading, error } = useStripeAccountQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } />
}

export default SellerSetup
