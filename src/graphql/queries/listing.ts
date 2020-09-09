import gql from 'graphql-tag'

gql`
  query newListingFields {
    categories {
      id
      name
    }
    productTypes {
      id
      name
    }
  }
`
