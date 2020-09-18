import gql from 'graphql-tag'

gql`
  mutation saveOffer($offer: OfferInput!) {
    saveOffer(offer: $offer) {
      viewer {
        id
      }
      message
    }
  }
`
