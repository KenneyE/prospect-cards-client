import React from 'react'
import { MarkNoticesReadMutationFn, NoticeFragment } from 'types/graphql'
import { Badge, IconButton, Menu } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PrivateComponent from 'app/PrivateComponent'
import NoticeMenuItem from 'app/NoticeMenuItem'

interface Props {
  notices?: NoticeFragment[];
  markRead: MarkNoticesReadMutationFn;
}

const NoticesMenu = ({ markRead, notices = [] }: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    markRead()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <PrivateComponent>
      <>
        <IconButton
          aria-label={ `show ${notices.length} new notifications` }
          color='inherit'
          disabled={ !notices.length }
          onClick={ handleClick }
        >
          <Badge badgeContent={ notices.length } color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menu
          anchorOrigin={ {
            vertical: 'bottom',
            horizontal: 'center',
          } }
          transformOrigin={ {
            vertical: 'top',
            horizontal: 'center',
          } }
          getContentAnchorEl={ null }
          anchorEl={ anchorEl }
          open={ Boolean(anchorEl) }
          onClose={ handleClose }
        >
          {notices.map((notice) => (
            <NoticeMenuItem
              key={ notice.id }
              notice={ notice }
              onClose={ handleClose }
            />
          ))}
        </Menu>
      </>
    </PrivateComponent>
  )
}

export default NoticesMenu
