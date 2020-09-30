import React, { useEffect } from 'react'
import Dumb from './Listing'
import { useListingQuery, useTrackInterestMutation } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { useParams } from 'react-router-dom'

const Listing = (): JSX.Element => {
  const { id } = useParams()
  const [trackInterest] = useTrackInterestMutation({
    variables: { listingId: +id },
  })
  const { data, loading, error } = useListingQuery({
    variables: { id: +id },
  })

  useEffect(() => {
    trackInterest()
  }, [trackInterest])

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default Listing
