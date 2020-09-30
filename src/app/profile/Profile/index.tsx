import React from 'react'
import Dumb from './Profile'
import { useProfileQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const Profile = (): JSX.Element => {
  const { data, loading, error } = useProfileQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default Profile
