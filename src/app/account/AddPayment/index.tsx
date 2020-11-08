import React from 'react'
import Dumb from './AddPayment'
import ErrorMessage from 'app/common/ErrorMessage'
import { useAddPaymentQuery } from 'types/graphql'
import FormSkeleton from 'app/common/FormSkeleton'

const AddPayment = (): JSX.Element => {
  const { data, loading, error } = useAddPaymentQuery()

  if (loading) return <FormSkeleton />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } />
}

export default AddPayment
