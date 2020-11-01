import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import Router from 'app/Router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Elements } from '@stripe/react-stripe-js'

import theme from 'lib/theme'
import stripe from 'lib/stripe'
import useStyles from './styles'
import NavBar from 'app/NavBar'
import Footer from 'app/Footer'

const AppContainer = (): JSX.Element => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={ theme }>
      <CssBaseline />
      <Elements stripe={ stripe }>
        <NavBar />
        <div className={ classes.root }>
          <main className={ classes.content }>
            <div className={ classes.appBarSpacer } />
            <Container maxWidth='xl' className={ classes.container }>
              <Router />
            </Container>
          </main>
        </div>
        <Footer />
        <ToastContainer position={ toast.POSITION.BOTTOM_CENTER } />
      </Elements>
    </MuiThemeProvider>
  )
}

export default AppContainer
