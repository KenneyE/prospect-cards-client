import gql from 'graphql-tag'

gql`
  query purchases {
    viewer {
      id
      purchases {
        id
        createdAt
        offer {
          id
          price
        }
        listing {
          id
          title
          seller {
            id
            username
          }
          images {
            ...listingImage
          }
        }
      }
    }
  }
`
