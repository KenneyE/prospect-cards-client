import React from 'react'
import Dumb from './NavBar'
import { useAccountLazyQuery } from 'types/graphql'
import useAuthOnlyQuery from 'hooks/useAuthOnlyQuery'

const NavBar = (): JSX.Element => {
  const [getAccount, { data }] = useAccountLazyQuery()
  useAuthOnlyQuery(getAccount)

  return <Dumb data={ data } />
}

export default NavBar
