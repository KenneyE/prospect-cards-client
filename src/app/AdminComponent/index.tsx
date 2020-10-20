import React from 'react'
import { useMaybeViewerQuery, Maybe } from 'types/graphql'

interface Props {
  children: JSX.Element | string;
}

const AdminComponent = ({ children }: Props): Maybe<JSX.Element> => {
  const { data } = useMaybeViewerQuery()

  if (!data?.maybeViewer?.admin) {
    return null
  }

  return <>{children}</>
}

export default AdminComponent
