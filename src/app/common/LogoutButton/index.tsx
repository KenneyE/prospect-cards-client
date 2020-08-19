import React from 'react'
import Dumb from './LogoutButton'

const LogoutButton = (): JSX.Element => {
  const handleClick = (): void => {
    localStorage.removeItem('fund-reporter-token')
    window.location.replace('/login')
  }

  return <Dumb onClick={ handleClick }/>
}

export default LogoutButton