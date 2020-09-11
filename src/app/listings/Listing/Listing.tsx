import React from 'react'
import useStyles from './styles'
import { ListingQuery } from 'types/graphql'
import { Grid, Typography } from '@material-ui/core'

interface Props {
  data: ListingQuery;
}

const Listing = ({ data }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid>
      <Typography className={ classes.title }>{data.listing.title}</Typography>
    </Grid>
  )
}

export default Listing
