import gql from 'graphql-tag'

gql`
  query profile {
    viewer {
      ...user
    }
  }
`

gql`
  query address {
    viewer {
      ...address
    }
  }
`

gql`
  query account {
    maybeViewer {
      id
      unreadNotices {
        ...notice
      }
      hasActiveSubscription
      hasPaymentMethod
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

gql`
  query paymentMethod {
    viewer {
      id
    }
  }
`

gql`
  query emailPreferences($token: String) {
    viewer(token: $token) {
      id
      emailPreferences {
        ...emailPreference
      }
    }
  }
`
