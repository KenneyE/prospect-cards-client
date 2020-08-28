import gql from 'graphql-tag'

gql`
  query listing($id: Int!) {
    listing(id: $id) {
      ...listing
    }
  }
`

