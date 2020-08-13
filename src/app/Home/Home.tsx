import React from 'react'
import LogoutButton from 'app/common/LogoutButton'

const Home = (): JSX.Element => {
  return <div>
    Hello signed in user
    <LogoutButton />
  </div>
}

export default Home
