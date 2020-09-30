import React from 'react'
import useStyles from './styles'
import { ResultCard } from '@appbaseio/reactivesearch'
import { Button, Paper, Typography } from '@material-ui/core'
import PrivateComponent from 'app/PrivateComponent'
import OfferForm from 'app/OfferForm'
import { Link } from 'react-router-dom'
import Carousel from 'app/common/Carousel'
import { ElasticListing } from 'types'

interface Props {
  item: ElasticListing;
}

const SearchResult = ({ item }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Paper key={ item._id } className={ classes.resultCard }>
      <Carousel listing={ item } />
      <ResultCard.Title
        dangerouslySetInnerHTML={ {
          __html: item.title,
        } }
      />
      <Typography>Player: {item.player.name}</Typography>
      <Typography>Description: {item.description}</Typography>
      <div className={ classes.grow } />
      <PrivateComponent>
        <OfferForm listingId={ item.id } />
      </PrivateComponent>
      <Button fullWidth component={ Link } to={ `/listings/${item.id}` }>
        View
      </Button>
    </Paper>
  )
}

export default SearchResult
