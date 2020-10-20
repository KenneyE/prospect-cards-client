import React from 'react'
import Dumb from './AcceptListingReportsButton'
import {
  Maybe,
  useAcceptListingReportsMutation,
  useListingReportsQuery,
} from 'types/graphql'

interface Props {
  listingId: number;
}
const AcceptListingReportsButton = ({
  listingId,
}: Props): Maybe<JSX.Element> => {
  const { data } = useListingReportsQuery({ variables: { listingId } })
  const [accept] = useAcceptListingReportsMutation({
    variables: { listingId },
  })

  if (!data) return null

  return <Dumb accept={ accept } data={ data } />
}

export default AcceptListingReportsButton
