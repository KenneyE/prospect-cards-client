import { SellerSetupQuery } from 'types/graphql'

interface Props {
  data: SellerSetupQuery;
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
