import gql from 'graphql-tag'

gql`
  mutation trackInterest($listingId: Int!) {
    trackInterest(listingId: $listingId) {
      success
    }
  }
`

gql`
  mutation markNoticesRead {
    markNoticesRead {
      success
    }
  }
`
