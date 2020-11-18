import gql from 'graphql-tag'

gql`
  query maybeViewer {
    maybeViewer {
      id
      admin
    }
  }
`

gql`
  query invitedViewer($token: String!) {
    invitedViewer(token: $token) {
      id
      email
    }
  }
`

gql`
  query products {
    viewer {
      id
      availableMemberships {
        token
        price
        term
      }
    }
  }
`
