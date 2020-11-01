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
import { Carousel } from 'react-responsive-carousel'
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

const Listing = ({
  data: {
    listing: { id, title, description, images, status },
  },
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Card className={ classes.root }>
      <CardContent>
        <Grid container spacing={ 4 }>
          <Grid item xs={ 6 }>
            <Carousel
              showThumbs={ false }
              showStatus={ false }
              infiniteLoop
              centerMode={ images.length > 1 }
              showIndicators={ images.length > 1 }
            >
              {images.map((image, ind) => {
                return (
                  <img
                    key={ image.id }
                    src={ image.url }
                    alt={ `${title} No. ${ind}` }
                    className={ classes.img }
                  />
                )
              })}
            </Carousel>
          </Grid>
          <Grid item xs={ 6 }>
            <div className={ classes.detailsWrapper }>
              <Typography variant='h1'>{title}</Typography>
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
