import { useAuthQuery, Maybe } from 'types/graphql'

interface Props {
  children: JSX.Element;
  loggedOut?: JSX.Element;
}

const PrivateComponent = ({ children, loggedOut }: Props): Maybe<JSX.Element> => {
  const { data } = useAuthQuery()

  if (!data?.auth) {
    return loggedOut || null
  }

  return children
}

export default PrivateComponent
