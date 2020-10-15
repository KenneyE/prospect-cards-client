import React from 'react'
import { RouteProps } from 'react-router-dom'
import { useMaybeViewerQuery, Maybe } from 'types/graphql'
import PrivateRouteComponent from './PrivateRoute'

const PrivateRoute = (props: RouteProps): Maybe<JSX.Element> => {
  const { data, loading, client, error } = useMaybeViewerQuery()

  if (loading) return null

  if (error) {
    // Prevent any chance of store leaking into unauthorized space.
    // Also prevents weird loop of expired creds being stored, preventing login.
    client.resetStore()
    window.location.href = '/'
  }

  return (
    <PrivateRouteComponent
      { ...props }
      isAuthenticated={ !!(data && data.maybeViewer) }
    />
  )
}

export default PrivateRoute
