import React from 'react'
import Dumb from './NavBar'
import { useAccountQuery } from 'types/graphql'

const NavBar = (): JSX.Element => {
  const { data, loading } = useAccountQuery()

  return <Dumb data={ data } loading={ loading } />
}

export default NavBar
