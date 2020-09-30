import React from 'react'
import Dumb from './ShowListing'
import { useListingQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { useParams } from 'react-router-dom'

const ShowListing = (): JSX.Element => {
  const { id } = useParams()
  const { data, loading, error } = useListingQuery({ variables: { id } })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default ShowListing
