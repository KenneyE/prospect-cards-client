import React from 'react'
import { NoticeFragment } from 'types/graphql'
import { MenuItem, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

interface Props {
  notice: NoticeFragment;
  onClose: VoidFunction;
}

const NoticeMenuItem = ({
  notice: { title, text, path },
  onClose,
}: Props): JSX.Element => {
  const history = useHistory()

  const noticeBody = (
    <div style={ { display: 'block' } }>
      <Typography variant='body1'>{title}</Typography>
      <Typography variant='caption'>{text}</Typography>
    </div>
  )
  const handleClose = () => {
    onClose()
    path && history.push(path)
  }

  return <MenuItem onClick={ handleClose }>{noticeBody}</MenuItem>
}

export default NoticeMenuItem
