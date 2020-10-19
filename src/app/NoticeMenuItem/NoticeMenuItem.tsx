import React from 'react'
import { NoticeFragment } from 'types/graphql'
import { MenuItem, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface Props {
  notice: NoticeFragment;
  handleClose: VoidFunction;
}

const NoticeMenuItem = ({ notice, handleClose }: Props): JSX.Element => {
  const noticeBody = (
    <div style={ { display: 'block' } }>
      <Typography variant='body1'>{notice.title}</Typography>
      <Typography variant='caption'>{notice.text}</Typography>
    </div>
  )

  return notice.path ? (
    <Link component={ MenuItem } to={ notice.path }>
      {noticeBody}
    </Link>
  ) : (
    <MenuItem onClick={ handleClose }>{noticeBody}</MenuItem>
  )
}

export default NoticeMenuItem
