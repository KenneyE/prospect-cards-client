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
  mutation updateListing($listing: AdminListingInput!) {
    updateListing(listing: $listing) {
      listing {
        ...listing
      }
      message
    }
  }
`
