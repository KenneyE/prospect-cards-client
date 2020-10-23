import gql from 'graphql-tag'

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
