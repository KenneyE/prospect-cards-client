import gql from 'graphql-tag'

gql`
  query stripeAccount($refresh: Boolean) {
    viewer {
      id
      stripeAccount(refresh: $refresh) {
        id
        chargesEnabled
        onboardingLink
      }
    }
  }
`

gql`
  query addPayment {
    stripeCheckoutSessionId
  }
`
