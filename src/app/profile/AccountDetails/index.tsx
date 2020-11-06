import React from 'react'
import Dumb from './AccountDetails'
import { useProfileQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const AccountDetails = (): JSX.Element => {
  const { data, loading, error } = useProfileQuery()

  if (loading) return <Spinner fullHeight />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default AccountDetails
