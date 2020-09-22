import React from 'react'
import Dumb from './Home'
import { useParams } from 'react-router-dom'

const Home = (): JSX.Element => {
  const { category } = useParams()

  return <Dumb category={ category } />
}

export default Home
