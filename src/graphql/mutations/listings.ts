import gql from 'graphql-tag'

gql`
  mutation saveListing($listing: ListingInput!, $player: PlayerInput!) {
    saveListing(listing: $listing, player: $player) {
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
