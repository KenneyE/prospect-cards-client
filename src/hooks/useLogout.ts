import { useApolloClient } from '@apollo/client'

export default (): VoidFunction => {
  const client = useApolloClient()

  return () => {
    localStorage.removeItem('prospect-cards-token')
    client.clearStore()
    window.location.href = '/login'
  }
}
