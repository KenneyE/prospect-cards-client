import React from 'react'
import Dumb from './ConfirmEmailDialog'
import { Maybe, useConfirmedQuery } from 'types/graphql'

const ConfirmEmailDialog = (): Maybe<JSX.Element> => {
  const { data, refetch, loading } = useConfirmedQuery({
    notifyOnNetworkStatusChange: true,
  })

  const retry = () => {
    refetch()
  }

  return (
    <Dumb
      open={ Boolean(data && !data.viewer.confirmed) }
      retry={ retry }
      loading={ loading }
    />
  )
}

export default ConfirmEmailDialog
