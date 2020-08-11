import React from 'react'
import Dumb from './AppContainer'
import { useAuthQuery } from 'types/graphql'

const AppContainer = (): Maybe<JSX.>Element => {
  const { data, loading } = useAuthQuery({ fetchPolicy: 'cache-only' })

  if (loading) return null

  return <Dumb loggedIn={ Boolean(data && data.auth) } />
}

export default AppContainer
