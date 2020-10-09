import gql from 'graphql-tag'

gql`
  mutation trackInterest($listingId: Int!) {
    trackInterest(listingId: $listingId) {
      success
    }
  }
`

gql`
  mutation confirmEmail($token: String!) {
    confirmEmail(token: $token) {
      message
    }
  }
`
