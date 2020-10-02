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
    imageUrls
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
