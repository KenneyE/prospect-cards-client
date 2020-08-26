import React from 'react'
import Dumb from './TestStuff'
import { useFakeChargeQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const TestStuff = (): JSX.Element => {
  const { data, loading, error } = useFakeChargeQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data }/>
}

export default TestStuff
