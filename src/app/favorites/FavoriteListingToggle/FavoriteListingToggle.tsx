import React from 'react'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import useStyles from './styles'
import LoadingButton from 'app/common/LoadingButton'

interface Props {
  handleClick: VoidFunction;
  isFavorited: boolean;
  button?: boolean;
  loading: boolean;
}

const FavoriteListingToggle = ({
  handleClick,
  isFavorited,
  button,
  loading,
}: Props): JSX.Element => {
  const classes = useStyles()

  if (button) {
    return (
      <LoadingButton loading={ loading } onClick={ handleClick }>
        {isFavorited ? 'Remove' : 'Favorite'}
      </LoadingButton>
    )
  } else {
    return isFavorited ? (
      <Favorite className={ classes.icon } onClick={ handleClick } />
    ) : (
      <FavoriteBorder className={ classes.icon } onClick={ handleClick } />
    )
  }
}

export default FavoriteListingToggle
