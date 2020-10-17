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
