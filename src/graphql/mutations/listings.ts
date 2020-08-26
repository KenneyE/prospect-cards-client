import gql from 'graphql-tag'

gql`
  mutation saveListing($listing: ListingInput!, $player: PlayerInput!) {
    saveListing(listing: $listing, player: $player) {
      viewer {
        id
      }
      message
    }
  }
`
