import React from 'react'
import Dumb from './AccountListings'
import { useUserListingsQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const AccountListings = (): JSX.Element => {
  const { data, loading, error } = useUserListingsQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default AccountListings
