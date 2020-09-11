import gql from 'graphql-tag'

gql`
  query listing($id: Int!, $track: Boolean) {
    listing(id: $id, track: $track) {
      id
      title
      description
      imageUrls
    }
  }
`

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
