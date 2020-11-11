import React from 'react'
import { ListingsQuery } from 'types/graphql'
import SearchResult from 'app/listings/SearchResult'

interface Props {
  data: ListingsQuery;
}

const SearchResults = ({ data: { listings } }: Props): JSX.Element => {
  return (
    <>
      {listings.map((listing) => (
        <SearchResult key={ listing.id } listing={ listing } />
      ))}
    </>
  )
}

export default SearchResults
