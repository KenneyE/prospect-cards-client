import React from 'react'
import Dumb from './ToggleListingEnabledButton'
import {
  ListingDocument,
  ListingStatusEnum,
  Maybe,
  useUpdateListingMutation,
} from 'types/graphql'
import confirm from 'lib/confirm'

interface Props {
  listingId: number;
  status: ListingStatusEnum;
}
const ToggleListingEnabledButton = ({
  listingId,
  status,
}: Props): Maybe<JSX.Element> => {
  const enabled = status !== ListingStatusEnum.Disabled
  const [toggleEnabled, { loading }] = useUpdateListingMutation({
    variables: {
      listing: {
        id: listingId,
        status: enabled ?
          ListingStatusEnum.Disabled :
          ListingStatusEnum.Available,
      },
    },
    // REVIEW: Why is the button not refreshing without a refetchQuery?
    refetchQueries: [{ query: ListingDocument, variables: { id: listingId } }],
  })

  const text = enabled ? 'Disable' : 'Enable'
  const handleToggle = async(): Promise<void> => {
    const resp = await confirm(`${text} this listing?`)

    if (resp) {
      toggleEnabled()
    }
  }

  return <Dumb toggleEnabled={ handleToggle } text={ text } loading={ loading } />
}

export default ToggleListingEnabledButton
