import React from 'react'
import AcceptInvitationComponent from './AcceptInvitation'
import { withRouter, RouteComponentProps, useParams } from 'react-router'
import {
  Maybe,
  useInvitedViewerQuery,
  useMaybeViewerQuery,
} from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from '../common/ErrorMessage'

const AcceptInvitation = (props: RouteComponentProps): Maybe<JSX.Element> => {
  const { token } = useParams<{ token: string }>()
  const { refetch } = useMaybeViewerQuery()
  const { data, loading, error } = useInvitedViewerQuery({
    variables: { token },
  })

  if (loading) return <Spinner fullHeight />
  if (!data || error) return <ErrorMessage message={ error?.message } />
  if (!data.invitedViewer)
    return (
      <ErrorMessage message='Unable to find the user this invitation belongs to. Did you already accept the invitation?' />
    )

  const refresh = async(): Promise<void> => {
    await refetch()
  }

  return (
    <AcceptInvitationComponent { ...props } token={ token } refresh={ refresh } />
  )
}

export default withRouter(AcceptInvitation)
