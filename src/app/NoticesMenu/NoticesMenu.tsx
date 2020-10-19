import React from 'react'
import { NoticeFragment } from 'types/graphql'
import { Badge, IconButton, Menu } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PrivateComponent from 'app/PrivateComponent'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import NoticeMenuItem from 'app/NoticeMenuItem'

interface Props {
  notices?: NoticeFragment[];
}

const NoticesMenu = ({ notices = [] }: Props): JSX.Element => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  const handleClose = popupState.close

  return (
    <PrivateComponent>
      <>
        <IconButton
          aria-label={ `show ${notices.length} new notifications` }
          color='inherit'
          disabled={ !notices.length }
          { ...bindTrigger(popupState) }
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
          getContentAnchorEl={ null }
          { ...bindMenu(popupState) }
        >
          {notices.map((notice) => (
            <NoticeMenuItem
              key={ notice.id }
              notice={ notice }
              handleClose={ handleClose }
            />
          ))}
        </Menu>
      </>
    </PrivateComponent>
  )
}

export default NoticesMenu
