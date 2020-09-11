import React from 'react'
import Dumb from './Listing'
import { useListingQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { useParams } from 'react-router-dom'

const Listing = (): JSX.Element => {
  const { id } = useParams()

  const { data, loading, error } = useListingQuery({
    variables: { id: +id, track: true },
  })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default Listing
