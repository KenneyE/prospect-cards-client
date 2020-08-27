import React from 'react'
import Dumb from './AddPayment'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { useAddPaymentQuery } from 'types/graphql'
import { useParams } from 'react-router-dom'

const AddPayment = (): JSX.Element => {
  const { price } = useParams()
  const { data, loading, error } = useAddPaymentQuery({ variables: { price } })

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage message={ error?.message } />

  return <Dumb data={ data } />
}

export default AddPayment
