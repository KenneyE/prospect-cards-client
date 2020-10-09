import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  from,
  ServerError,
  FetchResult,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

import { toast } from 'react-toastify'
type ServerErrorOrUndef = ServerError | undefined;

const uri = `${process.env.REACT_APP_API_URI}/v1`

const httpLink = createUploadLink({
  uri,
  credentials: 'include',
})

const showFeedback = new ApolloLink((operation, forward) => {
  if (!forward) return null

  return forward(operation).map(
    (response: FetchResult): FetchResult => {
      // uncomment for debugging responses
      // console.log(response)

      // if a successful mutation has a success message, display it
      if (
        response.data &&
        response.data[operation.operationName] &&
        response.data[operation.operationName].message
      ) {
        toast.success(response.data[operation.operationName].message, {
          autoClose: 4000,
        })
      }

      return response
    },
  )
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('fund-reporter-token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  }
})

const shouldRedirectToLogin = (serverError: ServerErrorOrUndef) => {
  const path = window.location.pathname

  return (
    serverError &&
    serverError.statusCode === 401 &&
    !['/login', '/register'].includes(path) &&
    !path.match(/\/confirm\//)
  )
}
const handleError = onError(({ graphQLErrors, networkError, response }) => {
  const serverError: ServerErrorOrUndef = networkError as ServerErrorOrUndef

  if (graphQLErrors && response) {
    const errors = graphQLErrors.map((e): string => e.message)
    errors.forEach((error): number | string => toast.error(error))
    response.errors = undefined
  } else if (shouldRedirectToLogin(serverError)) {
    client.clearStore()
    window.location.pathname = '/login'
  }
})

const link = from([
  handleError,
  showFeedback,
  // https://github.com/jaydenseric/apollo-upload-client/issues/213
  authLink.concat((httpLink as unknown) as ApolloLink),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

export default client
