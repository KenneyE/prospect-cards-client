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

interface Props {
  data: ListingQuery;
}

const Listing = ({ data: { listing } }: Props): JSX.Element => {
  const classes = useStyles()
  const { id, title, description, player, status } = listing

  return (
    <Card className={ classes.root }>
      <CardContent>
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
              <div className={ classes.offerButtonsContainer }>
                <PrivateComponent
                  loggedOut={
                    <Button component={ Link } to='/login'>
                      Login to Purchase
                    </Button>
                  }
                >
                  <>
                    <Button variant='contained'>Buy Now</Button> or
                    <OfferForm listingId={ id } />
                  </>
                </PrivateComponent>
              </div>
              <Typography variant='caption'>Seller</Typography>
              <div className={ classes.sellerWrapper }>He's good</div>
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

      <CardActions>
        <ReportListingButton listingId={ id } />
      </CardActions>
    </Card>
  )
}

export default Listing
