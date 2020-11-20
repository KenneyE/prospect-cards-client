import React from 'react'
import Dumb from './FavoriteListingToggle'
import { FavoritesDocument, useToggleFavoriteMutation } from 'types/graphql'

interface Props {
  listingId: number;
  isFavorited: boolean;
  button?: boolean;
}
const FavoriteListingToggle = ({
  listingId,
  isFavorited,
  button,
}: Props): JSX.Element => {
  const [toggle, { loading }] = useToggleFavoriteMutation({
    variables: { listingId, isFavorited: !isFavorited },
    refetchQueries: [{ query: FavoritesDocument }],
    awaitRefetchQueries: button,
  })

  const handleClick = () => {
    toggle()
  }
  return (
    <Dumb
      handleClick={ handleClick }
      isFavorited={ isFavorited }
      button={ button }
      loading={ loading }
    />
  )
}

export default FavoriteListingToggle
