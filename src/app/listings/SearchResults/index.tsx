import React from 'react'
import Dumb from './SearchResults'
import { useListingsQuery } from 'types/graphql'
import ErrorMessage from 'app/common/ErrorMessage'
import ListingSkeletons from 'app/common/ListingSkeleton'

interface Props {
  listingIds: number[];
}
const SearchResults = ({ listingIds }: Props): JSX.Element => {
  const { data, loading, error } = useListingsQuery({
    variables: { listingIds },
    fetchPolicy: 'network-only',
  })

  if (loading && !data) return <ListingSkeletons />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } loading={ loading } />
}

export default SearchResults
