import gql from 'graphql-tag'

gql`
  fragment user on User {
    id
    email
    profilePictureUrl
    ...address
  }
`

gql`
  fragment address on User {
    id
    street1
    street2
    city
    state
    zip
  }
`

gql`
  fragment listing on Listing {
    id
    title
    createdAt
    description
    price
    status
    player
    images {
      id
      url
    }
    offers {
      id
      price
    }
  }
`

gql`
  fragment offer on Offer {
    id
    price
    listing {
      id
      title
      images {
        id
        url
      }
    }
  }
`

gql`
  fragment emailPreference on EmailPreference {
    id
    category
    subscribed
  }
`

gql`
  fragment notice on Notice {
    id
    title
    text
    path
  }
`

gql`
  fragment paymentMethod on StripePaymentMethod {
    id
    brand
    last4
    expMonth
    expYear
  }
`
