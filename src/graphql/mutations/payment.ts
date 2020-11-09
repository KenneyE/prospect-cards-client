import gql from 'graphql-tag'

gql`
  mutation syncPayment($paymentMethodId: String!) {
    syncPayment(paymentMethodId: $paymentMethodId) {
      viewer {
        id
        paymentMethod {
          ...paymentMethod
        }
      }
      message
    }
  }
`
