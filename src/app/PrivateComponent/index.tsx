import { useAuthQuery, Maybe } from 'types/graphql'

interface Props {
  children: JSX.Element;
}

const PrivateComponent = ({ children }: Props): Maybe<JSX.Element> => {
  const { data } = useAuthQuery()

  if (!data?.auth) return null

  return children
}

export default PrivateComponent
