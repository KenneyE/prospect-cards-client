import React from 'react'
import Dumb from './MyListings'
import { ListingStatusEnum, useListingsQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const MyListings = (): JSX.Element => {
  const { data, loading, error } = useListingsQuery({
    variables: { status: ListingStatusEnum.Available },
  })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default MyListings
