import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY as string,
)

export default stripePromise