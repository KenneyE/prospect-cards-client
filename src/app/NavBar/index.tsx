import React from 'react'
import NavBarComponent from './NavBar'
import { Maybe, useAuthQuery } from 'types/graphql'

const NavBar = (): Maybe<JSX.Element> => {
  const { data } = useAuthQuery()

  return <NavBarComponent loggedIn={ data?.auth } />
}

export default NavBar
