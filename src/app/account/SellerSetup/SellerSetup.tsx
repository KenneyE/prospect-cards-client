import { StripeAccountQuery } from 'types/graphql'

interface Props {
  data: StripeAccountQuery;
}

const SellerSetup = ({
  data: {
    viewer: {
      stripeAccount: { onboardingLink },
    },
  },
}: Props): null => {
  window.location.href = onboardingLink
  return null
}

export default SellerSetup
