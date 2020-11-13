import React from 'react'
import Dumb from './LogoutButton'
import useLogout from 'hooks/useLogout'

const LogoutButton = (): JSX.Element => {
  const logout = useLogout()

  return <Dumb onClick={ logout } />
}

export default LogoutButton
