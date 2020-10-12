import React from 'react'
import Dumb from './LogoutButton'
import { useApolloClient } from '@apollo/client'

const LogoutButton = (): JSX.Element => {
  const client = useApolloClient()

  const handleClick = (): void => {
    localStorage.removeItem('prospect-cards-token')
    client.clearStore()
    window.location.href = '/login'
  }

  return <Dumb onClick={ handleClick } />
}

export default LogoutButton
