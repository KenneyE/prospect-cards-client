import gql from 'graphql-tag'

gql`
  mutation saveOffer($offer: OfferInput!) {
    saveOffer(offer: $offer) {
      paymentIntentId
    }
  }
`

gql`
  mutation acceptOffer($offerId: Int!) {
    acceptOffer(offerId: $offerId) {
      viewer {
        id
      }
      message
    }
  }
`
