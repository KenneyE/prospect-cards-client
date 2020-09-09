import React from 'react'
import Dumb from './NewListing'
import {
  useNewListingFieldsQuery,
  useSaveListingMutation,
} from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const NewListing = (): JSX.Element => {
  const { data, loading, error } = useNewListingFieldsQuery()
  const [saveListing, { loading: saveLoading }] = useSaveListingMutation()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } saveListing={ saveListing } loading={ saveLoading } />
}

export default NewListing
