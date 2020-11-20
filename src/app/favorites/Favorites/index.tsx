import React from 'react'
import Dumb from './Favorites'
import { useFavoritesQuery } from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const Favorites = (): JSX.Element => {
  const { data, loading, error } = useFavoritesQuery()

  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } />
}

export default Favorites
