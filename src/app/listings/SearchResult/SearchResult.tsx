import React from 'react'
import useStyles from './styles'
import { Paper, Typography } from '@material-ui/core'
import PrivateComponent from 'app/PrivateComponent'
import OfferForm from 'app/OfferForm'
import { useHistory } from 'react-router-dom'
import Carousel from 'app/common/Carousel'
import { ElasticListing } from 'types'
import { centsToDollars } from 'lib/money'
import { dateFormat } from 'lib/time'

interface Props {
  item: ElasticListing;
}

const SearchResult = ({ item }: Props): JSX.Element => {
  const history = useHistory()
  const classes = useStyles()

  return (
    <Paper
      key={ item._id }
      className={ classes.resultCard }
      onClick={ () => {
        history.push(`/listings/${item.id}`)
      } }
    >
      <Typography className={ classes.date }>
        {dateFormat(item.createdAt)}
      </Typography>

      <div onClick={ (e) => e.stopPropagation() }>
        <Carousel listing={ item } />
      </div>
      <Typography variant='body2'>{item.title}</Typography>
      <Typography variant='body2'>Player: {item.player.name}</Typography>
      <Typography variant='body2'>Description: {item.description}</Typography>
      <div className={ classes.grow } />
      <Typography variant='body2'>{centsToDollars(item.price)}</Typography>
      <PrivateComponent>
        <OfferForm listingId={ item.id } />
      </PrivateComponent>
    </Paper>
  )
}

export default SearchResult
