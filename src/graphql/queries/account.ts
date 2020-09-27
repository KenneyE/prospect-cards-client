import gql from 'graphql-tag'

gql`
  query profile {
    viewer {
      id
      profilePictureUrl
    }
  }
`

gql`
  query account {
    viewer {
      id
      hasActiveSubscription
      stripeAccount {
        id
        chargesEnabled
        onboardingLink
      }
    }
  }
`

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
  query addPayment($price: String) {
    stripeCheckoutSessionId(price: $price)
  }
`
