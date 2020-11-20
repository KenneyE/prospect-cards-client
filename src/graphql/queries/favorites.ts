import gql from 'graphql-tag'

gql`
  query favorites {
    viewer {
      favoriteListings {
        ...listing
      }
    }
  }
`
