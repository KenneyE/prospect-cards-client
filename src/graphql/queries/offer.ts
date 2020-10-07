import gql from 'graphql-tag'

gql`
  query userOffers {
    viewer {
      id
      offers {
        ...offer
      }
    }
  }
`
