import React from 'react'
import { PurchasesQuery } from 'types/graphql'
import { Fab, Paper, Typography } from '@material-ui/core'
import useStyles from './styles'
import Image from 'app/common/Image'
import { centsToDollars } from 'lib/money'
import { dateFormat } from 'lib/time'
import ReceiptIcon from 'assets/svg/ReceiptIcon'

interface Props {
  data: PurchasesQuery;
}

const PurchaseHistory = ({
  data: {
    viewer: { purchases },
  },
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      {purchases.length ?
        purchases.map((purchase) => (
          <Paper key={ purchase.id } className={ classes.purchase }>
            <Image
              image={ purchase.listing.images[0] }
              className={ classes.img }
            />
            <Typography>{purchase.listing.title}</Typography>

            <Typography>{centsToDollars(purchase.offer.price)}</Typography>
            <Typography>{purchase.listing.seller.username}</Typography>
            <Typography>{dateFormat(purchase.createdAt)}</Typography>
            <Fab color='primary'>
              <ReceiptIcon />
            </Fab>
          </Paper>
        )) :
        'You have no previous purchases'}
    </>
  )
}

export default PurchaseHistory
