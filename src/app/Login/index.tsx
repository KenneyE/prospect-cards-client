import React from 'react'
import LoginComponent from './Login'
import { Redirect, withRouter, RouteComponentProps } from 'react-router'
import { Maybe, useAuthQuery } from 'types/graphql'

const Login = (props: RouteComponentProps): Maybe<JSX.Element> => {
  const { data, loading, refetch } = useAuthQuery()

  if (loading) return null
  if (data && data.auth) return <Redirect to='/' />

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return <LoginComponent { ...props } refresh={ refresh }/>
}

export default withRouter(Login)
