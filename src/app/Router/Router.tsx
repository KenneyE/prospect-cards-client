import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'
import Login from 'app/Login'
import NewListing from 'app/listings/NewListing'
import Listing from 'app/listings/Listing'
import Home from 'app/Home'
import PrivateRoute from 'app/Router/PrivateRoute'
import SellerSetup from 'app/account/SellerSetup'
import StripeAccountVerification from 'app/account/StripeAccountVerification'
import AddPayment from 'app/account/AddPayment'
import PaymentAdded from 'app/account/PaymentAdded'
import NewMembership from 'app/memberships/NewMembership'
import Register from 'app/Register'
import AcceptInvitation from 'app/AcceptInvitation'
import Profile from 'app/profile/Profile'
import AccountListings from 'app/listings/AccountListings'
import ConfirmEmail from 'app/ConfirmEmail'
import ResetPassword from 'app/ResetPassword'
import ForgotPassword from 'app/ForgotPassword'
import FAQ from 'app/FAQ'
import EmailPreferences from 'app/profile/EmailPreferences'
import Favorites from 'app/favorites/Favorites'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/c/:category' component={ Home } />
      <PrivateRoute exact path='/listings/new' component={ NewListing } />
      <PrivateRoute exact path='/listings' component={ AccountListings } />
      <Route exact path='/listings/:id' component={ Listing } />

      <PrivateRoute exact path='/account/sell' component={ SellerSetup } />
      <PrivateRoute
        path='/account/add_payment/:price?'
        component={ AddPayment }
      />
      <PrivateRoute
        exact
        path='/account/payment_added'
        component={ PaymentAdded }
      />
      <PrivateRoute
        exact
        path='/account/verification'
        component={ StripeAccountVerification }
      />
      <PrivateRoute exact path='/membership/new' component={ NewMembership } />
      <PrivateRoute exact path='/profile/:tab?' component={ Profile } />
      <PrivateRoute exact path='/favorites' component={ Favorites } />

      <Route exact path='/faq' component={ FAQ } />

      <Route exact path='/login' component={ Login } />
      <Route exact path='/register' component={ Register } />
      <Route
        exact
        path='/accept-invitation/:token'
        component={ AcceptInvitation }
      />
      <Route exact path='/confirm/:token' component={ ConfirmEmail } />
      <Route exact path='/forgot-password' component={ ForgotPassword } />
      <Route exact path='/reset-password/:token' component={ ResetPassword } />
      <Route
        exact
        path='/email-preferences/:token'
        component={ EmailPreferences }
      />

      <Redirect to='/' />
    </Switch>
  )
}

export default Router
