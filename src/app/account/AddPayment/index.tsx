import React from 'react'
import Dumb from './AddPayment'
import ErrorMessage from 'app/common/ErrorMessage'
import { useAddPaymentQuery, useSyncPaymentMutation } from 'types/graphql'
import FormSkeleton from 'app/common/FormSkeleton'

const AddPayment = (): JSX.Element => {
  const { data, loading, error } = useAddPaymentQuery()
  const [syncPayment] = useSyncPaymentMutation()

  if (loading) return <FormSkeleton />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } syncPayment={ syncPayment } />
}

export default AddPayment
