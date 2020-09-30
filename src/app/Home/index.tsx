import React from 'react'
import Dumb from './Home'
import { useParams } from 'react-router-dom'
import { useViewerQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const Home = (): JSX.Element => {
  const { data, loading, error } = useViewerQuery()
  const { category } = useParams<{ category?: string }>()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb category={ category } viewerId={ data.viewer.id } />
}

export default Home
