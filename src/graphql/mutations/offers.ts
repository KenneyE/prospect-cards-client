import gql from 'graphql-tag'

gql`
  mutation saveOffer($offer: OfferInput!) {
    saveOffer(offer: $offer) {
      paymentIntentId
      offerId
    }
  }
`

gql`
  mutation acceptOffer($offerId: Int!) {
    acceptOffer(offerId: $offerId) {
      message
    }
  }
`

gql`
  mutation confirmOffer($offerId: Int!) {
    confirmOffer(offerId: $offerId) {
      viewer {
        id
        offers {
          ...offer
        }
      }
    }
  }
`
