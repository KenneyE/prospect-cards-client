import { ReactNode } from 'react'
import { RouteProps } from 'react-router-dom'
import { useAuthQuery, Maybe } from 'types/graphql'

interface Props {
  children: ReactNode;
}

const PrivateComponent = ({ children }: RouteProps): Maybe<ReactNode> => {
  const { data } = useAuthQuery()

  if (!data?.auth) return null

  return children
}

export default PrivateComponent
