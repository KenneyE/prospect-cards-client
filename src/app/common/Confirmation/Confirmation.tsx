import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core'
import { confirmable, ReactConfirmProps } from 'react-confirm'
import theme from 'lib/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions'

interface Props extends ReactConfirmProps {
  text: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ ref } { ...props } />
})

const Confirmation = ({ show, proceed, text }: Props): JSX.Element => {
  return (
    <MuiThemeProvider theme={ theme }>
      <Dialog
        open={ show }
        TransitionComponent={ Transition }
        onClose={ () => proceed() }
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => proceed() } color='secondary'>
            Close
          </Button>
          <Button
            variant='contained'
            onClick={ () => proceed('agree') }
            color='primary'
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  )
}

export default confirmable(Confirmation)
