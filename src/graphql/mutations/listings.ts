import gql from 'graphql-tag'

gql`
  mutation saveListing($listing: ListingInput!) {
    saveListing(listing: $listing) {
      viewer {
        id
        availableListings: listings(status: available) {
          ...listing
        }
      }
      message
    }
  }
`

gql`
  mutation reportListing($listingId: Int!, $text: String!) {
    reportListing(listingId: $listingId, text: $text) {
      message
    }
  }
`

gql`
  mutation toggleFavorite($listingId: Int!, $isFavorited: Boolean!) {
    toggleFavorite(listingId: $listingId, isFavorited: $isFavorited) {
      listing {
        id
        isFavorited
      }
    }
  }
`
