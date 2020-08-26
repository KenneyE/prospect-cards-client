import React from 'react'
import {
  makeStyles,
  MuiThemeProvider,
  Theme,
  StyleRules,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import Router from 'app/Router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Elements} from '@stripe/react-stripe-js'

import theme from 'lib/theme'
import stripe from 'lib/stripe'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      backgroundColor: '#f6f8fa',
    },
  }),
)

export interface Props {
  loggedIn: boolean;
}

const AppContainer = ({ loggedIn }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <Elements stripe={ stripe }>
        <div className={ classes.root }>
          <main className={ classes.content }>
            <div className={ classes.appBarSpacer } />
            <Container maxWidth='xl' className={ classes.container }>
              <Router />
            </Container>
          </main>
        </div>
        <ToastContainer position={ toast.POSITION.BOTTOM_CENTER } />
      </Elements>
    </MuiThemeProvider>
  )
}

export default AppContainer
