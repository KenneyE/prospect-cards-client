import React from 'react'
import { UserListingsQuery } from 'types/graphql'
import { Grid, Typography } from '@material-ui/core'
import ListingsGrid from 'app/listings/ListingsGrid'

interface Props {
  data: UserListingsQuery;
}

const MyListings = ({
  data: {
    viewer: { availableListings, soldListings },
  },
}: Props): JSX.Element => {
  return (
    <>
      <Typography variant='h1'>Active Listings</Typography>
      <Grid container spacing={ 2 }>
        {availableListings.length ? (
          <ListingsGrid listings={ availableListings } />
        ) : (
          <Typography>You have no active listings</Typography>
        )}
      </Grid>
      <br />
      <Typography variant='h1'>Sold Listings</Typography>
      <Grid container spacing={ 2 }>
        {soldListings.length ? (
          <ListingsGrid listings={ soldListings } />
        ) : (
          <Typography>You have no sold listings</Typography>
        )}
      </Grid>
    </>
  )
}

export default MyListings
