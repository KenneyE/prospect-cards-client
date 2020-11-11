import React from 'react'
import useStyles from './styles'
import { Paper, Typography } from '@material-ui/core'
import PrivateComponent from 'app/PrivateComponent'
import OfferForm from 'app/OfferForm'
import { useHistory } from 'react-router-dom'
import Carousel from 'app/common/Carousel'
import { centsToDollars } from 'lib/money'
import { dateFormat } from 'lib/time'
import FavoriteListingToggle from 'app/FavoriteListingToggle'
import { ListingFragment } from 'types/graphql'

interface Props {
  listing: ListingFragment;
}

const SearchResult = ({ listing }: Props): JSX.Element => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <Paper
      key={ listing.id }
      className={ classes.resultCard }
      onClick={ () => {
        history.push(`/listings/${listing.id}`)
      } }
    >
      <Typography className={ classes.date }>
        {dateFormat(listing.createdAt)}
      </Typography>

      <div onClick={ (e) => e.stopPropagation() }>
        <PrivateComponent>
          <FavoriteListingToggle
            listingId={ listing.id }
            isFavorited={ Boolean(listing.isFavorited) }
          />
        </PrivateComponent>
        <Carousel listing={ listing } height={ 240 } />
      </div>
      <Typography variant='body2'>{listing.title}</Typography>
      <Typography variant='body2'>Player: {listing.player}</Typography>
      <Typography variant='body2'>
        Description: {listing.description}
      </Typography>
      <div className={ classes.grow } />
      <Typography variant='body2'>{centsToDollars(listing.price)}</Typography>
      <PrivateComponent>
        <OfferForm listingId={ listing.id } />
      </PrivateComponent>
    </Paper>
  )
}

export default SearchResult
