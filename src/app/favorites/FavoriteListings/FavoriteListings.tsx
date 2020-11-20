import React from 'react'
import useStyles from './styles'
import { ListingFragment } from 'types/graphql'
import Image from 'app/common/Image'
import { Paper, Typography } from '@material-ui/core'
import { centsToDollars } from 'lib/money'
import { dateFormat } from 'lib/time'
import FavoriteListingToggle from 'app/favorites/FavoriteListingToggle'
import OfferForm from 'app/OfferForm'
import StopPropogation from 'app/common/StopPropogation'
import { useHistory } from 'react-router-dom'

interface Props {
  listings: ListingFragment[];
}

const FavoriteListings = ({ listings }: Props): JSX.Element => {
  const history = useHistory()

  const classes = useStyles()

  return (
    <div>
      {listings.length ? (
        listings.map((listing) => (
          <Paper
            key={ listing.id }
            className={ classes.listing }
            onClick={ () => {
              history.push(`/listings/${listing.id}`)
            } }
          >
            <Image image={ listing.images[0] } className={ classes.img } />
            <Typography>{listing.title}</Typography>

            <Typography>{centsToDollars(listing.price)}</Typography>
            <Typography>{listing.seller.username}</Typography>
            <Typography>{dateFormat(listing.createdAt)}</Typography>
            <StopPropogation>
              <OfferForm listingId={ listing.id } buyNow />
            </StopPropogation>
            <StopPropogation>
              <FavoriteListingToggle
                button
                listingId={ listing.id }
                isFavorited={ listing.isFavorited }
              />
            </StopPropogation>
          </Paper>
        ))
      ) : (
        <Typography>You have no favorited listings...</Typography>
      )}
    </div>
  )
}

export default FavoriteListings
