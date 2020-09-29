import React from 'react'
import { ListingsQuery } from 'types/graphql'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import useStyles from './styles'
import Carousel from 'app/common/Carousel/Carousel'

interface Props {
  data: ListingsQuery;
}

const MyListings = ({
  data: {
    viewer: { listings },
  },
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      {listings.map((listing) => (
        <Card key={ listing.id } className={ classes.root }>
          <CardActionArea>
            <CardMedia title={ listing.player.name }>
              <Carousel listing={ listing } />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {listing.player.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {listing.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              I'm a button
            </Button>
            <Button size='small' color='primary'>
              Button me up
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  )
}

export default MyListings
