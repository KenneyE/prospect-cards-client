import gql from 'graphql-tag'

gql`
  query listing($id: Int!) {
    listing(id: $id) {
      id
      title
      description
      images {
        id
        url
      }
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
  query userListings {
    viewer {
      id
      availableListings: listings(status: available) {
        ...listing
      }
      soldListings: listings(status: sold) {
        ...listing
      }
    }
  }
`
