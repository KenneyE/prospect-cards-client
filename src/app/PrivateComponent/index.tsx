import React from 'react'
import { useMaybeViewerQuery, Maybe } from 'types/graphql'

interface Props {
  children: JSX.Element | string;
  loggedOut?: JSX.Element;
}

const PrivateComponent = ({
  children,
  loggedOut,
}: Props): Maybe<JSX.Element> => {
  const { data } = useMaybeViewerQuery()

  if (!data?.maybeViewer) {
    return loggedOut || null
  }

  return <>{children}</>
}

export default PrivateComponent
