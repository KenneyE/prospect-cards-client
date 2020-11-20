import React from 'react'
import useStyles from './styles'
import { Paper, Typography } from '@material-ui/core'
import PrivateComponent from 'app/PrivateComponent'
import { useHistory } from 'react-router-dom'
import Carousel from 'app/common/Carousel'
import { centsToDollars } from 'lib/money'
import FavoriteListingToggle from 'app/favorites/FavoriteListingToggle'
import { ListingFragment } from 'types/graphql'
import OfferForm from 'app/OfferForm'
import StopPropogation from 'app/common/StopPropogation'

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
      <Typography className={ classes.date } display='inline'>
        <PrivateComponent>
          <StopPropogation className={ classes.favoriteContainer }>
            <FavoriteListingToggle
              listingId={ listing.id }
              isFavorited={ Boolean(listing.isFavorited) }
            />
          </StopPropogation>
        </PrivateComponent>
      </Typography>

      <StopPropogation>
        <Carousel listing={ listing } height={ 240 } />
      </StopPropogation>
      <Typography variant='body2'>{listing.title}</Typography>
      <div className={ classes.grow } />
      <Typography variant='body2'>{centsToDollars(listing.price)}</Typography>
      <PrivateComponent>
        <StopPropogation>
          <OfferForm listingId={ listing.id } buyNow />
        </StopPropogation>
      </PrivateComponent>
    </Paper>
  )
}

export default SearchResult
