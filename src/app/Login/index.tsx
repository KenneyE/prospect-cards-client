import React from 'react'
import LoginComponent from './Login'
import { Redirect, withRouter, RouteComponentProps } from 'react-router'
import { Maybe, useAuthQuery } from 'types/graphql'

const Login = (props: RouteComponentProps): Maybe<JSX.Element> => {
  const { data, loading } = useAuthQuery()

  if (loading) return null
  if (data && data.auth) return <Redirect to='/' />

  return <LoginComponent { ...props } />
}

export default withRouter(Login)
