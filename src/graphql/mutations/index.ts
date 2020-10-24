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

gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      message
    }
  }
`
