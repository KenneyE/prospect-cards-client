import React from 'react'
import Dumb from './Home'
import { useParams } from 'react-router-dom'
import { useMaybeViewerQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const Home = (): JSX.Element => {
  const { data, loading, error } = useMaybeViewerQuery()

  const { category } = useParams<{ category?: string }>()

  if (loading) return <Spinner />
  if (error) return <ErrorMessage />

  return <Dumb category={ category } viewerId={ data?.maybeViewer?.id } />
}

export default Home
