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
  fragment player on Player {
    id
    name
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
    images {
      id
      url
    }
    player {
      id
      name
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
