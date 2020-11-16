import React from 'react'
import { UserOffersQuery } from 'types/graphql'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles'
import { centsToDollars } from 'lib/money'

interface Props {
  data: UserOffersQuery;
}

const MyOffers = ({
  data: {
    viewer: { offers },
  },
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <Typography>Offers You've Placed</Typography>
      {offers.length ? (
        offers.map(
          (offer): JSX.Element => (
            <Card key={ offer.id } className={ classes.card }>
              <div className={ classes.details }>
                <CardContent>
                  <Typography gutterBottom variant='body1'>
                    {offer.listing.title}
                  </Typography>
                  <Typography gutterBottom variant='body1'>
                    {centsToDollars(offer.price)}
                  </Typography>
                </CardContent>
              </div>
              <div className={ classes.imgWrapper }>
                <CardMedia
                  className={ classes.img }
                  component='img'
                  alt={ offer.listing.title }
                  image={ offer.listing.images[0].fallbackUrl }
                  title={ offer.listing.title }
                />
              </div>
            </Card>
          ),
        )
      ) : (
        <Typography variant='body2'>You have no current offers</Typography>
      )}
    </>
  )
}

export default MyOffers
