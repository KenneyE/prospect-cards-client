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
