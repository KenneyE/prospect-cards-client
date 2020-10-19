import gql from 'graphql-tag'

gql`
  query profile {
    viewer {
      id
      email
      profilePictureUrl
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
  query emailPreferences {
    viewer {
      id
      emailPreferences {
        ...emailPreference
      }
    }
  }
`
