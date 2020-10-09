import React from 'react'
import Dumb from './Home'
import { useParams } from 'react-router-dom'
import { useViewerLazyQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import useAuthOnlyQuery from 'hooks/useAuthOnlyQuery'

const Home = (): JSX.Element => {
  const [getViewer, { data, loading, error }] = useViewerLazyQuery()
  useAuthOnlyQuery(getViewer)

  const { category } = useParams<{ category?: string }>()

  if (loading) return <Spinner />
  if (error) return <ErrorMessage />

  return <Dumb category={ category } viewerId={ data?.viewer.id } />
}

export default Home
