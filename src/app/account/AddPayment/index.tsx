import React from 'react'
import Dumb from './AddPayment'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { useAddPaymentQuery } from 'types/graphql'

const AddPayment = (): JSX.Element => {
  const { data, loading, error } = useAddPaymentQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } />
}

export default AddPayment
