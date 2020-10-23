import gql from 'graphql-tag'

gql`
  mutation acceptListingReports($listingId: Int!) {
    acceptListingReports(listingId: $listingId) {
      listing {
        ...listing
      }
      message
    }
  }
`

gql`
  mutation updateListing($listingId: Int!, $listing: ListingInput!) {
    updateListing(listingId: $listingId, listing: $listing) {
      listing {
        ...listing
      }
      message
    }
  }
`
