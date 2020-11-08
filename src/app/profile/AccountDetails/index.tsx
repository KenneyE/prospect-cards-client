import React from 'react'
import Dumb from './AccountDetails'
import { useProfileQuery } from 'types/graphql'
import ErrorMessage from 'app/common/ErrorMessage'
import FormSkeleton from 'app/common/FormSkeleton'

const AccountDetails = (): JSX.Element => {
  const { data, loading, error } = useProfileQuery()

  if (loading) return <FormSkeleton />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default AccountDetails
