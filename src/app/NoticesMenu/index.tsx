import React from 'react'
import Dumb from './NoticesMenu'
import { NoticeFragment, useMarkNoticesReadMutation } from 'types/graphql'

interface Props {
  notices?: NoticeFragment[];
}

const NoticesMenu = (props: Props): JSX.Element => {
  const [markRead] = useMarkNoticesReadMutation()

  return <Dumb markRead={ markRead } { ...props } />
}

export default NoticesMenu
