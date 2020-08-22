import gql from 'graphql-tag'

gql`
  query sellerSetup {
    viewer {
      id
      stripeAccount {
        id
        chargesEnabled
        onboardingLink
      }
    }
  }
`
