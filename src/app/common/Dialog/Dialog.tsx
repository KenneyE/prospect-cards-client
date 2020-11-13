import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Slide,
} from '@material-ui/core'
import theme from 'lib/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions'
import LoadingButton from 'app/common/LoadingButton'

interface Props extends DialogProps {
  open: boolean;
  loading?: boolean;
  header: string;
  rejectText?: string;
  confirmText?: string;
  children: string | JSX.Element;
  proceed: (resp?: boolean) => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ ref } { ...props } />
})

const CustomDialog = ({
  open,
  loading,
  header,
  rejectText,
  confirmText,
  proceed,
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <MuiThemeProvider theme={ theme }>
      <Dialog
        open={ open }
        TransitionComponent={ Transition }
        onClose={ () => proceed() }
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        { ...props }
      >
        <DialogTitle id='alert-dialog-title'>{header}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => proceed() } color='secondary'>
            {rejectText || 'Close'}
          </Button>
          <LoadingButton
            loading={ loading || false }
            variant='contained'
            onClick={ () => proceed(true) }
            color='primary'
          >
            {confirmText || 'Submit'}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  )
}

export default CustomDialog
