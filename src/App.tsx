import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import AppContainer from 'app/AppContainer'

import client from './apollo'

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={ client }>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
