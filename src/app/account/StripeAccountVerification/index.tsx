import React from 'react'
import Dumb from './StripeAccountVerification'
import { useStripeAccountQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const StripeAccountVerification = (): JSX.Element => {
  const { data, loading, error } = useStripeAccountQuery({
    variables: { refresh: true },
  })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default StripeAccountVerification
