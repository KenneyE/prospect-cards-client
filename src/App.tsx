import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HttpsRedirect from 'react-https-redirect'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import AppContainer from 'app/AppContainer'
import 'lib/abEmitter'

import client from './apollo'

const App = (): JSX.Element => {
  return (
    <HttpsRedirect>
      <ApolloProvider client={ client }>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </ApolloProvider>
    </HttpsRedirect>
  )
}

export default App
