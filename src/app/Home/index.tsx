import React from 'react'
import Dumb from './Home'
import { useParams } from 'react-router-dom'

const Home = (): JSX.Element => {
  const { category } = useParams<{ category?: string }>()

  return <Dumb category={ category } />
}

export default Home
