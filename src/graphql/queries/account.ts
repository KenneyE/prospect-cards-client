import gql from 'graphql-tag'

gql`
  query profile {
    viewer {
      ...user
    }
  }
`

gql`
  query confirmed {
    viewer {
      id
      confirmed
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
  query addPayment {
    stripeSetupIntentId
    viewer {
      id
      paymentMethod {
        id
        brand
        expMonth
        expYear
        last4
      }
    }
  }
`

gql`
  query paymentMethod {
    viewer {
      id
      paymentMethod {
        id
        brand
        expMonth
        expYear
        last4
      }
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
