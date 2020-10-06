import React from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import Carousel from 'app/common/Carousel'
import { centsToDollars } from 'lib'
import AcceptOfferButton from 'app/AcceptOfferButton'
import { ListingFragment } from 'types/graphql'
import useStyles from './styles'
interface Props {
  listings: ListingFragment[];
}

const ListingsGrid = ({ listings }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      {listings.map((listing) => (
        <Grid item key={ listing.id } md={ 3 } xs={ 12 }>
          <Card className={ classes.root }>
            <CardActionArea>
              <CardMedia title={ listing.player.name }>
                <Carousel listing={ listing } />
              </CardMedia>
            </CardActionArea>

            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {listing.player.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {listing.description}
              </Typography>

              <TableContainer>
                <Table className={ classes.table } aria-label='Offers table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Amount</TableCell>
                      <TableCell align='right'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listing.offers.map((offer) => (
                      <TableRow key={ offer.id }>
                        <TableCell component='th' scope='row'>
                          {centsToDollars(offer.price)}
                        </TableCell>
                        <TableCell align='right'>
                          <AcceptOfferButton
                            offerId={ offer.id }
                            price={ centsToDollars(offer.price) }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
            <CardActions>
              <Button size='small' color='primary'>
                I'm a button
              </Button>
              <Button size='small' color='primary'>
                Button me up
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default ListingsGrid
