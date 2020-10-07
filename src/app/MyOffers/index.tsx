import React from 'react'
import Dumb from './MyOffers'
import { useUserOffersQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const MyOffers = (): JSX.Element => {
  const { data, loading, error } = useUserOffersQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default MyOffers
