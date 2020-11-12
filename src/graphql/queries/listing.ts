import gql from 'graphql-tag'

gql`
  query listing($id: Int!) {
    listing(id: $id) {
      ...listing
    }
  }
`

gql`
  query listingPrice($id: Int!) {
    listing(id: $id) {
      id
      price
    }
  }
`

gql`
  query listings($listingIds: [Int!]!) {
    listings(listingIds: $listingIds) {
      ...listing
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

gql`
  query listingReports($listingId: Int!) {
    listing(id: $listingId) {
      reports {
        id
        text
        createdAt
        reviewedAt
      }
    }
  }
`

gql`
  query tags($context: TagTypesEnum!, $name: String) {
    tags(context: $context, name: $name) {
      id
      name
    }
  }
`
