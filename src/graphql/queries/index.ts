import gql from 'graphql-tag'

gql`
  query auth {
    auth
  }
`

gql`
  query players($name: String) {
    viewer {
      id
      players(name: $name) {
        ...player
      }
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
