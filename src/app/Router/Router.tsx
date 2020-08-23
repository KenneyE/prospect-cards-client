import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
import Login from 'app/Login'
import NewListing from 'app/listings/NewListing'
import Home from 'app/Home'
import PrivateRoute from 'app/Router/PrivateRoute'
import SellerSetup from 'app/account/SellerSetup'
import StripeAccountVerification from 'app/account/StripeAccountVerification'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <PrivateRoute exact path='/listings/new' component={ NewListing } />
      <PrivateRoute exact path='/account/sell' component={ SellerSetup } />
      <PrivateRoute exact path='/account/verification' component={ StripeAccountVerification } />

      <Route exact path='/login' component={ Login } />
      <Redirect to='/' />
    </Switch>
  )
}

export default Router
