import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HttpsRedirect from 'react-https-redirect'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import AppContainer from 'app/AppContainer'
import ErrorBoundary from 'ErrorBoundary'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'stylesheets/carousel.css'
import 'stylesheets/reactivesearch.css'
import 'lib/abEmitter'

import client from './apollo'

const App = (): JSX.Element => {
  return (
    <HttpsRedirect>
      <ErrorBoundary>
        <ApolloProvider client={ client }>
          <BrowserRouter>
            <AppContainer />
          </BrowserRouter>
        </ApolloProvider>
      </ErrorBoundary>
    </HttpsRedirect>
  )
}

export default App
