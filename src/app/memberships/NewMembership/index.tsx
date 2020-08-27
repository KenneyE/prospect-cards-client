import React from 'react'
import Dumb from './NewMembership'
import { useProductsQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const NewMembership = (): JSX.Element => {
  const { data, loading, error } = useProductsQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data }/>
}

export default NewMembership
