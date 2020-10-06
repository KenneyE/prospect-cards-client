import React from 'react'
import Dumb from './MyListings'
import { useUserListingsQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const MyListings = (): JSX.Element => {
  const { data, loading, error } = useUserListingsQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default MyListings
