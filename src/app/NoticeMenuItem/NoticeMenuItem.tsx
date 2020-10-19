import React from 'react'
import { NoticeFragment } from 'types/graphql'
import { MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface Props {
  notice: NoticeFragment;
  handleClose: VoidFunction;
}

const NoticeMenuItem = ({ notice, handleClose }: Props): JSX.Element => {
  const menuItem = <MenuItem onClick={ handleClose }>{notice.title}</MenuItem>

  return notice.path ? <Link to={ notice.path }>{menuItem}</Link> : menuItem
}

export default NoticeMenuItem
