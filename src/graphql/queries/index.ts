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
  query players($name: String) {
    players(name: $name) {
      ...player
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
