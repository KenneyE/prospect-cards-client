import gql from 'graphql-tag'

gql`
  mutation saveListing($listing: ListingInput!) {
    saveListing(listing: $listing) {
      viewer {
        id
      }
      message
    }
  }
`
