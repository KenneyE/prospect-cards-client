import React from 'react'
import useStyles from './styles'
import { Carousel } from 'react-responsive-carousel'
import { ResultCard } from '@appbaseio/reactivesearch'
import { Button, Paper, Typography } from '@material-ui/core'
import PrivateComponent from 'app/PrivateComponent'
import OfferForm from 'app/OfferForm'
import { Link } from 'react-router-dom'

interface Props {
  item: any;
}

const SearchResult = ({ item }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Paper key={ item._id } className={ classes.resultCard }>
      <Carousel
        showThumbs={ false }
        showStatus={ false }
        infiniteLoop
        centerMode={ item.image_urls.length > 1 }
        showIndicators={ item.image_urls.length > 1 }
      >
        {item.image_urls.map((image: string, ind: number) => {
          return (
            <img
              key={ image }
              src={ image }
              alt={ `${item.player.name} No. ${ind}` }
              className={ classes.img }
            />
          )
        })}
      </Carousel>
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
