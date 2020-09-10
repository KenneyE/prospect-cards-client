import gql from 'graphql-tag'

gql`
  query listing($id: Int!) {
    listing(id: $id) {
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
