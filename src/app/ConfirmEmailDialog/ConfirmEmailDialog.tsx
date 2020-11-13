import React from 'react'
import Dialog from 'app/common/Dialog'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router'

interface Props {
  open: boolean;
  retry: VoidFunction;
  loading: boolean;
}

const ConfirmEmailDialog = ({ open, retry, loading }: Props): JSX.Element => {
  const history = useHistory()

  return (
    <Dialog
      open={ open }
      loading={ loading }
      proceed={ (resp) => {
        if (resp) {
          retry()
        } else {
          history.goBack()
        }
      } }
      header='Please confirm your email address to continue.'
      rejectText='Not Now'
      confirmText='Retry'
      disableBackdropClick
    >
      <Typography>
        It looks like you haven't confirmed your email address yet. Please
        confirm your email address and try again.
      </Typography>
    </Dialog>
  )
}

export default ConfirmEmailDialog
