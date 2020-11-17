import React from 'react'
import Dumb from './PurchaseHistory'
import { usePurchasesQuery } from 'types/graphql'
import QueryContainer from 'lib/QueryContainer'

const PurchaseHistory = (): JSX.Element => {
  return <QueryContainer hookResult={ usePurchasesQuery() } Dumb={ Dumb } />
}

export default PurchaseHistory
