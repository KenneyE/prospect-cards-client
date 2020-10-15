import gql from 'graphql-tag'

gql`
  query maybeViewer {
    maybeViewer {
      id
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
