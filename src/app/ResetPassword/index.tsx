import React from 'react'
import ResetPasswordComponent from './ResetPassword'
import { Redirect, withRouter, RouteComponentProps } from 'react-router'
import { Maybe, useMaybeViewerQuery } from 'types/graphql'

const ResetPassword = (props: RouteComponentProps): Maybe<JSX.Element> => {
  const { data, loading, refetch } = useMaybeViewerQuery()

  if (loading) return null
  if (data && data.maybeViewer) return <Redirect to='/' />

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return <ResetPasswordComponent { ...props } refresh={ refresh } />
}

export default withRouter(ResetPassword)
