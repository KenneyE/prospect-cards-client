import React from 'react'
import { ListingQuery } from 'types/graphql'

interface Props {
  data: ListingQuery;
}

const ShowListing = (props: Props): JSX.Element => {
  return <div>Hello World</div>
}

export default ShowListing
