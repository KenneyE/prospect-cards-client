import gql from 'graphql-tag'

gql`
  query auth {
    auth
  }
`

gql`
  query fakeCharge {
    viewer {
      paymentIntent
    }
  }
`
