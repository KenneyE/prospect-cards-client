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
  mutation tempConfirmOffer($offerId: Int!) {
    tempConfirmOffer(offerId: $offerId) {
      viewer {
        id
        offers {
          ...offer
        }
      }
    }
  }
`
