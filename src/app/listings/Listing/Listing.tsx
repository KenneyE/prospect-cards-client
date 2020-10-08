import React from 'react'
import useStyles from './styles'
import { ListingQuery } from 'types/graphql'
import { Grid, Typography } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'
import ReportListingButton from 'app/listings/ReportListingButton'

interface Props {
  data: ListingQuery;
}

const Listing = ({
  data: {
    listing: { id, title, description, imageUrls },
  },
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid>
      <Carousel
        showThumbs={ false }
        showStatus={ false }
        infiniteLoop
        centerMode={ imageUrls.length > 1 }
        showIndicators={ imageUrls.length > 1 }
        width={ 400 }
      >
        {imageUrls.map((image: string, ind: number) => {
          return (
            <img
              key={ image }
              src={ image }
              alt={ `${title} No. ${ind}` }
              className={ classes.img }
            />
          )
        })}
      </Carousel>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
      <ReportListingButton listingId={ id } />
    </Grid>
  )
}

export default Listing
