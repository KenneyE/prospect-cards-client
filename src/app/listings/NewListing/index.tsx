import React from 'react'
import Dumb from './NewListing'
import { useSaveListingMutation } from 'types/graphql'

const NewListing = (): JSX.Element => {
  const [saveListing, { loading: saveLoading }] = useSaveListingMutation()

  return <Dumb saveListing={ saveListing } loading={ saveLoading } />
}

export default NewListing
