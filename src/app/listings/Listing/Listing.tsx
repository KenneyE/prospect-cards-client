import React from 'react'
import useStyles from './styles'
import { ListingQuery, ListingStatusEnum } from 'types/graphql'
import { Grid, Typography } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'
import ReportListingButton from 'app/listings/ReportListingButton'
import AdminComponent from 'app/AdminComponent'
import AcceptListingReportsButton from 'app/admin/AcceptListingReportsButton'
import ToggleListingEnabledButton from 'app/admin/ToggleListingEnabledButton'

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
    <Grid>
      <Carousel
        showThumbs={ false }
        showStatus={ false }
        infiniteLoop
        centerMode={ images.length > 1 }
        showIndicators={ images.length > 1 }
        width={ 400 }
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
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <ReportListingButton listingId={ id } />
      <AdminComponent>
        {status !== ListingStatusEnum.Sold ? (
          <>
            <AcceptListingReportsButton listingId={ id } />
            <ToggleListingEnabledButton listingId={ id } status={ status } />
          </>
        ) : (
          ''
        )}
      </AdminComponent>
    </Grid>
  )
}

export default Listing
