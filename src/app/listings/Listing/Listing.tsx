import React from 'react'
import useStyles from './styles'
import { ListingQuery, ListingStatusEnum } from 'types/graphql'
import {
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Divider,
} from '@material-ui/core'
import Carousel from 'app/common/Carousel'
import { Link } from 'react-router-dom'
import ReportListingButton from 'app/listings/ReportListingButton'
import AdminComponent from 'app/AdminComponent'
import AcceptListingReportsButton from 'app/admin/AcceptListingReportsButton'
import ToggleListingEnabledButton from 'app/admin/ToggleListingEnabledButton'
import PrivateComponent from 'app/PrivateComponent'
import OfferForm from 'app/OfferForm'
import FavoriteListingToggle from 'app/FavoriteListingToggle'

interface Props {
  data: ListingQuery;
}

const Listing = ({ data: { listing } }: Props): JSX.Element => {
  const classes = useStyles()
  const {
    id,
    title,
    description,
    player,
    status,
    ownedByUser,
    isFavorited,
  } = listing

  return (
    <Card className={ classes.root }>
      <CardContent>
        <PrivateComponent>
          <span
            onClick={ (e) => e.stopPropagation() }
            className={ classes.favoriteContainer }
          >
            <FavoriteListingToggle
              listingId={ id }
              isFavorited={ Boolean(isFavorited) }
            />
          </span>
        </PrivateComponent>
        <Grid container spacing={ 4 }>
          <Grid item md={ 6 } xs={ 12 }>
            <Carousel listing={ listing } height={ 500 } />
          </Grid>
          <Grid item md={ 6 } xs={ 12 }>
            <div className={ classes.detailsWrapper }>
              <Typography variant='h1'>{title}</Typography>
              <Typography variant='h2'>{player}</Typography>
              <Typography>{description}</Typography>
              <Divider className={ classes.divider } />
              {!ownedByUser && (
                <div className={ classes.offerButtonsContainer }>
                  <PrivateComponent
                    loggedOut={
                      <Button component={ Link } to='/login'>
                        Login to Purchase
                      </Button>
                    }
                  >
                    <>
                      <OfferForm listingId={ id } buyNow /> or
                      <OfferForm listingId={ id } />
                    </>
                  </PrivateComponent>
                </div>
              )}
              <Typography variant='caption'>Seller</Typography>
              <div className={ classes.sellerWrapper }>
                This is info about the seller at some point.
              </div>
              <AdminComponent>
                {status !== ListingStatusEnum.Sold ? (
                  <>
                    <AcceptListingReportsButton listingId={ id } />
                    <ToggleListingEnabledButton
                      listingId={ id }
                      status={ status }
                    />
                  </>
                ) : (
                  ''
                )}
              </AdminComponent>
            </div>
          </Grid>
        </Grid>
      </CardContent>

      {!ownedByUser && (
        <PrivateComponent>
          <CardActions>
            <ReportListingButton listingId={ id } />
          </CardActions>
        </PrivateComponent>
      )}
    </Card>
  )
}

export default Listing
