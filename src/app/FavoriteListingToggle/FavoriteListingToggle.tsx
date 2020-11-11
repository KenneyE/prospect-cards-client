import React from 'react'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import useStyles from './styles'

interface Props {
  handleClick: VoidFunction;
  isFavorited: boolean;
}

const ReportListingButton = ({
  handleClick,
  isFavorited,
}: Props): JSX.Element => {
  const classes = useStyles()
  return isFavorited ? (
    <Favorite className={ classes.icon } onClick={ handleClick } />
  ) : (
    <FavoriteBorder className={ classes.icon } onClick={ handleClick } />
  )
}

export default ReportListingButton
