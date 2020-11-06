import React from 'react'
import useStyles from './styles'
import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  AppBar,
  Divider,
  Button,
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreIcon from '@material-ui/icons/MoreVert'
import LogoutButton from 'app/common/LogoutButton'
import RoundButton from 'app/common/RoundButton'
import { Link } from 'react-router-dom'
import PrivateComponent from 'app/PrivateComponent'
import { AccountQuery } from 'types/graphql'
// import CategoryLink from 'app/common/CategoryLink'
import NoticesMenu from 'app/NoticesMenu'
import PlusIcon from '../../assets/svg/PlusIcon'

interface Props {
  data?: AccountQuery;
  loading: boolean;
}

const NavBar = ({ data, loading }: Props): JSX.Element => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null)

  const isSeller = data?.maybeViewer?.stripeAccount.chargesEnabled
  // const hasSubscription = data?.maybeViewer.hasActiveSubscription
  const hasPaymentMethod = data?.maybeViewer?.hasPaymentMethod

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={ anchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id={ menuId }
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ handleMenuClose } component={ Link } to='/profile'>
        Profile
      </MenuItem>
      {isSeller && (
        <MenuItem onClick={ handleMenuClose } component={ Link } to='/listings'>
          My Listings
        </MenuItem>
      )}

      <Divider />
      {!hasPaymentMethod && (
        <MenuItem
          onClick={ handleMenuClose }
          component={ Link }
          to='account/add_payment'
        >
          Add Payment Method
        </MenuItem>
      )}

      {isSeller ? (
        <MenuItem onClick={ handleMenuClose } component={ Link } to='listings/new'>
          Create a Listing
        </MenuItem>
      ) : (
        <MenuItem onClick={ handleMenuClose } component={ Link } to='account/sell'>
          Start Selling
        </MenuItem>
      )}
      {/*{!hasSubscription && (*/}
      {/*  <PrivateComponent>*/}
      {/*    <MenuItem*/}
      {/*      onClick={ handleMenuClose }*/}
      {/*      component={ Link }*/}
      {/*      to='membership/new'*/}
      {/*    >*/}
      {/*      Become a Member*/}
      {/*    </MenuItem>*/}
      {/*  </PrivateComponent>*/}
      {/*)}*/}

      <Divider />

      <MenuItem>
        <LogoutButton />
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id={ mobileMenuId }
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem>
        <NoticesMenu notices={ data?.maybeViewer?.unreadNotices } />
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={ handleProfileMenuOpen }>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={ classes.grow }>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography
            component={ Link }
            to='/'
            className={ classes.title }
            variant='h6'
            noWrap
          >
            Prospect Cards
          </Typography>
          <div className={ classes.grow } />
          <div className={ classes.rightNav }>
            {isSeller && (
              <RoundButton
                variant='outlined'
                color='secondary'
                component={ Link }
                to='/listings/new'
                size='small'
                startIcon={ <PlusIcon /> }
              >
                Sell Now
              </RoundButton>
            )}

            <PrivateComponent>
              <Button component={ Link } to='/' color='secondary'>
                View Listings
              </Button>
            </PrivateComponent>
            <PrivateComponent>
              <Button component={ Link } to='/listings' color='secondary'>
                My Offers
              </Button>
            </PrivateComponent>

            {/*<CategoryLink category='Basketball' />*/}
            {/*<CategoryLink category='Baseball' />*/}
            {/*<CategoryLink category='Football' />*/}
            {/*<CategoryLink category='Hockey' />*/}
            {/*<CategoryLink category='Soccer' />*/}
            {/*<CategoryLink category='Other' />*/}

            {loading || (
              <PrivateComponent
                loggedOut={
                  <>
                    <div className={ classes.grow } />
                    <div>
                      <Button
                        component={ Link }
                        variant='outlined'
                        color='secondary'
                        to='/register'
                      >
                        Register
                      </Button>
                      <Button
                        component={ Link }
                        variant='contained'
                        color='primary'
                        to='/login'
                      >
                        Log in
                      </Button>
                    </div>
                  </>
                }
              >
                <>
                  <div className={ classes.sectionDesktop }>
                    <NoticesMenu notices={ data?.maybeViewer?.unreadNotices } />
                    <IconButton
                      edge='end'
                      aria-label='account of current user'
                      aria-controls={ menuId }
                      aria-haspopup='true'
                      onClick={ handleProfileMenuOpen }
                      color='inherit'
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>
                  <div className={ classes.sectionMobile }>
                    <IconButton
                      aria-label='show more'
                      aria-controls={ mobileMenuId }
                      aria-haspopup='true'
                      onClick={ handleMobileMenuOpen }
                      color='inherit'
                    >
                      <MoreIcon />
                    </IconButton>
                  </div>
                </>
              </PrivateComponent>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

export default NavBar
