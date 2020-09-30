import React from 'react'
import RegisterComponent from './Register'
import { Redirect, withRouter, RouteComponentProps } from 'react-router'
import { Maybe, useAuthQuery } from 'types/graphql'

const Register = (props: RouteComponentProps): Maybe<JSX.Element> => {
  const { data, loading, refetch } = useAuthQuery()

  if (loading) return null
  if (data && data.auth) return <Redirect to='/' />

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return <RegisterComponent { ...props } refresh={ refresh } />
}

export default withRouter(Register)
