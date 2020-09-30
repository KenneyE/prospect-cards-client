import React from 'react'
import Dumb from './NavBar'
import { useAccountQuery } from 'types/graphql'

const NavBar = (): JSX.Element => {
  const { data } = useAccountQuery()

  return <Dumb data={ data } />
}

export default NavBar
