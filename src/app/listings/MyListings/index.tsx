import React from 'react'
import Dumb from './MyListings'
import { useListingsQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const MyListings = (): JSX.Element => {
  const { data, loading, error } = useListingsQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default MyListings
