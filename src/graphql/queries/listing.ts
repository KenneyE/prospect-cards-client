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
    manufacturers {
      id
      name
    }
    setTypes {
      id
      name
    }
    graders {
      id
      name
    }
  }
`

gql`
  query listings($status: ListingStatusEnum) {
    viewer {
      id
      listings(status: $status) {
        ...listing
      }
    }
  }
`
